#!/usr/bin/env node

const commander = require("commander");
const chalk = require("chalk");
const spawn = require("cross-spawn");
const path = require("path");
const packageJson = require("./package.json");
const scriptsVersion = "starter-scripts";
const execSync = require("child_process").execSync;

let projectName, projectTemplate;

const program = new commander.Command(`${chalk.cyan(packageJson.name)}`)
  .usage(`${chalk.green("<project-directory>")}`)
  .description(`  ${packageJson.description}`)
  .arguments("<project-directory> [option]")
  // Angled brackets (e.g. <cmd>) indicate required input.
  // Square brackets (e.g. [env]) indicate optional input.
  .option(
    "-T, --template [template]",
    "Choose available template, e.g., chalet.",
    "chalet"
  )
  .version(`${packageJson.version}`)
  .action(name => {
    projectName = name;
  })
  .on("--help", () => {
    console.log();
    console.log(` Only ${chalk.green("<project-directory>")} is required.`);
    console.log();
  })
  .parse(process.argv);

if (typeof projectName === "undefined") {
  console.log();
  console.error(" Please specify the project directory:");
  console.log();
  console.log(
    `   ${chalk.cyan(program.name())} ${chalk.green("<project-directory>")}`
  );
  console.log();
  console.log(" For example:");
  console.log();
  console.log(
    `   ${chalk.cyan(program.name())} ${chalk.green("my-awesome-app")}`
  );
  console.log();
  console.log(
    ` Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  );
  console.log();
  process.exit(1);
}

// If getting unavailable template option, use 'chalet' as default.
switch (program.template) {
  case "plain":
    projectTemplate = "plain";
    break;
  default:
    projectTemplate = "chalet";
}

start();

function start() {
  let args = [`${projectName}`, "--scripts-version", `${scriptsVersion}`];
  if (projectTemplate !== "plain") {
    args.push("--internal-testing-template");
    args.push(`${path.join(__dirname, "template", projectTemplate)}`);
  }
  console.log();
  console.log(
    `Launch app based on template ${chalk.green(projectTemplate)}...`
  );
  spawn("npx create-react-app@1.5.2", args, { stdio: "inherit" });
}
