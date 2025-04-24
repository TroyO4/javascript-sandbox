let x;

const name = 'Troy';
const age = 22;

x = 'hello, my name is ' + name + ' and I am ' + age + ' and i love it';

// Template literals
x = `Hello, my name is ${name} and I am ${age} years old`;

// String properties and methods
const s = 'Hello World';

x = s.length;

x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('e');

x = s.substring(1, 8);

/*
//x = s.slice(-11, 3);
x = s.trim();

x = s.replace('World', 'yo');

x = s.includes('r');

x = s.valueOf();

x = s.split('W');

*/
console.log(x);
