oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g swanky-zombienet-plugin
$ swanky-zombienet-plugin COMMAND
running command...
$ swanky-zombienet-plugin (--version)
swanky-zombienet-plugin/0.0.0 darwin-arm64 node-v18.10.0
$ swanky-zombienet-plugin --help [COMMAND]
USAGE
  $ swanky-zombienet-plugin COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`swanky-zombienet-plugin hello PERSON`](#swanky-zombienet-plugin-hello-person)
* [`swanky-zombienet-plugin hello world`](#swanky-zombienet-plugin-hello-world)
* [`swanky-zombienet-plugin help [COMMANDS]`](#swanky-zombienet-plugin-help-commands)
* [`swanky-zombienet-plugin plugins`](#swanky-zombienet-plugin-plugins)
* [`swanky-zombienet-plugin plugins:install PLUGIN...`](#swanky-zombienet-plugin-pluginsinstall-plugin)
* [`swanky-zombienet-plugin plugins:inspect PLUGIN...`](#swanky-zombienet-plugin-pluginsinspect-plugin)
* [`swanky-zombienet-plugin plugins:install PLUGIN...`](#swanky-zombienet-plugin-pluginsinstall-plugin-1)
* [`swanky-zombienet-plugin plugins:link PLUGIN`](#swanky-zombienet-plugin-pluginslink-plugin)
* [`swanky-zombienet-plugin plugins:uninstall PLUGIN...`](#swanky-zombienet-plugin-pluginsuninstall-plugin)
* [`swanky-zombienet-plugin plugins:uninstall PLUGIN...`](#swanky-zombienet-plugin-pluginsuninstall-plugin-1)
* [`swanky-zombienet-plugin plugins:uninstall PLUGIN...`](#swanky-zombienet-plugin-pluginsuninstall-plugin-2)
* [`swanky-zombienet-plugin plugins update`](#swanky-zombienet-plugin-plugins-update)

## `swanky-zombienet-plugin hello PERSON`

Say hello

```
USAGE
  $ swanky-zombienet-plugin hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/shunsukew/swanky-zombienet-plugin/blob/v0.0.0/dist/commands/hello/index.ts)_

## `swanky-zombienet-plugin hello world`

Say hello world

```
USAGE
  $ swanky-zombienet-plugin hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ swanky-zombienet-plugin hello world
  hello world! (./src/commands/hello/world.ts)
```

## `swanky-zombienet-plugin help [COMMANDS]`

Display help for swanky-zombienet-plugin.

```
USAGE
  $ swanky-zombienet-plugin help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for swanky-zombienet-plugin.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.8/src/commands/help.ts)_

## `swanky-zombienet-plugin plugins`

List installed plugins.

```
USAGE
  $ swanky-zombienet-plugin plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ swanky-zombienet-plugin plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.3/src/commands/plugins/index.ts)_

## `swanky-zombienet-plugin plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ swanky-zombienet-plugin plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ swanky-zombienet-plugin plugins add

EXAMPLES
  $ swanky-zombienet-plugin plugins:install myplugin 

  $ swanky-zombienet-plugin plugins:install https://github.com/someuser/someplugin

  $ swanky-zombienet-plugin plugins:install someuser/someplugin
```

## `swanky-zombienet-plugin plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ swanky-zombienet-plugin plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ swanky-zombienet-plugin plugins:inspect myplugin
```

## `swanky-zombienet-plugin plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ swanky-zombienet-plugin plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ swanky-zombienet-plugin plugins add

EXAMPLES
  $ swanky-zombienet-plugin plugins:install myplugin 

  $ swanky-zombienet-plugin plugins:install https://github.com/someuser/someplugin

  $ swanky-zombienet-plugin plugins:install someuser/someplugin
```

## `swanky-zombienet-plugin plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ swanky-zombienet-plugin plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ swanky-zombienet-plugin plugins:link myplugin
```

## `swanky-zombienet-plugin plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ swanky-zombienet-plugin plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ swanky-zombienet-plugin plugins unlink
  $ swanky-zombienet-plugin plugins remove
```

## `swanky-zombienet-plugin plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ swanky-zombienet-plugin plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ swanky-zombienet-plugin plugins unlink
  $ swanky-zombienet-plugin plugins remove
```

## `swanky-zombienet-plugin plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ swanky-zombienet-plugin plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ swanky-zombienet-plugin plugins unlink
  $ swanky-zombienet-plugin plugins remove
```

## `swanky-zombienet-plugin plugins update`

Update installed plugins.

```
USAGE
  $ swanky-zombienet-plugin plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
# swanky-zombienet-plugin
