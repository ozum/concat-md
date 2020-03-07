import { join } from "path";
import fs from "fs";
import concat, { concatMdSync } from "../src/index";

const { readFile } = fs.promises;

const getExpected = (file: string): Promise<string> => readFile(join(__dirname, "test-helper/expected", file), { encoding: "utf8" });

describe("concat", () => {
  it("should concat files as is.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"));
    const expected = await getExpected("main-as-is.txt");
    expect(result).toBe(expected);
  });

  it("should synchronously concat files as is.", async () => {
    const result = concatMdSync(join(__dirname, "test-helper/main"));
    const expected = await getExpected("main-as-is.txt");
    expect(result).toBe(expected);
  });

  it("should concat specified files only.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"), {
      include: "dir-a/**/*.md",
    });
    const expected = await getExpected("main-specified-only.txt");
    expect(result).toBe(expected);
  });

  it("should concat files using meta key as title.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"), {
      titleKey: "title",
      decreaseTitleLevels: true,
      ignore: ["non-existing"],
    });
    const expected = await getExpected("meta-key-as-title.txt");
    expect(result).toBe(expected);
  });

  it("should concat files using meta key and file name as title.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"), {
      titleKey: "title",
      fileNameAsTitle: true,
      decreaseTitleLevels: true,
      ignore: "non-existing",
    });

    const expected = await getExpected("meta-key-file-name-as-title.txt");
    expect(result).toBe(expected);
  });

  it("should concat files using file name and dir name as title.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"), {
      fileNameAsTitle: true,
      dirNameAsTitle: true,
      decreaseTitleLevels: true,
    });
    const expected = await getExpected("file-name-dir-as-title.txt");
    expect(result).toBe(expected);
  });

  it("should add toc tag and table of contents.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"), { toc: true });
    const expected = await getExpected("toc-tag.txt");
    expect(result).toBe(expected);
  });

  it("should use existing toc tag and add table of contents.", async () => {
    const result = await concat(join(__dirname, "test-helper/toc"), { toc: true });
    const expected = await getExpected("toc.txt");
    expect(result).toBe(expected);
  });

  it("should convert links to titles from files", async () => {
    const result = await concat(join(__dirname, "test-helper/with-links"), { fileNameAsTitle: true, dirNameAsTitle: true });
    const expected = await getExpected("with-links-file-name-as-title.txt");
    expect(result).toBe(expected);
  });

  it("should convert links to generated anchor", async () => {
    const result = await concat(join(__dirname, "test-helper/with-links"));
    const expected = await getExpected("with-links.txt");
    expect(result).toBe(expected);
  });
});
