// Dependencies
const path = require('path');
const { readFile } = require('fs/promises');

/*

This script does the following:

- installs prettier as a development dependency
- adds a prettier config to the package.json file

Nice to have

- Be able to setup prettier config file with defaults
  depending on the project type (app, library, react)
*/

// Adds the prettier config to the package.json file
const main = async ({ directoryPath }) => {
  // Instructions to run
  const prettierConfig = await readFile(
    path.join(__dirname, 'config.template.js'),
    'utf8'
  );

  const instructions = [
    {
      action: 'installDependencies',
      data: {
        directoryPath,
        dependencies: ['prettier'],
        devDependency: true,
      },
    },
    {
      action: 'createFile',
      data: {
        filePath: path.join(directoryPath, 'prettier.config.js'),
        content: prettierConfig,
      },
    },
  ];
  return instructions;
};

module.exports = main;
