import crypto from 'crypto';
import fs from 'fs';


const calculateHash = async (dataCommand) => {
  let hashData = dataCommand.toString().split(" ");
  let hashFile = hashData[1].trim();


  fs.stat(hashFile, (error, st) => {
    if (error) {
      console.log("Operation failed")
    }
    else {
      const readStream = fs.createReadStream(hashFile, 'utf-8');
      readStream.on('data', (chunk) => {
        const hash = crypto.createHash('sha256').update(chunk).digest('hex');
        console.log(hash)
      });
    }
  })

};

export { calculateHash }