export type DirectoryPath = string;

export type AddActionParams = {
  action    : string;
  actionFn  : Function;
  override? : boolean;
}

export type CreateFileParams = {
  filePath  : string;
  content   : string;
}

export type CreateFilesParams = {
  files: Array<CreateFileParams>;
}

export type CreateDirectoryParams = {
  directoryPath : DirectoryPath;
  skipIfExists? : boolean;
  recursive?    : boolean;
}

export type CreateDirectoriesParams = {
  directoryPaths : Array<DirectoryPath>;
  skipIfExists? : boolean;
  recursive?    : boolean;
}

export type AddToGitIgnoreParams = {
  directoryPath : DirectoryPath;
  content       : string;
}

export type InstallDependencyParams = {
  directoryPath   : DirectoryPath;
  dependency      : string;
  devDependency?  : boolean;
}

export type InstallDependenciesParams = {
  directoryPath   : DirectoryPath;
  dependencies    : Array<string>;
  devDependency?  : boolean;
}

export type RunCommandParams = {
  directoryPath : DirectoryPath;
  command       : string;
}

export type ModifyFileParams = {
  filePath : string;
  modifyFn : Function;
}

export type Actions = {
  [key:string] : Function;
}
  
export type Instruction = {
  action  : keyof Actions,
  data    : object;
}

export interface ErrnoException extends Error {
   errno?: number | undefined;
   code?: string | undefined;
   path?: string | undefined;
   syscall?: string | undefined;
}