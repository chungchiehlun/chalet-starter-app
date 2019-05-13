const path = require('path');
const execSync = require('child_process').execSync;

execSync(`lerna publish --no-push`, {
  cwd: __dirname,
  stdio: 'inherit',
});
