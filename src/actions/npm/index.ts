// Dependencies
import util from 'util';
import { exec as execCB } from 'child_process';
const exec = util.promisify(execCB);

// Types
import {
  InstallDependencyParams,
  InstallDependenciesParams,
} from '../../global';

export async function installDependency({
  directoryPath,
  dependency,
  devDependency,
}: InstallDependencyParams) {
  const { stdout, stderr } = await exec(
    'npm install ' +
      dependency +
      ' --prefix ' +
      directoryPath +
      ' --save' +
      (devDependency ? '-dev' : '')
  );
  console.log(stdout);
  console.log(stderr);
}

export async function installDependencies({
  directoryPath,
  dependencies,
  devDependency,
}: InstallDependenciesParams) {
  const { stdout, stderr } = await exec(
    'npm install ' +
      dependencies.join(' ') +
      ' --prefix ' +
      directoryPath +
      ' --save' +
      (devDependency ? '-dev' : '')
  );
  console.log(stdout);
  console.log(stderr);
}
