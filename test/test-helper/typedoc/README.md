---
id: README
title: Intermodular
sidebar_label: Globals
---

## Type aliases

###  Command

Ƭ **Command**: *string | [string, string[]]*

*Defined in [types/index.ts:60](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L60)*

Type for providing CLI command. It may either
- a string to store executable name without arguments.
- an array with two elements, whose first element is executable name, and second element is array of arguments to pass to executable.

#### Example
```typescript
const bin = "tsc";
const binWithArgs = ["tsc", ["--strict", "--target", "ESNext"]];
```

___

###  ExecaCommandSync

Ƭ **ExecaCommandSync**: *[Command](README.md#command) | [string, string[], `SyncOptions`] | [string, string[], `SyncOptions<null>`] | [string, `SyncOptions`] | [string, `SyncOptions<null>`]*

*Defined in [types/index.ts:44](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L44)*

Type for providing CLI command to pass to execa. It may either
- a string to store executable name without arguments.
- an array with two elements, whose first element is executable name, and second element is either array of arguments to pass to executable or options to pass to execa.
- an array with three elements, whose first element is executable name, second element is array of arguments to pass to executable and third element is options to pass to execa.

#### Example
```typescript
const bin = "tsc";
const binWithArgs = ["tsc", ["--strict", "--target", "ESNext"]];
const binWithOptions = ["tsc", { encoding: "utf-8" }];
const binWithAll = ["tsc", ["--strict", "--target", "ESNext"], { encoding: "utf-8" }];
```

___

###  FileFormat

Ƭ **FileFormat**: *"json" | "yaml"*

*Defined in [types/index.ts:89](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L89)*

Supported file formats for parsing and data files.

___

###  JSONData

Ƭ **JSONData**: *`Primitive` | `JSONObject` | `JSONArray`*

*Defined in [types/index.ts:26](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L26)*

Data type which represents JSON Data.

___

###  ParallelCommands

Ƭ **ParallelCommands**: *`Record<string, Command | null | undefined>`*

*Defined in [types/index.ts:70](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L70)*

Array of CLI commands to execute concurrently in parallel.

___

###  SerialCommands

Ƭ **SerialCommands**: *string | [string, string[]] | [string, string[], `SyncOptions<string>`] | [string, string[], `SyncOptions<null>`] | [string, `SyncOptions<string>`] | [string, `SyncOptions<null>`] | object[]*

*Defined in [types/index.ts:65](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L65)*

Array of CLI commands to execute serially.