import fs from 'fs';
import zlib from 'zlib';

const decompressFile = async (dataCommand) => {
  let commandToCompress = dataCommand.toString().split(" ");
  let compressedFile = commandToCompress[1].trim();
  let decompressFile = commandToCompress[2].trim();

  fs.stat(compressedFile, (error, st) => {
    if (error) {
      console.log("Operation failed")
    }
    else {
      const inp = fs.createReadStream(compressedFile);
      const out = fs.createWriteStream(decompressFile);
      const brotli = zlib.createBrotliDecompress();
      inp.pipe(brotli.createUnzip()).pipe(out);
    }
  })
};

export { decompressFile }