---
id: intermodular
title: Intermodular
sidebar_label: Intermodular
---

# Class: Intermodular

Easy file operations between node.js modules and auto logging to help building zero-config boilerplates, postinstall and other scripts.

#### Example
```typescript
import Intermodular from "intermodular";

const intermodular = new Intermodular(); // (Defaults) Source: Your module, Target: Module installed your module as a dependency.
intermodular.copySync("common-config", "."); // Copy all files from your modules `common-config` to target module's root.

if (targetModule.isTypeScript) {
  intermodular.copySync("config/tsconfig.json", ".");
}

const targetModule = intermodular.targetModule;
const moduleName = targetModule.name;
targetModule.install("lodash"); // Install lodash.
targetModule.getDependencyVersion("lodash"); // Get version info from package.json
targetModule.executeSync("rm", ["-rf", "some-directory"]); // Execute shell command.
targetModule.pathOf("config/tsconfig.json"); // Absolute path.

// Do some individual data level operations:
const packageJson = targetModule.getDataFileSync("package.json"); // `DataFile` instance
packageJson.set("keywords", ["some-key"], { ifNotExists: true });
packageJson.set("description", `My awesome ${moduleName}`, { ifNotExists: true });
packageJson.assign("scripts", { build: "tsc", test: "jest", }, { ifNotExists: true });
packageJson.orderKeys(["name", "version", "description", "keywords", "scripts"]); // Other keys come after.
packageJson.saveSync();
```

## Hierarchy

* **Intermodular**

## Constructors

###  constructor

\+ **new Intermodular**(`__namedParameters`: object): *[Intermodular](intermodular.md)*

*Defined in [intermodular.ts:75](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L75)*

Creates an instance.

**Parameters:**

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`logLevel` | [LogLevel](../enums/loglevel.md) |  LogLevel.Info | is default log level to show. ("error", "warn", "info", "verbose", "debug" or "silly") |
`overwrite` | boolean | false | is default overwrite option for operations. Changes all write operation's default behavior. Also wverwrite option can be set for each operation individually. |
`packageManager` | "npm" \| "yarn" | "npm" | is package manager to use in modules.  |
`sourceRoot` | undefined \| string | - | is absolute path of source root, which is used as source for copying files etc. |
`targetRoot` | undefined \| string | - | is absolute path of target root, which is used as target for copying files etc. |

**Returns:** *[Intermodular](intermodular.md)*

## Properties

###  myRoot

• **myRoot**: *string* =  pkgDir.sync(dirname(parentModule() || "")) || ""

*Defined in [intermodular.ts:69](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L69)*

Root directory of the parent module, which installs your module.
This is the directory which contains `package.json` file of the parent module.

___

###  parentModuleRoot

• **parentModuleRoot**: *string* =  findTopPackageDir(this.myRoot) || ""

*Defined in [intermodular.ts:75](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L75)*

Root directory of your module which requires this module.
This is the directory which contains `package.json` file of your module.

___

###  sourceModule

• **sourceModule**: *[Module](module.md)*

*Defined in [intermodular.ts:58](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L58)*

[Module](module.md) instance of node module which is used as source for modification operations such as copy, update.

___

###  targetModule

• **targetModule**: *[Module](module.md)*

*Defined in [intermodular.ts:63](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L63)*

[Module](module.md) instance of node module which is used as target for modification operations such as copy, update.

## Methods

###  copySync

▸ **copySync**(`pathInSourceModule`: string, `pathInTargetModule`: string, `__namedParameters`: object): *void*

*Defined in [intermodular.ts:204](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L204)*

Copies a file or directory from `pathInSourceModule` relative to source module root to `pathInTargetModule`relative to
target module root. The directory can have contents. Like cp -r.
Note that if src is a directory it will copy everything inside of this directory, not the entire directory itself.

#### Example
```typescript
// Copy everything in `/path/to/project/node_modules/module-a/src/config/` to `/path/to/project/`
util.copySync("src/config", ".");
```

**Parameters:**

▪ **pathInSourceModule**: *string*

is source to copy from.

▪`Default value`  **pathInTargetModule**: *string*=  pathInSourceModule

is destination to copy to. Cannot be a directory.

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`dereference` | boolean | false | whether to dereference symlinks. |
`errorOnExist` | boolean | false | if true, when overwrite is false and the destination exists, throws an error. |
`filter` | undefined \| function | - | is `(src, dest) => boolean` function to filter copied files. Return true to include, false to exclude. |
`ifEqual` | undefined \| string \| object | - | allows modification if only value stored at `path` equals/deeply equals to it's value. |
`ifNotEqual` | undefined \| string \| object | - | allows modification if only value stored at `path` not equals/deeply equals to it's value. |
`overwrite` | boolean |  this._overwrite | whether to overwrite existing file or directory. Note that the copy operation will silently fail if you set this to false and the destination exists. Use the errorOnExist option to change this behavior. |
`preserveTimestamps` | boolean | false | whether to set last modification and access times to the ones of the original source files. When false, timestamp behavior is OS-dependent. |

**Returns:** *void*

___

###  log

▸ **log**(`message`: string, `level`: [LogLevel](../enums/loglevel.md)): *void*

*Defined in [intermodular.ts:125](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L125)*

Logs `message` with `level`.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string | - | is message text to log. |
`level` | [LogLevel](../enums/loglevel.md) |  LogLevel.Info | is log level. ("error", "warn", "info", "verbose", "debug" or "silly")  |

**Returns:** *void*

___

###  logIfDefined

▸ **logIfDefined**(`message`: string | undefined, `level`: [LogLevel](../enums/loglevel.md)): *void*

*Defined in [intermodular.ts:135](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L135)*

Logs `message` with `level` if it is defined.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`message` | string \| undefined | - | is message text to log. |
`level` | [LogLevel](../enums/loglevel.md) |  LogLevel.Info | is log level. ("error", "warn", "info", "verbose", "debug" or "silly")  |

**Returns:** *void*

___

### `Static` isEnvSet

▸ **isEnvSet**(`variable`: string): *boolean*

*Defined in [intermodular.ts:160](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L160)*

Returns whether `variable` is set in environment variables and not empty.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`variable` | string | is name of the environment variable to check. |

**Returns:** *boolean*

whether given environment variable is set and not empty.

___

### `Static` parseEnv

▸ **parseEnv**<**T**>(`variable`: string, `defaultValue?`: [T]()): *string | number | `Record<string, any>` | `T` | undefined*

*Defined in [intermodular.ts:174](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L174)*

Parses and returns `variable` environment variable. If possible, parses and returns it as a JavaScript object.
Otherwise returns `defaultValue`.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`variable` | string | is Name of the environment variable |
`defaultValue?` | [T]() | is value to return if no environment variable is set or is empty. |

**Returns:** *string | number | `Record<string, any>` | `T` | undefined*

environment variable (if possible as an object) or default value.

___

### `Static` resolveModuleRoot

▸ **resolveModuleRoot**(`name`: string): *string | undefined*

*Defined in [intermodular.ts:149](https://github.com/ozum/intermodular/blob/4dd044c/src/intermodular.ts#L149)*

Returns path of the root of module with given `name`.

#### Example
```typescript
project.resolveModule("fs-extra"); // /path/to/project/node_modules/fs-extra
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | of the module to get root path of. |

**Returns:** *string | undefined*

root path of given module.