import path, { dirname, resolve } from 'path';

function closeCLI(userName, data){
  console.log("fn close")
  

  if (data.trim() == 'exit') {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();     
  } 
  console.log('Пожалуйста, введите текст');
  // writeableStream.write(data);

// process.stdin.resume();

}

function closeCLIUsualCommand(userName) {
  process.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
  process.exit(); 
});
}

export {closeCLI, closeCLIUsualCommand }