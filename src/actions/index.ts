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