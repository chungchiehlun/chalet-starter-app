#!/usr/bin/env node

const commander = require('commander');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const path = require('path');
const packageJson = require('./package.json');
const scriptsVersion = 'starter-scripts';
const execSync = require('child_process').execSync;

let projectName;

const program = new commander.Command(`${chalk.cyan(packageJson.name)}`)
  .usage(`${chalk.green('<project-directory>')}`)
  .description(`  ${packageJson.description}`)
  .arguments('<project-directory> [option]')
  .option('--plain', 'apply original template of create-react-app', true)
  .version(`${packageJson.version}`)
  .action(name => {
    projectName = name;
    try {
      execSync('create-react-app --version');
    } catch (err) {
      console.log();
      console.log(
        ` ${chalk.cyan(packageJson.name)} was based on create-react-app.`
      );
      console.log();
      console.log(` Please install create-react-app at first.`);
      console.log();
      console.log(' For example:');
      console.log();
      console.log('   $ yarn global add create-react-app');
      console.log(`   $ yarn global add ${chalk.cyan(packageJson.name)}`);
      console.log();
      process.exit(1);
    }
  })
  .on('--help', () => {
    console.log();
    console.log(` Only ${chalk.green('<project-directory>')} is required.`);
    console.log();
  })
  .parse(process.argv);

if (typeof projectName === 'undefined') {
  console.log();
  console.error(' Please specify the project directory:');
  console.log();
  console.log(
    `   ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  );
  console.log();
  console.log(' For example:');
  console.log();
  console.log(
    `   ${chalk.cyan(program.name())} ${chalk.green('my-awesome-app')}`
  );
  console.log();
  console.log(
    ` Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  );
  console.log();
  process.exit(1);
}

start();

function start() {
  let args = [`${projectName}`, '--scripts-version', `${scriptsVersion}`];
  if (!program.plain) {
    args.push('--internal-testing-template');
    args.push(`${path.join(__dirname, 'template', 'chalet')}`);
  }
  spawn('create-react-app', args, { stdio: 'inherit' });
}
