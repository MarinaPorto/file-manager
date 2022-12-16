import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname, resolve } from 'path';
import { getArgs } from "./helpers/args.js";
import { closeCLI, closeCLIUsualCommand } from "./helpers/exit.js";
import { changeDir } from "./helpers/up.js";
import { goToPath } from "./helpers/gotofolder.js";
import { getElementslist } from "./helpers/list.js";
import { readFile } from "./helpers/read.js";
import { createFile } from './helpers/create.js';
import { renameFile } from './helpers/rename.js';
import { copyFiles } from './helpers/copy.js';
import { moveFile } from './helpers/move.js';
import { deleteFile } from './helpers/delete.js';
import { osInfo } from './helpers/os.js';
import { calculateHash } from './helpers/hash.js';
import { compressFile } from './helpers/compress.js';
import { decompressFile } from './helpers/decompress.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname)



function initCLI() {
  const args = getArgs(process.argv)
  let userName = args.username;

  console.log(args, "args index")
  console.log(`Welcome to the File Manager, ${userName}!`)
  console.log("You are currently in " + process.cwd())

  process.stdin.on('data', (data) => {
    let dataCommand = data.toString();
    let partOfCommand = data.toString().split(" ");
    console.log(partOfCommand, "partOfCommand")
    console.log(dataCommand, "dataCommand")
    if (partOfCommand.length == 1) {
      if (partOfCommand[0].trim() === "up") {
        changeDir(dataCommand)
      } else if (partOfCommand[0].trim() === "exit") {
        console.log("dfhgjfghjjhdfhg")
        closeCLI(userName, dataCommand)
      } else if (partOfCommand[0].trim() == "ls") {
        getElementslist(dataCommand, __dirname)
      }
    } else if (partOfCommand.length == 2) {
      if (partOfCommand[0].trim() === 'cd') {
        goToPath(dataCommand)
      } else if (partOfCommand[0].trim() === 'cat') {
        readFile(dataCommand)
      } else if (partOfCommand[0].trim() === 'add') {
        createFile(dataCommand)
      } else if (partOfCommand[0].trim() === 'rm') {
        deleteFile(dataCommand)
      } else if (partOfCommand[0].trim() === 'os') {
        osInfo(dataCommand)
      }
      else if (partOfCommand[0].trim() === 'hash') {
        calculateHash(dataCommand)
      }

    } else if ((partOfCommand.length == 3)) {
      if (partOfCommand[0].trim() === 'rn') {
        renameFile(dataCommand)
      } else if (partOfCommand[0].trim() === 'cp') {
        copyFiles(dataCommand)
      }
      else if (partOfCommand[0].trim() === 'mv') {
        moveFile(dataCommand)
      }
      else if (partOfCommand[0].trim() === 'compress') {
        compressFile(dataCommand)
      } else if (partOfCommand[0].trim() === 'decompress') {
        decompressFile(dataCommand)
      }
    }

  })
  closeCLIUsualCommand(userName)
}

initCLI()
