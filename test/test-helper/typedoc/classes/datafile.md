---
id: datafile
title: DataFile
sidebar_label: DataFile
---

# Class: DataFile <**T**>

Makes easier to work with data files by providing data level attributes and methods.

## Type parameters

▪ **T**: *`Record<string, any>`*

## Hierarchy

* **DataFile**

## Properties

###  data

• **data**: *`T`*

*Defined in [data-file.ts:56](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L56)*

Data contained in file as a JavaScript object. This data is serialized and written to disk when [saveSync](datafile.md#savesync)  method is executed.

___

###  format

• **format**: *[FileFormat](../README.md#fileformat)*

*Defined in [data-file.ts:51](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L51)*

Data format of the file

## Methods

###  assign

▸ **assign**(`data`: `Record<string, any>`, `conditions?`: [ModifyCondition](../interfaces/modifycondition.md)): *this*

*Defined in [data-file.ts:221](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L221)*

Merges all keys and values of `data` shallowly into root of file data.
Different to object assign, keys may be merged conditionally such as `ifExists` or `ifNotExists`.

#### Example
```typescript
const packageJson = targetModule.getDataFileSync("package.json"); // `DataFile` instance
packageJson.assign({ name: "some-module", version: "1.0.0", }, { ifNotExists: true });
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | `Record<string, any>` | is the object to merge given path. |
`conditions?` | [ModifyCondition](../interfaces/modifycondition.md) | should be met to apply a modifications for each key/value individually. |

**Returns:** *this*

▸ **assign**(`path`: string | string[] | undefined, `data`: `Record<string, any>`, `conditions?`: [ModifyCondition](../interfaces/modifycondition.md)): *this*

*Defined in [data-file.ts:233](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L233)*

Merges all keys and values of `data` shallowly into `path` of file data. If a portion of path doesn't exist, it's created.
Different to object assign, keys may be merged conditionally such as `ifExists` or `ifNotExists`.

#### Example
```typescript
const packageJson = targetModule.getDataFileSync("package.json"); // `DataFile` instance
packageJson.assign("scripts", { build: "tsc", test: "jest", }, { ifNotExists: true });
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string \| string[] \| undefined | is data path of the property to delete. |
`data` | `Record<string, any>` | is the object to merge given path. |
`conditions?` | [ModifyCondition](../interfaces/modifycondition.md) | should be met to apply a modifications for each key/value individually. |

**Returns:** *this*

___

###  delete

▸ **delete**(`path`: string | string[], `conditions?`: [ModifyCondition](../interfaces/modifycondition.md)): *this*

*Defined in [data-file.ts:204](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L204)*

Deletes the property at `path` of file data.

#### Example
```typescript
const packageJson = targetModule.getDataFileSync("package.json"); // `DataFile` instance
packageJson
  .delete("script.build")
  .delete(["scripts", "test"]);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string \| string[] | is data path of the property to delete. |
`conditions?` | [ModifyCondition](../interfaces/modifycondition.md) | should be met to apply a modification to a key/value. |

**Returns:** *this*

___

###  get

▸ **get**(`path`: string | string[], `defaultValue?`: any): *any*

*Defined in [data-file.ts:164](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L164)*

Gets the value at `path` of file data. If the resolved value is undefined, the `defaultValue` is returned in its place.

#### Example
```typescript
const packageJson = targetModule.getDataFileSync("package.json"); // `DataFile` instance
packageJson.get("script.build");
packageJson.get(["script", "build"]);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string \| string[] | is data path of the property to get. |
`defaultValue?` | any | is value to get if path does not exists on data. |

**Returns:** *any*

data stored in given object path or default value.

___

###  has

▸ **has**(`path`: string | string[]): *boolean*

*Defined in [data-file.ts:149](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L149)*

Returns whether given `path` exists in file data.

#### Example
```typescript
const packageJson = targetModule.getDataFileSync("package.json"); // `DataFile` instance
packageJson.has("script.build");
packageJson.has(["script", "build"]);
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string \| string[] | is data path of the property to check. |

**Returns:** *boolean*

whether path exists.

___

###  orderKeys

▸ **orderKeys**(`keys`: `keyof T`[]): *this*

*Defined in [data-file.ts:274](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L274)*

When keys/values added which are previously does not exist, they are added to the end of the file during file write.
This method allows reordering of the keys. `keys` are placed at the beginning in given order whereas remaining keys
of the object comes in their order of position.

#### Example
```typescript
const packageJson = targetModule.getDataFileSync("package.json"); // `DataFile` instance
packageJson.orderKeys(["name", "version", "description", "keywords", "scripts"]); // Other keys come after.
```

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`keys` | `keyof T`[] |  Object.keys(this.data).sort() | are ordered keys to appear ath beginning of file when saved. |

**Returns:** *this*

___

###  saveSync

▸ **saveSync**(`__namedParameters`: object): *this*

*Defined in [data-file.ts:125](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L125)*

Saves file if it is modified. Use `force` options to save unmodified files.

**Parameters:**

▪`Default value`  **__namedParameters**: *object*=  {}

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`force` | boolean | false | forces file to be saved even when it is unmodified.  |

**Returns:** *this*

___

###  set

▸ **set**(`path`: string | string[], `value`: any, `conditions?`: [ModifyCondition](../interfaces/modifycondition.md)): *this*

*Defined in [data-file.ts:181](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L181)*

Sets the value at `path` of file data. If a portion of path doesn't exist, it's created.
Arrays are created for missing index properties while objects are created for all other missing properties.

#### Example
```typescript
const packageJson = targetModule.getDataFileSync("package.json"); // `DataFile` instance
packageJson
  .set("script.build", "tsc")
  .set(["scripts", "test"], "jest");
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string \| string[] | is data path of the property to set. |
`value` | any | is value to set. |
`conditions?` | [ModifyCondition](../interfaces/modifycondition.md) | should be met to apply a modification to a key/value. |

**Returns:** *this*