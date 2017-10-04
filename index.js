#!/usr/bin/env node

'use strict';

const program = require('commander');
const chalk = require('chalk');
const { spawn } = require('child_process');
const path = require('path');

const scriptsVersion = 'starter-scripts'

let projectName;

program
  .usage(`${chalk.green('<project-directory>')}`)
  .description(`
    Create your own app based on ${chalk.cyan('chalet-starter-app')}
  `)
  .arguments('<project-directory> [option]')
  .option('--plain', '   use plain tempalate from create-react-app', true)
  .action((name) => {
    projectName = name
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

if (program.plain) {
  spawn(`
    create-react-app ${projectName} \
     --scripts-version ${scriptsVersion}
  `, {
    stdio: 'inherit',
    shell: true,
  });
} else {
  spawn(`
    create-react-app ${projectName} \
     --internal-testing-template ${path.join(__dirname, 'template')} \
     --scripts-version ${scriptsVersion}
  `, {
    stdio: 'inherit',
    shell: true,
  });
}
