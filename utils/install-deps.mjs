import { execSync } from "child_process";

const echo = (message) => {
  console.info("----------------------------------------");
  console.info(message);
};

const exec = (command) => {
  execSync(command, { stdio: "inherit" });
};

echo("installing deps...");

echo("install api deps (please, use pipenv)");
exec("cd api && pip install --user pipenv");
exec("cd api && pipenv install");

echo("install mobile deps");
exec("cd mobile && npm install");

echo("install dashboard deps");
exec("cd dashboard && npm install");
