import { DirectoryTree } from 'directory-tree';
import { makeAutoObservable } from 'mobx';

import UploadElement from './File.model';

class SessionStore {
  status = 'START';
  files: UploadElement[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setStatus(status: string): void {
    this.status = status;
  }

  addFiles(files: DirectoryTree[]): void {
    const uploadElements = files.map((file) => {
      const uploadElement = new UploadElement(file);
      return uploadElement;
    });

    this.files.push(...uploadElements);

    uploadElements.forEach((uploadElement) => uploadElement.createThumbnail());
  }

  removeFile(file: UploadElement): void {
    this.files = this.files.filter((f) => f !== file);
  }

  sortFiles(key: 'name' | 'size', asc = true): void {
    this.files.sort((a: UploadElement, b: UploadElement) => {
      if (a[key] > b[key]) return asc ? 1 : -1;
      if (b[key] > a[key]) return asc ? -1 : 1;
      return 0;
    });
  }
}

export default SessionStore;
