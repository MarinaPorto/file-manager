import path, { dirname, resolve } from 'path';
import fs from 'fs';
import { readdir } from "fs/promises";

function getElementslist(data, __dirname) {
  if (data.toString().trim() === 'ls') {
    getElememnts(process.cwd())
    console.log("You are currently in " + process.cwd())
  }
}

async function getElememnts(__dirname) {
  let files = [];
  let filesList = [];
  let foldersList = [];
  try {
    let files = await fs.promises.readdir(__dirname, { withFileTypes: true });
    files.filter(de => de.isDirectory()).map(de => {
      foldersList.push({ name: de.name, type: "directory" })
    });
    files.filter(de => de.isFile()).map(de => {
      filesList.push({ name: de.name, type: "file" })
    });

  } catch (err) {
    console.log("err", err)
    console.log("Operation failed")
  }
  files = foldersList.concat(filesList);
  console.table(files)
}

export { getElementslist }