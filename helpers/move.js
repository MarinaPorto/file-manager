import path, { dirname, resolve } from 'path';
import fs from 'fs';

const moveFile = async (dataCommand) => {
  let pathFileData = dataCommand.toString().split(" ");
  let fileFromCopy = pathFileData[1].trim();
  let fileToCopy = pathFileData[2].trim();

  fs.stat(fileFromCopy, (error, st) => {
    if (error) {
      console.log("Operation failed")
    }
    else {
      let readableStream = fs.createReadStream(fileFromCopy, 'utf8');
      let writeableStream = fs.createWriteStream(path.join(fileToCopy, fileFromCopy));
      let data = '';
      readableStream.on('data', chunk => data += chunk);
      readableStream.on('end', () => {
        writeableStream.write(data)
        unlinkFile(fileFromCopy)
      });

    }
  })
};

async function unlinkFile(fileFromCopy) {
  fs.promises.unlink(fileFromCopy, err => {
    if (err) {
      console.log("Error")
    }
  });
}

export { moveFile }