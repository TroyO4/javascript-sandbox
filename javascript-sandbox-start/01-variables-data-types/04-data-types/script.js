// string
const firstName = 'Sara';

//number
const age = 30;
const temperature = 98.2;

//boolean
const hasKids = true;

//null
const aptNumber = null;

//undefined
let score;
const scoreU = undefined;

//symbol
const id = Symbol('id');

//BigInt
const n = 909320902389492738927n;

//refersnce types
const numbers = [1, 2, 3, 4];
const person = {
  name: 'brad',
};

function sayHello() {
  console.log('Hello');
}
const output = sayHello;
console.log(output, typeof output);
