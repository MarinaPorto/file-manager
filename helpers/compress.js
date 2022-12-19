import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
А
const compressFile = async (dataCommand) => {

  let commandToCompress = dataCommand.toString().split(" ");
  let fileToCompress = commandToCompress[1].trim();
  let compressedFile = commandToCompress[2].trim();

  fs.stat(fileToCompress, (error, st) => {
    if (error) {
      console.log("Operation failed")
    }
    else {
      const inp = fs.createReadStream(fileToCompress);
      const out = fs.createWriteStream(compressedFile);
      const brotli = zlib.createBrotliCompress();
      inp.pipe(brotli).pipe(out);
    }
  })
};

export { compressFile }