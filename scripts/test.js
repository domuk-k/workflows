const { execSync } = require('child_process');

console.log(execSync('npx cowsay asdf').toString());
console.log(execSync('npx @datadog/datadog-ci version').toString());

const fs = require('fs');

console.log(process.env.WORKFLOW_LEVEL_SERVICE_VERSION);
console.log(process.env.JOB_LEVEL_SERVICE_VERSION);
console.log(process.env.STEP_LEVEL_SERVICE_VERSION);
console.log(process.env.MY_VAR);
if (fs.existsSync('/wowow')) {
  console.log('noo');
} else {
  console.log('pass');
}
