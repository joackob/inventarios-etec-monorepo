// concat files into one with nodejs
// Usage: node cat.js file1 file2 file3 > file123
const fs = require("fs");
const folders = ["api", "dashboard", "mobile"];
const gitignores = folders.map((folder) => `./${folder}/.gitignore`);
fs.writeFileSync("./.gitignore", "", { flag: "w" });

gitignores.forEach((gitignore) => {
  try {
    const patterns = fs.readFileSync(gitignore, "utf8");
    fs.writeFileSync(
      "./.gitignore",
      `## patterns to ignore from "${gitignore}"\n${patterns}\n`,
      { flag: "a" },
    );
  } catch (error) {
    console.log(error);
  }
});
