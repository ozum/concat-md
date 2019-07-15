---
id: executeallsyncoptions
title: ExecuteAllSyncOptions
sidebar_label: ExecuteAllSyncOptions
---

# Interface: ExecuteAllSyncOptions <**EncodingType**>

## Type parameters

▪ **EncodingType**

## Hierarchy

* `SyncOptions`

  * **ExecuteAllSyncOptions**

## Properties

### `Optional` argv0

• **argv0**? : *undefined | string*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:109

Explicitly set the value of `argv[0]` sent to the child process. This will be set to `command` or `file` if not specified.

___

### `Optional` buffer

• **buffer**? : *undefined | false | true*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:48

Buffer the output from the spawned process. When buffering is disabled you must consume the output of the `stdout` and `stderr` streams because the promise will not be resolved/rejected until they have completed.

If the spawned process fails, `error.stdout`, `error.stderr`, and `error.all` will contain the buffered data.

**`default`** true

___

### `Optional` cleanup

• **cleanup**? : *undefined | false | true*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:23

Kill the spawned process when the parent process exits unless either:
- the spawned process is [`detached`](https://nodejs.org/api/child_process.html#child_process_options_detached)
- the parent process is terminated abruptly, for example, with `SIGKILL` as opposed to `SIGTERM` or a normal exit

**`default`** true

___

### `Optional` cwd

• **cwd**? : *undefined | string*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:97

Current working directory of the child process.

**`default`** process.cwd()

___

### `Optional` detached

• **detached**? : *undefined | false | true*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:123

Prepare child to run independently of its parent process. Specific behavior [depends on the platform](https://nodejs.org/api/child_process.html#child_process_options_detached).

**`default`** false

___

### `Optional` encoding

• **encoding**? : *[EncodingType]()*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:152

Specify the character encoding used to decode the `stdout` and `stderr` output. If set to `null`, then `stdout` and `stderr` will be a `Buffer` instead of a string.

**`default`** 'utf8'

___

### `Optional` env

• **env**? : *`NodeJS.ProcessEnv`*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:104

Environment key-value pairs. Extends automatically from `process.env`. Set `extendEnv` to `false` if you don't want this.

**`default`** process.env

___

### `Optional` extendEnv

• **extendEnv**? : *undefined | false | true*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:90

Set to `false` if you don't want to extend the environment variables when providing the `env` property.

**`default`** true

___

### `Optional` gid

• **gid**? : *undefined | number*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:133

Sets the group identity of the process.

___

### `Optional` input

• **input**? : *string | `Buffer`*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:194

Write some input to the `stdin` of your binary.

___

### `Optional` killSignal

• **killSignal**? : *string | number*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:173

Signal value to be used when the spawned process will be killed.

**`default`** 'SIGTERM'

___

### `Optional` localDir

• **localDir**? : *undefined | string*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:39

Preferred path to find locally installed binaries in (use with `preferLocal`).

**`default`** process.cwd()

___

### `Optional` maxBuffer

• **maxBuffer**? : *undefined | number*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:166

Largest amount of data in bytes allowed on `stdout` or `stderr`. Default: 100 MB.

**`default`** 100_000_000

___

### `Optional` preferLocal

• **preferLocal**? : *undefined | false | true*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:32

Prefer locally installed binaries when looking for a binary to execute.

If you `$ npm install foo`, you can then `execa('foo')`.

**`default`** false

___

### `Optional` reject

• **reject**? : *undefined | false | true*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:76

Setting this to `false` resolves the promise with the error instead of rejecting it.

**`default`** true

___

### `Optional` shell

• **shell**? : *boolean | string*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:145

If `true`, runs `command` inside of a shell. Uses `/bin/sh` on UNIX and `cmd.exe` on Windows. A different shell can be specified as a string. The shell should understand the `-c` switch on UNIX or `/d /s /c` on Windows.

We recommend against using this option since it is:
- not cross-platform, encouraging shell-specific syntax.
- slower, because of the additional shell interpretation.
- unsafe, potentially allowing command injection.

**`default`** false

___

### `Optional` stderr

• **stderr**? : *`StdioOption`*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:69

Same options as [`stdio`](https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#child_process_options_stdio).

**`default`** 'pipe'

___

### `Optional` stdin

• **stdin**? : *`StdioOption`*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:55

Same options as [`stdio`](https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#child_process_options_stdio).

**`default`** 'pipe'

___

### `Optional` stdio

• **stdio**? : *"pipe" | "ignore" | "inherit" | keyof StdioOption[]*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:116

Child's [stdio](https://nodejs.org/api/child_process.html#child_process_options_stdio) configuration.

**`default`** 'pipe'

___

### `Optional` stdout

• **stdout**? : *`StdioOption`*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:62

Same options as [`stdio`](https://nodejs.org/dist/latest-v6.x/docs/api/child_process.html#child_process_options_stdio).

**`default`** 'pipe'

___

### `Optional` stopOnError

• **stopOnError**? : *undefined | false | true*

*Defined in [types/index.ts:76](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L76)*

Whether to stop executing further commands if an error occurs.

___

### `Optional` stripFinalNewline

• **stripFinalNewline**? : *undefined | false | true*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:83

Strip the final [newline character](https://en.wikipedia.org/wiki/Newline) from the output.

**`default`** true

___

### `Optional` throwOnError

• **throwOnError**? : *undefined | false | true*

*Defined in [types/index.ts:80](https://github.com/ozum/intermodular/blob/4dd044c/src/types/index.ts#L80)*

Whether to throw if an error occurs.

___

### `Optional` timeout

• **timeout**? : *undefined | number*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:159

If `timeout` is greater than `0`, the parent will send the signal identified by the `killSignal` property (the default is `SIGTERM`) if the child runs longer than `timeout` milliseconds.

**`default`** 0

___

### `Optional` uid

• **uid**? : *undefined | number*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:128

Sets the user identity of the process.

___

### `Optional` windowsVerbatimArguments

• **windowsVerbatimArguments**? : *undefined | false | true*

*Inherited from void*

Defined in /Users/ozum/Development/intermodular/node_modules/execa/index.d.ts:180

If `true`, no quoting or escaping of arguments is done on Windows. Ignored on other platforms. This is set to `true` automatically when the `shell` option is `true`.

**`default`** false