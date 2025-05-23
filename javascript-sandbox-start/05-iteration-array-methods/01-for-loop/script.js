// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// for (let i = 0; i <= 11; i++) {
//   i === 7 ? console.log('7 is my lucky number') : console.log('number ' + i);
// }

// Nest loops
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 1; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Loop through an array
const names = ['Brad', 'Sam', 'Jon', 'Tim'];

for (let i = 0; i < names.length; i++) {
  //   i === 1 ? console.log(names[1] + ' is the best') : console.log(names[i]);

  names[i] === 'Sam'
    ? console.log(names[i] + ' Rules!')
    : console.log(names[i]);
}
