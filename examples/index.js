const path = require('path');
const { runInstructions } = require('../dist');
const makeNextJSApp = require('./make-nextjs-app');
const setupJest = require('./setup-jest');
const setupPrettier = require('./setup-prettier');
const setupEslint = require('./setup-eslint');
const setupCucumber = require('./setup-cucumber');
const setupMCG = require('./setup-mcg');
const setupRCG = require('./setup-rcg');

(async () => {
  // Common config
  const appName = 'this-app';
  const appPath = path.join(__dirname, appName);

  // Instructions for initializing the Next.js app codebase
  const makeAppInstructions = makeNextJSApp({
    appName,
    baseDirectory: __dirname,
  });

  // Instructions for initialize the Jest config
  const setupJestInstructions = setupJest({ directoryPath: appPath });

  // Instructions for setting up prettier, which is an async function
  const setupPrettierInstructions = await setupPrettier({
    directoryPath: appPath,
  });

  // Instructions for setting up eslint
  const setupEslintInstructions = setupEslint({ directoryPath: appPath });

  // Instructions for setting up cucumber
  const setupCucumberInstructions = await setupCucumber({
    directoryPath: appPath,
    withPuppeteer: true,
  });

  // Need to check what dependencies need to be installed
  // - Objection.js
  // - Knex
  // Also what files need to be setup
  // - knexfile.js
  // - db.js
  // Also what config to specify
  const setupMCGInstructions = await setupMCG({});

  // Need to check what dependencies need to be installed
  // Also what files/folders to setup
  // Also a config file?
  const setupRCGInstructions = await setupRCG({});

  // Used to test error cases occurring in the instruction set,
  // and how the library handles them
  // const setupDummyInstructions = [{ action: 'notFound', data: {} }];

  // Combine the instructions in a single array
  const instructions = [
    makeAppInstructions,
    setupJestInstructions,
    setupPrettierInstructions,
    setupEslintInstructions,
    // setupDummyInstructions,
    setupCucumberInstructions,
    setupMCGInstructions,
    setupRCGInstructions,
  ].flat();

  await runInstructions(instructions);
})();
