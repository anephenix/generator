// Dependencies
const path = require('path');

/*

This script does the following:

- installs jest as a development dependency
- adds a test script to the package.json file
- adds a jest config to the package.json file
- creates a __tests__ directory

Nice to have
------------

- Have a way to run the jest --init command, and pipe in stdin so that the 
  person running the script can set the jest config up the way they want.

  Alternatively, we could look for a preset (Node.js library, react, etc.) and
  then use that as the basis for the jest config in the package.json file,
  or in a dedicated jest.config.js file.
*/

// Adds the test script to the package.json file
const addTestScript = async (content) => {
  const packageJson = JSON.parse(content);
  if (!packageJson.scripts) packageJson.scripts = {};
  packageJson.scripts.test = 'npx jest';
  return JSON.stringify(packageJson, null, 2);
};

// Adds the jest config to the package.json file
const addJestConfig = async (content) => {
  const packageJson = JSON.parse(content);
  if (!packageJson.jest) packageJson.jest = {};
  packageJson.jest.testMatch = ['**/?(*.)+(spec|test).+(ts|tsx|js)'];
  return JSON.stringify(packageJson, null, 2);
};

const main = ({ directoryPath, testFolderName = '__tests__' }) => {
  // Instructions to run
  const instructions = [
    {
      action: 'installDependencies',
      data: {
        directoryPath,
        dependencies: ['jest'],
        devDependency: true,
      },
    },
    {
      action: 'modifyFile',
      data: {
        filePath: path.join(directoryPath, 'package.json'),
        modifyFn: addTestScript,
      },
    },
    {
      action: 'modifyFile',
      data: {
        filePath: path.join(directoryPath, 'package.json'),
        modifyFn: addJestConfig,
      },
    },
    {
      action: 'createDirectory',
      data: {
        directoryPath: path.join(directoryPath, testFolderName),
      },
    },
  ];
  return instructions;
};

module.exports = main;
