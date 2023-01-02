# Instructions for making a Next.js app

- Create a folder for the app <app-name>
- inside that folder, install 3 dependencies:
  - react
  - react-dom
  - next
- inside that folder, create a pages folder
- inside that pages folder, create an index.js file with an exported react component

As command-line instructions:

If operating in a greenfield environment:

e.g. app = my-app

```shell
mkdir my-app
cd my-app
npm i react react-dom next --save
mkdir pages
cd pages && echo "import react from 'react';\n\nconst Page = () => {\n\treturn <div>Hello</div>;\n}\n\nexport default Page;" > index.js
```

So folders would be:

my-app
my-app/pages

Files would be:

my-app/pages/index.js

// Other things

npm i react react-dom next --save

And operating on the assumption that there are no issues with folders, permissions, disk space

This is a good example of a small scaffold, and we should look into options around scaffolding that can resolve requirements e.g a folder that needs to exist beforehand, dependencies that need to be in place, other files that need to exist, dependencies that need to be installed

// Now that we have a baseline next.js app, the next steps are:

- Setup env files
- Setup gitignore
- Setup git repo for it
- Setup Objection.js for it
- Setup @anephenix/mcg for generating models
- Setup @anephenix/ui for setting up ui
- Setup @anephenix/rcg for generating react components
- Setup Jest for unit testing
- Setup Cucumber for e2e testing

## Optionals

- Setup @anephenix/queue for job queue support
- Setup @anephenix/objection-relations for setting up model relationships
- Setup @anephenix/fastify-resource for generating resources for Objection.js models
- Setup Sentry for error logging
- Setup Stripe for payments collection
- Setup a template for authentication/authorization

- It is more the ability to understand what an environment looks like, and then to understand what changes to make to get to the desired state of the code/data

- To check assumptions about the current state
- To check that nothing blocks proceeding to run the actions
- To evaluate the expected state
- To run the actions
- To check the expected and actual states are exact
