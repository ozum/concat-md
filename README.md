# concat-md

CLI and API to concatenate markdown files and modify as necessary.

# Install

```
$ npm install -g concat-md
```

or use it via `npx`:

```
$ npx concat-md docs
```

# Usage

**If files have titles in markdown already:**

```
$ concat-md --toc --decrease-title-levels --dir-name-as-title typedoc-api-docs > README.md
```

**If files have titles in FrontMatter meta data:**

```
$ concat-md --toc --decrease-title-levels --title-key title --file-name-as-title --dir-name-as-title docs > README.md
```

**If files don't have titles:**

```
$ concat-md --toc --decrease-title-levels --file-name-as-title --dir-name-as-title docs > README.md
```

# Features

- Scans all markdown files in a directory,
- Optionally ignores some files,
- Concatenates all of them,
- Adds table of contents,
- Optionally adds titles from `FrontMatter`, file names and directory names,
- Decreases level of existing titles to comply with added titles,
- Adds anchor tags (`<a name=""></a>`) to files, if no optional titles are generated.
- Converts relative links to point to concatenated file,
- Works async (default) and sync.

# CLI Options

```bash
Usage
  $ concat-md [options] <dir>

Options
  --ignore <globs csv>              - Glob patterns to exclude in 'dir'.
  --toc                             - Adds table of the contents at the beginning of file.
  --decrease-title-levels           - Whether to decrease levels of all titles in markdown file to set them below file and directory title levels.
  --start-title-level-at <level no> - Level to start file and directory levels. Default: 1
  --join-string <string>            - String to be used to join concatenated files. Default: new line
  --title-key <key name>            - Key name to get title in 'FrontMatter' meta data in markdown headers.
  --file-name-as-title              - Whether to use file names as titles.
  --dir-name-as-title               - Whether to use directory names as titles.
  --debug                           - Print stack trace in errors.

Examples
  If files have titles in markdown already:
    $ npx concat-md --toc --decrease-title-levels --dir-name-as-title typedoc-api-docs > README.md

  If files have titles in FrontMatter meta data:
    $ npx concat-md --toc --decrease-title-levels --title-key title --file-name-as-title --dir-name-as-title docs > README.md

  If files don't have titles:
    $ npx concat-md --toc --decrease-title-levels --file-name-as-title --dir-name-as-title docs > README.md
```

# Example

```
└─ Development
   └─ Projects
      └─ project-a
         ├─ docs
         ├─ classes
         │  ├─ widget.md
         │  ├─ utility.md
         └─ interfaces
            └─ screen.md
```

**classes/widget.md**

```md
# Description

Widget details lorem ipsum...
```

**classes/utility.md**

```md
# Description

Utility details lorem ipsum...
```

**interfaces/screen.md**

```md
# Description

Screen details lorem ipsum...
```

```bash
$ md-merge --decrease-title-levels --file-name-as-title --dir-name-as-title docs > README.md
```

Above command;

- Concatenates markdown files,
- Adds directory names and file names as title,
- Decreases level of `Description` titles,
- Outputs to `README.md` as below:

**README.md**

```md
# Classes

## Widget

### Description

Widget details lorem ipsum...

## Utility

### Description

Utility details lorem ipsum...

# Interfaces

## Screen

### Description

Screen details lorem ipsum...
```

# API

<a name="readmemd"></a>

> **[concat-md](#readmemd)**

### Index

#### Interfaces

- [ConcatOptions](#interfacesconcatoptionsmd)

#### Functions

- [concatMd](#concatmd)
- [concatMdSync](#concatmdsync)

## Functions

### concatMd

▸ **concatMd**(`dir`: string, `options?`: [ConcatOptions](#interfacesconcatoptionsmd)): _`Promise<string>`_

_Defined in [index.ts:295](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L295)_

Scans and concatenates all markdown files in given directory.

#### Example

```typescript
import concatMd, { concatMdSync } from "concat-md";
```

**Parameters:**

| Name       | Type                                        | Description                                               |
| ---------- | ------------------------------------------- | --------------------------------------------------------- |
| `dir`      | string                                      | is the directory to scan markdown files in.               |
| `options?` | [ConcatOptions](#interfacesconcatoptionsmd) | are several parameters to modify concatenation behaviour. |

**Returns:** _`Promise<string>`_

concatenated contents of markdown files.

---

### concatMdSync

▸ **concatMdSync**(`dir`: string, `options?`: [ConcatOptions](#interfacesconcatoptionsmd)): _string_

_Defined in [index.ts:281](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L281)_

Scans and concatenates all markdown files in given directory.

#### Example

```typescript
import concatMd, { concatMdSync } from "concat-md";
```

**Parameters:**

| Name       | Type                                        | Description                                               |
| ---------- | ------------------------------------------- | --------------------------------------------------------- |
| `dir`      | string                                      | is the directory to scan markdown files in.               |
| `options?` | [ConcatOptions](#interfacesconcatoptionsmd) | are several parameters to modify concatenation behaviour. |

**Returns:** _string_

concatenated contents of markdown files.

# Interfaces

<a name="interfacesconcatoptionsmd"></a>

> **[concat-md](#readmemd)**

[ConcatOptions](#interfacesconcatoptionsmd) /

## Interface: ConcatOptions

Concat function options.

### Hierarchy

- **ConcatOptions**

#### Index

##### Properties

- [decreaseTitleLevels](#optional-decreasetitlelevels)
- [dirNameAsTitle](#optional-dirnameastitle)
- [fileNameAsTitle](#optional-filenameastitle)
- [ignore](#optional-ignore)
- [joinString](#optional-joinstring)
- [startTitleLevelAt](#optional-starttitlelevelat)
- [titleKey](#optional-titlekey)
- [toc](#optional-toc)
- [tocLevel](#optional-toclevel)

### Properties

#### `Optional` decreaseTitleLevels

• **decreaseTitleLevels**? : _undefined | false | true_

_Defined in [index.ts:52](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L52)_

Whether to decrease levels of all titles in markdown file to set them below file and directory title levels.

---

#### `Optional` dirNameAsTitle

• **dirNameAsTitle**? : _undefined | false | true_

_Defined in [index.ts:72](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L72)_

Whether to use directory names as titles.

---

#### `Optional` fileNameAsTitle

• **fileNameAsTitle**? : _undefined | false | true_

_Defined in [index.ts:68](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L68)_

Whether to use file names as titles.

---

#### `Optional` ignore

• **ignore**? : _string | string[]_

_Defined in [index.ts:48](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L48)_

Glob patterns to exclude in `dir`.

---

#### `Optional` joinString

• **joinString**? : _undefined | string_

_Defined in [index.ts:60](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L60)_

String to be used to join concatenated files.

---

#### `Optional` startTitleLevelAt

• **startTitleLevelAt**? : _undefined | number_

_Defined in [index.ts:56](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L56)_

Level to start file and directory levels.

---

#### `Optional` titleKey

• **titleKey**? : _undefined | string_

_Defined in [index.ts:64](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L64)_

Key name to get title in `FrontMatter` meta data in markdown headers.

---

#### `Optional` toc

• **toc**? : _undefined | false | true_

_Defined in [index.ts:40](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L40)_

Whether to add a table of contents.

---

#### `Optional` tocLevel

• **tocLevel**? : _undefined | number_

_Defined in [index.ts:44](https://github.com/ozum/concat-md/blob/670ea75/src/index.ts#L44)_

Limit TOC entries to headings only up to the specified level.
