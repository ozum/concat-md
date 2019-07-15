---
id: commandresults
title: CommandResults
sidebar_label: CommandResults
---

# Class: CommandResults

Class to access status and error objects of executed CLI commands.

## Hierarchy

* **CommandResults**

## Properties

###  exit

• **exit**: *boolean* = true

*Defined in [command-results.ts:18](https://github.com/ozum/intermodular/blob/4dd044c/src/command-results.ts#L18)*

Whether to exit from command.

___

###  results

• **results**: *`ExecaSyncReturnValue`[]* =  []

*Defined in [command-results.ts:13](https://github.com/ozum/intermodular/blob/4dd044c/src/command-results.ts#L13)*

Results of the executed commands. May be used to access `status` and `error`.

## Accessors

###  status

• **get status**(): *number | null*

*Defined in [command-results.ts:41](https://github.com/ozum/intermodular/blob/4dd044c/src/command-results.ts#L41)*

Overall status of the commands. If multiple commands are executed, contains first non-zero exit status code.
If all commands are completed without error, this is `0`.

**Returns:** *number | null*

## Methods

###  add

▸ **add**(`execaReturns`: `ExecaSyncReturnValue` | `ExecaSyncError`): *void*

*Defined in [command-results.ts:26](https://github.com/ozum/intermodular/blob/4dd044c/src/command-results.ts#L26)*

Add `result` to the command results.

**Parameters:**

Name | Type |
------ | ------ |
`execaReturns` | `ExecaSyncReturnValue` \| `ExecaSyncError` |

**Returns:** *void*