---
id: modifycondition
title: ModifyCondition
sidebar_label: ModifyCondition
---

# Interface: ModifyCondition

Conditions which should be met to apply a modification to a key/value.

## Hierarchy

* **ModifyCondition**

## Properties

### `Optional` ifEqual

• **ifEqual**? : *any*

*Defined in [data-file.ts:31](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L31)*

Allows modification if only value stored at `path` equals/deeply equals to it's value.

___

### `Optional` ifExists

• **ifExists**? : *undefined | false | true*

*Defined in [data-file.ts:27](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L27)*

Allows modification if only `path` does not exists.

___

### `Optional` ifNotEqual

• **ifNotEqual**? : *any*

*Defined in [data-file.ts:35](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L35)*

Allows modification if only value stored at `path` equals/deeply equals to it's value.

___

### `Optional` ifNotExists

• **ifNotExists**? : *undefined | false | true*

*Defined in [data-file.ts:23](https://github.com/ozum/intermodular/blob/4dd044c/src/data-file.ts#L23)*

Allows modification if only `path` exists.