import { Command, Flags } from "@oclif/core";
import path = require("node:path");
import { existsSync } from "fs-extra";
import { ensureSwankyProject, Spinner } from "@astar-network/swanky-core";
import execa = require("execa");
import inquirer = require("inquirer");
import { copyTemplateFile, zombienetConfig, templatePath, providerChoices } from "./init";

export class AddProviderCommand extends Command {
  static description = "Add Zomnienet provider config";

  static flags = {
    verbose: Flags.boolean({ char: "v", description: "Verbose output" }),
    provider: Flags.string({ char: "p", description: "Provider to use" }),
  };

  async run(): Promise<void> {
    ensureSwankyProject();

    const { flags } = await this.parse(AddProviderCommand);

    const projectPath = path.resolve();
    const binPath = path.resolve(projectPath, "zombienet", "bin")
    if (!existsSync(path.resolve(binPath, "zombienet"))) {
      this.error("Zombienet has not initialized. Run `swanky zombienet:init` first");
    }

    const spinner = new Spinner(flags.verbose);

    let provider = flags.provider;
    if (provider === undefined) {
      const answer = await inquirer.prompt([{
        name: "provider",
        type: "list",
        choices: providerChoices,
        message: "Select a provider to use",
      }])
      provider = answer.provider;
    }

    const configPath = path.resolve(projectPath, "zombienet", "config")

    if (existsSync(path.resolve(configPath, provider!, zombienetConfig))) {
      this.error(`Zombienet config for ${provider!} provider already exists`);
    }

    // Copy templates
    await spinner.runCommand(
      () =>
        copyTemplateFile(path.resolve(templatePath, provider!), path.resolve(configPath, provider!)),
      "Copying template files"
    );

    this.log("ZombieNet provider config added successfully");
  }
}
