import path, { dirname, resolve } from 'path';

function goToPath(data) {
  let pathToGo = data.toString().split(" ");
  if (pathToGo[0] === 'cd') {
    try {
      process.chdir(resolve(pathToGo[1].trim()));
    } catch (err) {
      console.log("Operation failed")
    }
    console.log("You are currently in " + process.cwd())
  }
}

export { goToPath }