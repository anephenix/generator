// Dependencies
import { writeFile, readFile } from 'fs/promises';
import path from 'path';

// Types
import {
    AddToGitIgnoreParams,
} from '../../global';
  

// TODO - check if the file gets created if the file does not yet exist in there
// TODO - check if the content is not in the file already
export async function addToGitIgnore({directoryPath, content}:AddToGitIgnoreParams) {
    const gitIgnoreFilePath = path.join(directoryPath,'.gitignore');
    const gitIgnoreFileContent = await readFile(gitIgnoreFilePath);
    const newContent = gitIgnoreFileContent + '\n' + content;
    await writeFile(gitIgnoreFilePath, newContent);
}