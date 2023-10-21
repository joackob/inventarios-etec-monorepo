import { execSync } from "child_process";

const echo = (message) => {
  console.info("----------------------------------------");
  console.info(message);
};

const exec = (command) => {
  execSync(command, { stdio: "inherit" });
};

echo("save deps...");

echo("save api deps (please, use pipenv)");
exec("cd api && pipenv requirements > requirements.txt");
