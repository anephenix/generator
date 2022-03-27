// Dependencies
import { mkdir, stat, writeFile, readFile } from 'fs/promises';

// Types
import { DirectoryPath, CreateFileParams, CreateFilesParams, ModifyFileParams, CreateDirectoryParams, CreateDirectoriesParams } from '../../global';

// Checks if the directory already exists
export async function checkIfDirectoryExists(directoryPath:DirectoryPath) {
    try {
      const check = await stat(directoryPath);
      return check.isDirectory();
    } catch (err) {
      // @ts-ignore
      if (err?.code === 'ENOENT') { 
        return false;
      } else {
        throw err;
      }
    }
  }
  
// Creates a directory
// TODO - work out if recursive changes the way of calling this
export async function createDirectory ({directoryPath, skipIfExists, recursive}:CreateDirectoryParams) {
    const exists = await checkIfDirectoryExists(directoryPath);
    if (exists && skipIfExists) return;
    if (exists) throw new Error('Directory already exists');  
    await mkdir(directoryPath, { recursive });
  }
  
  export async function createDirectories({directoryPaths, skipIfExists, recursive}:CreateDirectoriesParams) {
    for await (const directoryPath of directoryPaths) {
      await createDirectory({directoryPath, skipIfExists, recursive});
    }
  }
  
  // Creates a file
  export async function createFile({filePath, content}:CreateFileParams) {
    // Check that the base folder exists
    // Check that we have the permission to create files in that folder
    // Check that the file doesn't already exist
  
    await writeFile(filePath, content);
  }
  
  export async function createFiles({files}: CreateFilesParams) {
    for await (const file of files) {
      await createFile(file);
    }
  }

  export async function modifyFile({filePath, modifyFn}:ModifyFileParams) {
    const originalContent = await readFile(filePath);
    const modifiedContent = await modifyFn(originalContent);
    await writeFile(filePath, modifiedContent);
  }
  