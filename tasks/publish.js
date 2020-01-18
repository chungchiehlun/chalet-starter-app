const path = require('path');
const execSync = require('child_process').execSync;

execSync(`npm punlish`, {
  cwd: __dirname,
  stdio: 'inherit',
});
