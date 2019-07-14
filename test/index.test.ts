import { join } from "path";
import concat from "../src/index";

describe("concat", () => {
  it("should concat files as is.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"));
    const expected = "# Doc A\n\n# Doc B1\n\n# Doc B2\n\n# Doc BSub\n";
    expect(result).toBe(expected);
  });

  it("should concat files using meta key as title.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"), {
      titleKey: "title",
      decreaseTitleLevels: true,
      ignore: ["non-existing"],
    });
    const expected = "# Doc A\n\n# Z\n\n## Doc B1\n\n# Doc B2\n\n# Doc BSub\n";
    expect(result).toBe(expected);
  });

  it("should concat files using meta key and file name as title.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"), {
      titleKey: "title",
      fileNameAsTitle: true,
      decreaseTitleLevels: true,
      ignore: "non-existing",
    });
    const expected = "# A\n\n## Doc A\n\n# Z\n\n## Doc B1\n\n# B 2\n\n## Doc B2\n\n# B Sub\n\n## Doc BSub\n";
    expect(result).toBe(expected);
  });

  it("should concat files using file name and dir name as title.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"), {
      fileNameAsTitle: true,
      dirNameAsTitle: true,
      decreaseTitleLevels: true,
    });
    const expected =
      "# Dir A\n\n## A\n\n### Doc A\n\n# Dir B\n\n## B 1\n\n### Doc B1\n\n## B 2\n\n### Doc B2\n\n## Dir B Sub\n\n### Dir B Sub Sub\n\n#### B Sub\n\n##### Doc BSub\n";
    expect(result).toBe(expected);
  });

  it("should add toc tag and table of contents.", async () => {
    const result = await concat(join(__dirname, "test-helper/main"), { toc: true });
    expect(result).toContain("- [Doc B1](#doc-b1)\n- [Doc B2](#doc-b2)\n- [Doc BSub](#doc-bsub)");
  });

  it("should use existing toc tag and add table of contents.", async () => {
    const result = await concat(join(__dirname, "test-helper/toc"), { toc: true });
    expect(result).toBe("<!-- START doctoc -->\n<!-- END doctoc -->\n\nContent\n");
  });
});
