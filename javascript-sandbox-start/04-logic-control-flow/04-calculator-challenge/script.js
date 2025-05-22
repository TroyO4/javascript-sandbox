const calculator = (x, y, op) => {
  let result;
  switch (op) {
    case '+':
      result = x + y;
      console.log(`${x} + ${y} = ${result}`);
      break;

    case '-':
      result = x - y;
      console.log(`${x} - ${y} = ${result}`);
      break;

    case '/':
      result = x / y;
      console.log(`${x} / ${y} = ${result}`);
      break;

    case '*':
      result = x * y;
      console.log(`${x} * ${y} = ${result}`);
      break;

    default:
      console.log('wrongo');
      break;
  }
};

calculator(4, 3, '/');
