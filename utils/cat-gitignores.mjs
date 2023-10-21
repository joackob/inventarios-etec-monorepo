import { writeFileSync, readFileSync } from "fs";
const folders = ["api", "dashboard", "mobile"];
const gitignores = folders.map((folder) => `./${folder}/.gitignore`);
writeFileSync("./.gitignore", "", { flag: "w" });

gitignores.forEach((gitignore) => {
  try {
    const patterns = readFileSync(gitignore, "utf8");
    writeFileSync(
      "./.gitignore",
      `## patterns to ignore from "${gitignore}"\n${patterns}\n`,
      { flag: "a" },
    );
  } catch (error) {
    console.log(error);
  }
});
