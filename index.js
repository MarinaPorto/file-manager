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

function initCLI() {
  const args = getArgs(process.argv)
  let userName = args.username;
  console.log(`Welcome to the File Manager, ${userName}!`)
  console.log("You are currently in " + process.cwd())

  process.stdin.on('data', (data) => {
    let dataCommand = data.toString();
    let mainOperation = data.toString().split(" ");
    let operation = mainOperation[0].trim();
    if (mainOperation.length == 1) {
      if (operation === "up") {
        changeDir(dataCommand)
      } else if (operation === "exit") {
        console.log("dfhgjfghjjhdfhg")
        closeCLI(userName, dataCommand)
      } else if (operation == "ls") {
        getElementslist(dataCommand, __dirname)
      }
    } else if (mainOperation.length == 2) {
      if (operation === 'cd') {
        goToPath(dataCommand)
      } else if (operation === 'cat') {
        readFile(dataCommand)
      } else if (operation === 'add') {
        createFile(dataCommand)
      } else if (operation === 'rm') {
        deleteFile(dataCommand)
      } else if (operation === 'os') {
        osInfo(dataCommand)
      }
      else if (operation === 'hash') {
        calculateHash(dataCommand)
      }
    } else if ((mainOperation.length == 3)) {
      if (operation === 'rn') {
        renameFile(dataCommand)
      } else if (operation === 'cp') {
        copyFiles(dataCommand)
      }
      else if (operation === 'mv') {
        moveFile(dataCommand)
      }
      else if (operation === 'compress') {
        compressFile(dataCommand)
      } else if (operation === 'decompress') {
        decompressFile(dataCommand)
      }
    } else {
      console.log("Invalid input")
    }
  })
  closeCLIUsualCommand(userName)
}

initCLI()
