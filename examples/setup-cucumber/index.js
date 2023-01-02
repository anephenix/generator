// Dependencies
const path = require('path');
const { readFile } = require('fs/promises');

/*

This script does the following:

- [x] Creates the features folder
- [x] Creates a features/step_definitions folder
- [x] Creates a features/support folder

- [x] Create world.js file
- [x] Create world.js file
- [x] Create hooks.js file
- [x] Include the package.json script to run the cucumber commands
- [x] Have a way to optionally include the puppeteer module as a dependency

# TODO

- [ ] Have an action to create a cucumber feature file
- [ ] Have an action to create a cucumber step definition file
- [ ] Have an action to populate code in the step definition file for a cucumber step

*/

const addCucumberConfig = (content) => {
  const packageJson = JSON.parse(content);
  packageJson.scripts = {
    ...packageJson.scripts,
    cucumber: 'npx cucumber-js',
    'cucumber-wip': 'npx cucumber-js -t @wip',
  };
  return JSON.stringify(packageJson, null, 2);
};

const main = async ({ directoryPath, withPuppeteer }) => {
  const cucumberFolderPath = path.join(directoryPath, 'features');
  const supportFolderPath = path.join(cucumberFolderPath, 'support');
  const stepDefinitionsFolderPath = path.join(
    cucumberFolderPath,
    'step_definitions'
  );
  const worldFilePath = path.join(cucumberFolderPath, 'world.js');
  const worldFileTemplatePath = path.join(
    __dirname,
    withPuppeteer ? 'world.withPuppeteer.template.js' : 'world.template.js'
  );
  const worldFileContent = await readFile(worldFileTemplatePath, 'utf8');

  const hooksFilePath = path.join(cucumberFolderPath, 'hooks.js');
  const hooksFileContent = await readFile(
    path.join(__dirname, 'hooks.template.js'),
    'utf8'
  );

  const dependencies = ['@cucumber/cucumber'];
  if (withPuppeteer) {
    dependencies.push('puppeteer');
  }

  // Instructions to run
  const instructions = [
    {
      action: 'installDependencies',
      data: {
        directoryPath,
        dependencies,
        devDependency: true,
      },
    },
    {
      action: 'createDirectories',
      data: {
        directoryPaths: [
          cucumberFolderPath,
          supportFolderPath,
          stepDefinitionsFolderPath,
        ],
      },
    },
    {
      action: 'createFiles',
      data: {
        files: [
          {
            filePath: worldFilePath,
            content: worldFileContent,
          },
          {
            filePath: hooksFilePath,
            content: hooksFileContent,
          },
        ],
      },
    },
    {
      action: 'modifyFile',
      data: {
        filePath: path.join(directoryPath, 'package.json'),
        modifyFn: addCucumberConfig,
      },
    },
  ];
  return instructions;
};

module.exports = main;
