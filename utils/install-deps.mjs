import { execSync } from "child_process";

const echo = (message) => {
  execSync("echo ---------------------", { stdio: "inherit" });
  execSync(`echo ${message}`, { stdio: "inherit" });
};

const exec = (command) => {
  execSync(command, { stdio: "inherit" });
};

echo("installing deps...");

echo("install api deps");
echo("cd api && pip install --user pipenv");
exec("cd api && pipenv install");

echo("install mobile deps");
exec("cd mobile && npm install");

echo("install dashboard deps");
exec("cd dashboard && npm install");
