import { join } from "path";
import concat from "../src/index";

describe("concat", () => {
  it("should concat files as is.", async () => {
    const result = await concat(join(__dirname, "test-helper"));
    const expected = "# Doc A\n\n# Doc B1\n\n# Doc B2\n\n# Doc BSub\n";
    expect(result).toBe(expected);
  });

  it("should concat files using meta key as title.", async () => {
    const result = await concat(join(__dirname, "test-helper"), { titleKey: "title", decreaseTitleLevels: true, ignore: ["non-existing"] });
    const expected = "# Doc A\n\n# Z\n\n## Doc B1\n\n# Doc B2\n\n# Doc BSub\n";
    expect(result).toBe(expected);
  });

  it("should concat files using meta key and file name as title.", async () => {
    const result = await concat(join(__dirname, "test-helper"), {
      titleKey: "title",
      fileNameAsTitle: true,
      decreaseTitleLevels: true,
      ignore: "non-existing",
    });
    const expected = "# A\n\n## Doc A\n\n# Z\n\n## Doc B1\n\n# B 2\n\n## Doc B2\n\n# B Sub\n\n## Doc BSub\n";
    expect(result).toBe(expected);
  });

  it("should concat files using file name and dir name as title.", async () => {
    const result = await concat(join(__dirname, "test-helper"), { fileNameAsTitle: true, dirNameAsTitle: true, decreaseTitleLevels: true });
    const expected =
      "# Dir A\n\n## A\n\n### Doc A\n\n# Dir B\n\n## B 1\n\n### Doc B1\n\n## B 2\n\n### Doc B2\n\n## Dir B Sub\n\n### Dir B Sub Sub\n\n#### B Sub\n\n##### Doc BSub\n";
    expect(result).toBe(expected);
  });
});
