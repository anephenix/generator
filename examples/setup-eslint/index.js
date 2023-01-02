// Dependencies
const path = require('path');

/*

This script does the following:

- installs eslint as a development dependency
- adds a eslint config to the package.json file

*/

// Adds the prettier config to the package.json file
const addEslintConfig = async (content) => {
  const packageJson = JSON.parse(content);
  //   packageJson.prettier = {
  //     trailingComma: 'es5',
  //     tabWidth: 4,
  //     semi: false,
  //     singleQuote: true,
  //   };
  return JSON.stringify(packageJson, null, 2);
};

/*

I'm thinking that it would be better to put the eslint config in files rather than in package.json.

*/

const main = ({ directoryPath }) => {
  // Instructions to run
  const instructions = [
    {
      action: 'installDependencies',
      data: {
        directoryPath,
        dependencies: ['eslint'],
        devDependency: true,
      },
    },
    {
      action: 'modifyFile',
      data: {
        filePath: path.join(directoryPath, 'package.json'),
        modifyFn: addEslintConfig,
      },
    },
  ];
  return instructions;
};

module.exports = main;
