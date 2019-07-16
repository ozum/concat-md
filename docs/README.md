> **[concat-md](README.md)**

### Index

#### Interfaces

* [ConcatOptions](interfaces/concatoptions.md)

#### Functions

* [concatMd](README.md#concatmd)

## Functions

###  concatMd

▸ **concatMd**(`dir`: string, `options?`: [ConcatOptions](interfaces/concatoptions.md)): *`Promise<string>`*

*Defined in [index.ts:261](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L261)*

Scans and concatenates all markdown files in given directory.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`dir` | string | is the directory to scan markdown files in. |
`options?` | [ConcatOptions](interfaces/concatoptions.md) | are several parameters to modify concatenation behaviour. |

**Returns:** *`Promise<string>`*

concatenated contents of markdown files.