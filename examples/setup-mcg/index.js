// Dependencies
const path = require('path');

/*

This script does the following:

- installs @anephenix/mcg as a development dependency
- installs objection.js as a dependency
- installs knex as a dependency
- installs pg as a dependency (I think that is required)
- Creates a knexfile.js file (unless one already exists)
- Creates a db.js file (unless one already exists)

Nice to have
------------

- Have a way to run the jest --init command, and pipe in stdin so that the 
  person running the script can set the jest config up the way they want.

  Alternatively, we could look for a preset (Node.js library, react, etc.) and
  then use that as the basis for the jest config in the package.json file,
  or in a dedicated jest.config.js file.
*/

const main = ({ directoryPath }) => {
  // Instructions to run
  const instructions = [
    {
      action: 'installDependencies',
      data: {
        directoryPath,
        dependencies: ['@anephenix/mcg'],
        devDependency: true,
      },
    },
    {
      action: 'installDependencies',
      data: {
        directoryPath,
        dependencies: ['objection', 'knex', 'pg'],
        devDependency: false,
      },
    },
  ];
  return instructions;
};

module.exports = main;

