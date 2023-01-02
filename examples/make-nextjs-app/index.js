// Dependencies
const path = require('path');

/*
    Context
    =======

    Notes
    -----

    It feels like app name is a variable that can be passed in programmatically,
    and something that you might want to put into other places (e.g. package.json,
    the readme.md, the git repo to create/publish to, the project name in the 
    hosting platform, etc.

    Perhaps there is a way to store and structure this context, so that it can be
    read and accessed by other files.

    What would be cool is to find a way to combine a bunch of instructions to 
    help generate the codebase for an application:

    - Setup the next.js app
    - Setup jest
    - Setup husky
    - Setup eslint
    - Setup prettier
    - Setup .gitignore
*/

const main = ({ appName, baseDirectory }) => {
  if (!appName) appName = 'my-app';
  if (!baseDirectory) baseDirectory = __dirname;

  const appFolderPath = path.join(baseDirectory, appName);
  const pagesFolderPath = path.join(appFolderPath, 'pages');
  const indexPageReactComponent = `import React from 'react';
      
const Page = () => {
    return <div>Hello</div>;
}

export default Page;`;

  const indexPage = {
    filePath: path.join(pagesFolderPath, 'index.js'),
    content: indexPageReactComponent,
  };

  const envLocalFile = {
    filePath: path.join(appFolderPath, '.env.local'),
    content: '# Put your local environment variables here',
  };

  const envFile = {
    filePath: path.join(appFolderPath, '.env'),
    content: '# Put your global environment variables here',
  };

  const gitIgnoreFileContent = `
# Ignore node_modules
node_modules

# Ignore MacOS filesystem metadata files
.DS_Store

# Ignore local env file
.env.local

# Ignore next.js build artifacts
.next`;

  const gitIgnoreFile = {
    filePath: path.join(appFolderPath, '.gitignore'),
    content: gitIgnoreFileContent,
  };

  // TODO - work out how to handle adding next.js folders/files to .gitignore
  // .env.local
  // node_modules
  // .next
  // .DS_Store

  // Need option to add content to file
  // Though the smart way would be to read the contents of the file,
  // and then add to .gitignore if it does not exist there already
  //

  // Instructions to run
  const instructions = [
    {
      action: 'createDirectory',
      data: { directoryPath: pagesFolderPath, recursive: true },
    },
    {
      action: 'installDependencies',
      data: {
        directoryPath: appFolderPath,
        dependencies: ['react', 'react-dom', 'next'],
      },
    },
    {
      action: 'createFile',
      data: { ...indexPage },
    },
    {
      action: 'createFile',
      data: { ...envLocalFile },
    },
    {
      action: 'createFile',
      data: { ...envFile },
    },
    {
      action: 'createFile',
      data: { ...gitIgnoreFile },
    },
  ];
  return instructions;
};

module.exports = main;
