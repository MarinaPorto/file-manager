function getArgs(args) {
  const res = {};
  const [executer, file, ...rest] = args;

  rest.forEach((element, index, rest) => {
    let partOfArgs = element.split("=");
    if (partOfArgs[0] == "--username") {
      res[partOfArgs[0].slice(2)] = partOfArgs[1].charAt(0).toUpperCase() + partOfArgs[1].slice(1)
    }
  });
  return res
};


export { getArgs }