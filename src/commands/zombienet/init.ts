import { Command, Flags } from "@oclif/core";
import path = require("node:path");
import { existsSync, ensureDir, copy } from "fs-extra";
import { ensureSwankyProject, getSwankyConfig, Spinner } from "@astar-network/swanky-core";
import { DownloadEndedStats, DownloaderHelper } from "node-downloader-helper";
import execa = require("execa");
import inquirer = require("inquirer");

const zombienetConfig = "zombienet.config.toml";
const templatePath = path.resolve(__dirname, "../../templates");

export class InitZombienet extends Command {
  static description = "Initialize Zomnienet";

  static flags = {
    verbose: Flags.boolean({ char: "v", description: "Verbose output" }),
    provider: Flags.string({ char: "p", description: "Provider to use" }),
  };

  async run(): Promise<void> {
    ensureSwankyProject();

    const { flags } = await this.parse(InitZombienet);
    await getSwankyConfig();

    const spinner = new Spinner(flags.verbose);

    const projectPath = path.resolve();
    if (existsSync(path.resolve(projectPath, "zombienet", "bin", "zombienet"))) {
      this.error("Zombienet config already initialized");
    }

    let provider = flags.provider;
    if (provider === undefined) {
      const answer = await inquirer.prompt([{
        name: "provider",
        type: "list",
        choices: ["native", "k8s"],
        message: "Select a provider to use",
      }])
      provider = answer.provider;
    }

    // Copy templates
    await spinner.runCommand(
      () =>
        copyTemplateFile(path.resolve(templatePath, provider!), path.resolve(projectPath, "zombienet", provider!)),
      "Copying template files"
    );

    // Install binaries based on zombie config
    await spinner.runCommand(
      async () => new Promise<void>(async (resolve, reject) => {
        const binPath = path.resolve(projectPath, "zombienet", "bin");
        await ensureDir(binPath);
        const platform = process.platform.toString();
        const dlUrl = zombieNetBinInfo.downloadUrl[platform];
        if (!dlUrl)
          reject(`Could not download Zombienet. Platform ${process.platform} not supported!`);
        
        const dlFileDetails = await new Promise<DownloadEndedStats>((resolve, reject) => {
          const dl = new DownloaderHelper(dlUrl, binPath);
          
          dl.on("progress", (event) => {
            spinner.text(`Downloading Zombienet binary ${event.progress.toFixed(2)}%`);
          });
          dl.on("end", (event) => {
            resolve(event);
          });
          dl.on("error", (error) => {
            reject(new Error(`Error downloading Zombienet binary: , ${error.message}`));
          });
          
          dl.start().catch((error) => reject(new Error(`Error downloading Zombienet: , ${error.message}`)));
        });
      
        if (dlFileDetails.incomplete) {
          reject("Zombienet binary download incomplete");
        }
      
        await execa.command(`rn ${binPath}/${dlFileDetails.fileName} ${binPath}/zombienet`)
        await execa.command(`chmod +x ${binPath}/zombienet`);
        resolve();
      }),
      "Download Zombienet binary",
    );

    this.log("ZombieNet config Installed successfully");
  }
}

async function copyTemplateFile(templatePath: string, projectPath: string) {
  await ensureDir(projectPath);
  await copy(
    path.resolve(templatePath, zombienetConfig),
    path.resolve(projectPath, zombienetConfig)
  );
}

interface downloadUrl {
  [key: string]: string
}

const zombieNetBinInfo = {
  version: "v1.3.42",
  downloadUrl: {
    darwin:
      "https://github.com/paritytech/zombienet/releases/download/v1.3.42/zombienet-macos",
    linux:
      "https://github.com/paritytech/zombienet/releases/download/v1.3.42/zombienet-linux-x64",
  } as downloadUrl,
};
