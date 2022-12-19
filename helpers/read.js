import path, { dirname, resolve } from 'path';
import fs from 'fs';


function readFile(data) {
  console.log("You are currently in " + process.cwd())
  let fileToRead = data.toString().split(" ");
  let pathToRead = resolve(fileToRead[1].trim());
  if (fileToRead[0] === 'cat') {
    try {
      let readableStream = fs.createReadStream(pathToRead, 'utf8');
      let data = '';
      readableStream.on('data', chunk => data += chunk);
      readableStream.on('end', () => console.log(data));
    } catch (err) {
      console.log("Operation failed")
    }
  }
}


export { readFile }