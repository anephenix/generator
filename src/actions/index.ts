// Dependencies
import { installDependency, installDependencies } from "./npm";
import { createDirectories, createDirectory, createFiles, createFile, modifyFile } from "./filesystem";
import { addToGitIgnore } from "./git";
import { runCommand } from "./childProcess";

// Types
import { Actions, AddActionParams } from '../global';

// These are common actions that most codebases would use
export const actions:Actions = {
  createDirectory,
  createDirectories,
  createFile,
  createFiles,
  installDependency,
  installDependencies,
  addToGitIgnore,
  runCommand,
  modifyFile
}
  
// This is so that other actions can be added, say from 3rd-party libraries
export function addAction({action, actionFn, override }:AddActionParams) {
  if (actions[action] && !override) throw new Error('Action already exists');
  actions[action] = actionFn;
}

/* 

  I'm starting to think that actions is a good object, but that it could end up containing many actions,
  and that it will become a headache to manage that.
  
  Therefore, actions needs to be a namespace, one that can be referenced and managed easily, potentially.

  e.g. git.addToGitIgnore({filePath})
  e.g. nextjs.addPage 
  e.g. mcg.addModel
  e.g. knex.addMigration
  e.g. rcg.addComponent
  e.g. npm.installDependency

*/