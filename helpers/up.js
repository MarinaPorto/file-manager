import path, { dirname, resolve } from 'path';

function changeDir(data) {

  if (data.toString().trim() == 'up') {
    process.chdir(resolve(".."));
    console.log("You are currently in " + process.cwd())
  }
}

export { changeDir }