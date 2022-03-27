// Dependencies
import util from 'util';
import { exec as execCB } from 'child_process';
const exec = util.promisify(execCB);

// Types
import {
  RunCommandParams,
} from '../../global';
  

// TODO - add support for interactive prompts e.g. jest --init
export async function runCommand({directoryPath, command}: RunCommandParams) {
  const { stdout, stderr } = await exec(command, { cwd: directoryPath });
  console.log(stdout);
  console.log(stderr);
}