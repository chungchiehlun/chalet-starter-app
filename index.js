#!/usr/bin/env node

'use strict';

const commander = require('commander');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const path = require('path');
const packageJson = require('./package.json');
const scriptsVersion = 'starter-scripts';
const execSync = require('child_process').execSync;

let projectName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .usage(`${chalk.green('<project-directory>')}`)
  .description(`
    Create your own app based on ${chalk.cyan('chalet-starter-app')}
  `)
  .arguments('<project-directory> [option]')
  .option('--plain', '   use plain tempalate from create-react-app', true)
  .action((name) => {
    projectName = name
    try {
      execSync('create-react-app --version');
    } catch(err) {
      console.log(`Please install ${chalk.cyan('create-react-app')} once globally.`);
      console.log();
      console.log('For example:');
      console.log(`  ${chalk.cyan('yarn global add create-react-app')}`);
      process.exit(1);
    }
  })
  .on('--help', () => {
    console.log();
    console.log(`    Only ${chalk.green('<project-directory>')} is required.`);
    console.log();
  })
  .parse(process.argv);

if (typeof projectName === 'undefined') {
  console.error('Please specify the project directory:');
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  );
  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-awesome-app')}`);
  console.log();
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  );
  process.exit(1);
}

start();

function start() {
  let args = [`${projectName}`, '--scripts-version', `${scriptsVersion}`]
  if (!program.plain) {
    args.push('--internal-testing-template')
    args.push(`${path.join(__dirname, 'template', 'chalet')}`)
  }
  spawn('create-react-app', args, { stdio: 'inherit' });
}
