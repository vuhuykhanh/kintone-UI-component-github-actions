const execSync = require("child_process").execSync;
const core = require("@actions/core");
const path = require('path');
const fs = require('fs');

const sourePath = path.join(__dirname, '..', '..', 'kintone-ui-component',);
const packagePath = path.join(__dirname, '..', '..', 'kintone-ui-component', 'package.json');

const branches = core.getInput('branches')
if (fs.existsSync(sourePath)) {
    execSync(`rm -rf ${sourePath}`);
}
execSync(`git clone https://github.com/kintone/kintone-ui-component.git -b ${branches}`);
execSync(`cd ${sourePath} && npm install`);
execSync(`cd ${sourePath} && npm run build`);
execSync(`cd ${sourePath} && npm pack`);
const package = require(packagePath)
core.setOutput('files', path.join(__dirname, '..', '..', 'kintone-ui-component', `kintone-kintone-ui-component-${package.version}.tgz`))

