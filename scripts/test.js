const { execSync } = require('child_process');

console.log(execSync('cowsay asdf').toString());
