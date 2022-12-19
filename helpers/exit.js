function closeCLI(userName, data) {

  if (data.trim() == '.exit') {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  }
  console.log('Пожалуйста, введите текст');
}

function closeCLIUsualCommand(userName) {
  process.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${userName}, goodbye!`);
    process.exit();
  });
}

export { closeCLI, closeCLIUsualCommand }