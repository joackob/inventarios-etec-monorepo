import { execSync } from "child_process";
import fs from "fs";

const exec = (command) => {
  execSync(command, { stdio: "inherit" });
};

fs.copyFileSync("./config.json", "./api/config/config.json");
fs.copyFileSync("./config.json", "./mobile/config/config.json");
fs.copyFileSync("./config.json", "./dashboard/config/config.json");
const config = JSON.parse(fs.readFileSync("config.json", "utf8"));
exec(`cd api && flask --app flaskr run --debug --host=${config["api-host"]}`);
