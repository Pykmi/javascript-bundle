import { writeFile, existsSync, readFileSync, unlink } from 'fs';

const { error } = console;

class localStorage {

  store = {};
  file = '';

  constructor(storageFile = 'localStorage.json') {
    this.file = storageFile;
    
    if(existsSync(this.file)) {
      const data = readFileSync(this.file);
      this.store = JSON.parse(data);
    }
  }

  length = () => Object.keys(this.store).length;

  getItem = (key) => this.store[key];

  setItem = (key, value) => {
    this.store[key] = value;
    writeFile(this.file, JSON.stringify(this.store), (err) => {
      if(err) {
        error(err);
      }
    });
  }

  clear = () => {
    this.store = {};
    unlink(this.file, (err) => {
      if(err) {
        error(err);
      }
    })
  };
}

export default new localStorage(); 