const path = require("path");
const execSync = require("child_process").execSync;

const buildChaletTemplatePath = path.join(
  __dirname,
  "build-chalet-template.js"
);

execSync(`node ${buildChaletTemplatePath}`, {
  cwd: __dirname,
  stdio: "inherit"
});

execSync(`lerna publish --no-git-tag-version --no-push`, {
  cwd: __dirname,
  stdio: "inherit"
});
