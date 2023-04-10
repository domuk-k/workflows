const { execSync } = require('child_process');

console.log(execSync('npx cowsay asdf').toString());
console.log(execSync('npx @datadog/datadog-ci version').toString());

const fs = require('fs');

if (fs.existsSync('/wowow')) {
  console.log('noo');
} else {
  console.log('pass');
}
