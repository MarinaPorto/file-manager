import os from 'os';

const osInfo = async (dataCommand) => {
  let osReq = dataCommand.toString().split(" ");
  let osTask = osReq[1].trim();

  if (osTask === "--EOL") {
    console.log(JSON.stringify(os.EOL));
  } else if (osTask === "--cpus") {
    console.log(os.cpus());
  } else if (osTask === "--homedir") {
    console.log(os.homedir());
  } else if (osTask === "--username") {
    console.log(os.userInfo().username);
  } else if (osTask === "--architecture") {
    console.log(os.arch());
  } else {
    console.log("Operation failed")
  }
};


export { osInfo }