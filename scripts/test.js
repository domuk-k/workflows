const { execSync } = require('child_process');

console.log(execSync('npx cowsay asdf').toString());
console.log(execSync('npx datadog-ci version').toString());
