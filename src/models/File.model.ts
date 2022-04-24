import { makeAutoObservable } from 'mobx';
import fs from 'fs';

import generateThumbnail from '../helpers/generateThumbnail';
// import generateThumbnail from '../workers/thumbnail';

class UploadElement {
  isSelected: boolean;
  name: string;
  path: string;
  size: number;
  thumbnail: string;
  file: Buffer;

  constructor(file: { path: string; size: number }) {
    makeAutoObservable(this);

    this.isSelected = false;
    this.name = file.path.split('/').pop() || '';
    this.path = file.path;
    this.size = file.size;
    this.thumbnail = '';

    this.file = fs.readFileSync(this.path);
  }

  createThumbnail(): void {
    generateThumbnail(this.path)
      .then((thumbnail) => {
        this.thumbnail = thumbnail;
        console.log(this.name, this.thumbnail);
        return true;
      })
      .catch((error) => console.log(error));
  }

  get extension(): string {
    return this.path;
  }

  setSelect(flag: boolean): void {
    this.isSelected = flag;
  }

  toggleSelect(): void {
    this.isSelected = !this.isSelected;
  }
}

export default UploadElement;
