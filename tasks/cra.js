#!/usr/bin/env node

'use strict';

const path = require('path');
const execSync = require('child_process').execSync;
const rootDir = path.join(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');

const cleanup = () => {
  console.log('Cleaning up.');
};

const handleExit = () => {
  cleanup();
  console.log('Exiting without error.');
  process.exit();
};

const handleError = e => {
  console.error('ERROR! An error was encountered while executing\n', e);
  console.error(e);
  cleanup();
  console.log('Exiting with error.');
  process.exit(1);
};

process.on('SIGINT', handleExit);
process.on('uncaughtException', handleError);

// Pack starter-scripts
const scriptsFileName = execSync(`npm pack`, {
  cwd: path.join(packagesDir, 'starter-scripts'),
})
  .toString()
  .trim();
const scriptsPath = path.join(packagesDir, 'starter-scripts', scriptsFileName);

// Run the CRA command
const args = process.argv.slice(2);

execSync(
  `npx create-react-app ${args.join(' ')} --scripts-version="${scriptsPath}"`,
  {
    cwd: rootDir,
    stdio: 'inherit',
  }
);

// Cleanup
handleExit();
