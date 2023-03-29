import { Command, Flags } from "@oclif/core";
import path = require("node:path");
import { existsSync } from "fs-extra";
import { ensureSwankyProject, Spinner } from "@astar-network/swanky-core";
import execa = require("execa");
import inquirer = require("inquirer");
import { zombienetConfig, providerChoices } from "./init";

export class StartCommand extends Command {
  static description = "Start Zomnienet";

  static flags = {
    verbose: Flags.boolean({ char: "v", description: "Verbose output" }),
    provider: Flags.string({ char: "p", description: "Provider to use", default: "native" }),
  };

  async run(): Promise<void> {
    ensureSwankyProject();

    const { flags } = await this.parse(StartCommand);

    const projectPath = path.resolve();
    const binPath = path.resolve(projectPath, "zombienet", "bin")
    if (!existsSync(path.resolve(binPath, "zombienet"))) {
      this.error("Zombienet has not initialized. Run `swanky zombienet:init` first");
    }

    const spinner = new Spinner(flags.verbose);

    const configFilePath = path.resolve(projectPath, "zombienet", "config", flags.provider, zombienetConfig);

    if (!existsSync(configFilePath)) {
      this.error(`Zombienet config for ${flags.provider} does not exist. Add provider config first.`);
    }

    await execa.command(
        `./zombienet/bin/zombienet \
            spawn --provider ${flags.provider} \
            ./zombienet/config/${flags.provider}/zombienet.config.toml
        `,
        {
          stdio: "inherit",
        }
    );

    this.log("ZombieNet started successfully");
  }
}

async function startZombienet() {
    
}
