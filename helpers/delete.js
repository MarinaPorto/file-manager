import fs from 'fs';

const deleteFile = async (dataCommand) => {
  let pathFileData = dataCommand.toString().split(" ");
  let fileToDelete = pathFileData[1].trim();

  fs.stat(fileToDelete, (error, st) => {
    if (error) {
      console.log("Operation failed")
    }
    else {
      unlinkFile(fileToDelete)
    }
  })
};

function unlinkFile(fileToDelete) {
  fs.promises.unlink(fileToDelete, err => {
    if (err) {
      console.log("Error")
    }
  });
}

export { deleteFile }