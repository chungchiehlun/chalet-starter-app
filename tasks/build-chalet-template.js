#!/usr/bin/env node

'use strict';

const fs = require('fs-extra');
const path = require('path');
const rootDir = path.join(__dirname, '..');
const packagesDir = path.join(rootDir, 'packages');

const ownPath = path.join(packagesDir, 'chalet');
const templatePath = path.join(
  packagesDir,
  'create-starter-app',
  'template',
  'chalet'
);

fs.ensureDirSync(templatePath);
fs.emptyDirSync(templatePath);

// copy public/ ,src/, gitignore to template folder
['public', 'src', 'gitignore'].forEach(folderName => {
  fs.copySync(
    path.join(ownPath, folderName),
    path.join(templatePath, folderName)
  );
});

// create .template.dependencies.json from package.json
const ownPackage = require(path.join(ownPath, 'package.json')).dependencies;
const necessaryPackage = Object.keys(ownPackage)
  .filter(
    pkgName => !['react', 'react-dom', 'starter-scripts'].includes(pkgName)
  )
  .reduce((result, pkgName) => {
    result[pkgName] = ownPackage[pkgName];
    return result;
  }, {});

fs.writeFileSync(
  path.join(templatePath, '.template.dependencies.json'),
  JSON.stringify(
    {
      dependencies: necessaryPackage,
    },
    null,
    2
  )
);

fs.appendFileSync(path.join(templatePath, '.template.dependencies.json'), '\n');
