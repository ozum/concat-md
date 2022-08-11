> **[concat-md](../README.md)**

[ConcatOptions](concatoptions.md) /

# Interface: ConcatOptions

Concat function options.

## Hierarchy

* **ConcatOptions**

### Index

#### Properties

* [decreaseTitleLevels](concatoptions.md#optional-decreasetitlelevels)
* [dirNameAsTitle](concatoptions.md#optional-dirnameastitle)
* [fileNameAsTitle](concatoptions.md#optional-filenameastitle)
* [ignore](concatoptions.md#optional-ignore)
* [joinString](concatoptions.md#optional-joinstring)
* [sorter](concatoptions.md#optional-sorter)
* [startTitleLevelAt](concatoptions.md#optional-starttitlelevelat)
* [titleKey](concatoptions.md#optional-titlekey)
* [toc](concatoptions.md#optional-toc)
* [tocLevel](concatoptions.md#optional-toclevel)

## Properties

### `Optional` decreaseTitleLevels

• **decreaseTitleLevels**? : *undefined | false | true*

*Defined in [index.ts:52](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L52)*

Whether to decrease levels of all titles in markdown file to set them below file and directory title levels.

___

### `Optional` dirNameAsTitle

• **dirNameAsTitle**? : *undefined | false | true*

*Defined in [index.ts:72](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L72)*

Whether to use directory names as titles.

___

### `Optional` fileNameAsTitle

• **fileNameAsTitle**? : *undefined | false | true*

*Defined in [index.ts:68](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L68)*

Whether to use file names as titles.

___

### `Optional` ignore

• **ignore**? : *string | string[]*

*Defined in [index.ts:48](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L48)*

Glob patterns to exclude in `dir`.

___

### `Optional` joinString

• **joinString**? : *undefined | string*

*Defined in [index.ts:60](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L60)*

String to be used to join concatenated files.

___

### `Optional` sorter

• **sorter**? : *undefined | (a: string, b: string) => number*

*Defined in [index.ts:56](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L82)*

Custom sort function. If not set, files are sorted alphabetically.

___

### `Optional` startTitleLevelAt

• **startTitleLevelAt**? : *undefined | number*

*Defined in [index.ts:56](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L56)*

Level to start file and directory levels.

___

### `Optional` titleKey

• **titleKey**? : *undefined | string*

*Defined in [index.ts:64](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L64)*

Key name to get title in `FrontMatter` meta data in markdown headers.

___

### `Optional` toc

• **toc**? : *undefined | false | true*

*Defined in [index.ts:40](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L40)*

Whether to add a table of contents.

___

### `Optional` tocLevel

• **tocLevel**? : *undefined | number*

*Defined in [index.ts:44](https://github.com/ozum/concat-md/blob/3cf72b4/src/index.ts#L44)*

Limit TOC entries to headings only up to the specified level.
