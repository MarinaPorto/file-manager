import fs from 'fs';

const renameFile = async (dataCommand) => {
  let pathFileData = dataCommand.toString().split(" ");
  fs.rename(pathFileData[1], pathFileData[2].trim(), function (err) {
    if (err) console.log("Operation failed", err);
  });
};
export { renameFile }
