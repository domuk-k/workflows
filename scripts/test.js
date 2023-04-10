const { execSync } = require('child_process');

console.log(execSync('npx cowsay asdf').toString());
console.log(execSync('npx @datadog/datadog-ci version').toString());

const fs = require('fs');

console.log(process.env.SERVICE_VERSION);
if (fs.existsSync('/wowow')) {
  console.log('noo');
} else {
  console.log('pass');
}
