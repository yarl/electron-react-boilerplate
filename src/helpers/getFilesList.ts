import directoryTree, { DirectoryTree } from 'directory-tree';

function getFilesList(paths: string[]): DirectoryTree[] {
  const entries = paths.map((path) => directoryTree(path));
  const files = entries.filter((entry) => entry.type === 'file');

  entries
    .filter((entry) => entry.type === 'directory')
    .forEach((entry) => {
      if (entry.children && entry.children.length) {
        files.push(...entry.children);
      }
    });

  return files;
}

export default getFilesList;
