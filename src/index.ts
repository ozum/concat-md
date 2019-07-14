import fs from "fs";
import { join, relative, dirname, basename, extname, sep } from "path";
import frontMatter from "front-matter";
import globby from "globby";
import startCase from "lodash.startcase";

const { readFile } = fs.promises;

/**  @ignore */
interface File {
  path: string;
  [key: string]: any;
}

/**
 * Concat function options.
 */
export interface ConcatOptions {
  /**
   * Glob patterns to exclude in `dir`.
   */
  ignore?: string | string[];
  /**
   * Whether to decrease levels of all titles in markdown file to set them below file and directory title levels.
   */
  decreaseTitleLevels?: boolean;
  /**
   * Level to start file and directory levels.
   */
  startTitleLevelAt?: number;
  /**
   * String to be used to join concatenated files.
   */
  joinString?: string;
  /**
   * Key name to get title in `FrontMatter` meta data in markdown headers.
   */
  titleKey?: string;
  /**
   * Whether to use file names as titles.
   */
  fileNameAsTitle?: boolean;
  /**
   * Whether to use directory names as titles.
   */
  dirNameAsTitle?: boolean;
}

/**
 * Makes given input array and returns it.
 *
 * @param input to construct array from
 * @returns created array.
 * @ignore
 */
function arrify<T>(input: T | T[]): T[] {
  return Array.isArray(input) ? input : [input];
}

/**  @ignore */
class MarkDownConcatenator {
  private dir: string;
  private ignore: string | string[];
  private decreaseTitleLevels: boolean;
  private startTitleLevelAt: number;
  private titleKey?: string;
  private fileNameAsTitle: boolean;
  private dirNameAsTitle: boolean;
  private joinString: string;
  private visitedDirs: Set<string> = new Set();

  public constructor(
    dir: string,
    {
      ignore = [],
      decreaseTitleLevels = false,
      startTitleLevelAt = 1,
      joinString = "\n",
      titleKey,
      dirNameAsTitle = false,
      fileNameAsTitle = false,
    }: ConcatOptions = {} as any
  ) {
    this.dir = dir;
    this.ignore = ignore;
    this.decreaseTitleLevels = decreaseTitleLevels;
    this.startTitleLevelAt = startTitleLevelAt;
    this.joinString = joinString;
    this.titleKey = titleKey;
    this.dirNameAsTitle = dirNameAsTitle;
    this.fileNameAsTitle = fileNameAsTitle;
  }

  private decreaseTitleLevelsBy(body: string, level: number): string {
    return !this.decreaseTitleLevels || level <= 0 ? body : body.replace(/(^#+)/gm, `$1${"#".repeat(level)}`);
  }

  private async getFileNames(): Promise<string[]> {
    const paths = await globby([`**/*.md`], { cwd: this.dir, ignore: arrify(this.ignore) });
    return paths.map(path => join(this.dir, path));
  }

  private async getFileDetails(): Promise<File[]> {
    const fileNames = await this.getFileNames();
    return Promise.all(
      fileNames.map(async fileName => ({ path: fileName, ...frontMatter(await readFile(fileName, { encoding: "utf8" })) }))
    );
  }

  private getDirParts(file: File): string[] {
    return relative(this.dir, dirname(file.path)).split(sep);
  }

  private getTitle(file: File): { title: string; level: number } {
    let title = "";
    let fileTitle = "";
    const titleSuffix = "\n\n";
    let level = this.startTitleLevelAt - 1;

    if (this.dirNameAsTitle) {
      let currentDir = "";
      const dirParts = this.getDirParts(file);
      dirParts.forEach(part => {
        currentDir += sep + part;
        level += 1;
        if (!this.visitedDirs.has(currentDir)) {
          const dirTitlePrefix = "#".repeat(level); // #, ##, ### ...etc.
          title += `${dirTitlePrefix} ${startCase(part)}${titleSuffix}`;
          this.visitedDirs.add(currentDir);
        }
      });
    }
    // console.log(this.titleKey, file.attributes, file.attributes[this.titleKey as any]);
    if (this.titleKey && file.attributes && file.attributes[this.titleKey]) {
      fileTitle = file.attributes[this.titleKey];
    } else if (this.fileNameAsTitle) {
      fileTitle = `${startCase(basename(file.path, extname(file.path)))}`;
    }

    if (fileTitle) {
      level += 1;
      const titlePrefix = "#".repeat(level); // #, ##, ### ...etc.
      title += `${titlePrefix} ${fileTitle}${titleSuffix}`;
    }

    return { title, level };
  }

  public async concat(): Promise<string> {
    const files = await this.getFileDetails();
    const results = files.map(file => {
      const { title, level } = this.getTitle(file);
      return `${title}${this.decreaseTitleLevelsBy(file.body, level)}`;
    });

    return results.join(this.joinString);
  }
}

/**
 * Scans and concatenates all markdown files in given directory.
 *
 * @param dir is the directory to scan markdown files in.
 * @param options are several parameters to modify concatenation behaviour.
 * @returns concatenated contents of markdown files.
 */
export default async function concatMd(dir: string, options?: ConcatOptions): Promise<string> {
  const a = new MarkDownConcatenator(dir, options);
  return a.concat();
}
