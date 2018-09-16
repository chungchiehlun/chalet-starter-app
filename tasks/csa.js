const path = require("path");
const execSync = require("child_process").execSync;
const rootDir = path.join(__dirname, "..");

const cleanup = () => {
  console.log("Cleaning up.");
  // Uncomment when snapshot testing is enabled by default:
  // rm ./template/src/__snapshots__/App.test.js.snap
};

const handleExit = () => {
  cleanup();
  console.log("Exiting without error.");
  process.exit();
};

const handleError = e => {
  console.error("ERROR! An error was encountered while executing\n", e);
  cleanup();
  console.log("Exiting with error.");
  process.exit(1);
};

process.on("SIGINT", handleExit);
process.on("uncaughtException", handleError);

// Run the CSA command
const args = process.argv.slice(2);

const csaScriptPath = path.join(
  rootDir,
  "packages",
  "create-starter-app",
  "index.js"
);

const buildChaletTemplatePath = path.join(
  __dirname,
  "build-chalet-template.js"
);

execSync(`node ${buildChaletTemplatePath}`, {
  cwd: __dirname,
  stdio: "inherit"
});

execSync(`node ${csaScriptPath} ${args.join(" ")}`, {
  cwd: rootDir,
  stdio: "inherit"
});
