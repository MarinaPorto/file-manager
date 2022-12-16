import fs from 'fs';

const createFile = async (dataCommand) => {
  let pathFileData = dataCommand.toString().split(" ");
  fs.open(pathFileData[1].trim(), 'w', (err) => {
    if (err) {
      throw err;
    } else {
    }
  });
};
export { createFile }
