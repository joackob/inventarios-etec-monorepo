const { execSync } = require("child_process");

// Install dependencies from api
execSync("cd api && pipenv install", { stdio: "inherit" });
execSync("cd dashboard && npm install", { stdio: [0, 1, 2] });
execSync("cd mobile && npm install", { stdio: [0, 1, 2] });
