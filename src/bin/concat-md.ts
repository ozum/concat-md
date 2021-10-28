#!/usr/bin/env node
/* eslint-disable no-console, prefer-destructuring */
import meow, { Options as meowOptions } from "meow";
import { resolve } from "path";
import { EOL } from "os";
import fs from "fs";
import concatMd from "../index";

/** @ignore */
const lstat = fs.promises.lstat;

/** @ignore */
interface Result extends meow.Result<any> {
  flags: {
    ignore: string;
    toc: boolean;
    tocLevel: string;
    decreaseTitleLevels: boolean;
    startTitleLevelAt: string;
    joinString: string;
    titleKey: string;
    fileNameAsTitle: string;
    dirNameAsTitle: boolean;
    debug: boolean;
    [name: string]: any;
  };
}

/** @ignore */
const FLAGS: meowOptions<any>["flags"] = {
  ignore: { type: "string" },
  toc: { type: "boolean" },
  tocLevel: { type: "string" },
  decreaseTitleLevels: { type: "boolean" },
  startTitleLevelAt: { type: "string" },
  joinString: { type: "string" },
  titleKey: { type: "string" },
  fileNameAsTitle: { type: "boolean" },
  dirNameAsTitle: { type: "boolean" },
  debug: { type: "boolean" },
};

/** @ignore */
const HELP = `
Usage
  $ concat-md [options] <dir>

Options
  --ignore <globs csv>              - Glob patterns to exclude in 'dir'.
  --toc                             - Adds table of the contents at the beginning of file.
  --toc-level                       - Limit TOC entries to headings only up to the specified level. Default: 3
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
`;

/**
 * Splites CSV string of paths from CLI into array of absolute paths.
 *
 * @param pathsCSV is comma split values of paths to split.
 * @returns array of absolute paths converted from relative to cwd().
 * @ignore
 */
function splitPaths(pathsCSV: string): string[] {
  return pathsCSV ? pathsCSV.split(/\s*,\s*/) : [];
}

/** @ignore */
async function exec(): Promise<void> {
  const cli = meow(HELP, { flags: FLAGS, inferType: true }) as Result;
  const dir = cli.input[0];

  if (!dir || dir.length === 0) {
    console.log(`${HELP}${EOL}Error: Dir is required`);
    return;
  }

  const flags = {
    ...cli.flags,
    ignore: splitPaths(cli.flags.ignore),
  };

  try {
    const path = resolve(dir);
    const stat = await lstat(path);
    const isDirectory = stat.isDirectory();
    const unknownOption = Object.keys(flags).find((key) => FLAGS && !FLAGS[key]);
    if (!isDirectory) {
      throw new Error(`${path} is not a directory.`);
    }
    if (unknownOption) {
      throw new Error(`Unknown option '${unknownOption}'`);
    }
    const result = await concatMd(path, flags as any);
    process.stdout.write(result);
  } catch (e) {
    if (flags.debug) {
      throw e;
    } else {
      console.error(e);
      process.exit(1);
    }
  }
}

exec();
