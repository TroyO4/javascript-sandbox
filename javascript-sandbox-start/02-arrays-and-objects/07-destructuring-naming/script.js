let x;

const firstName = 'John';
const lastName = 'Doe';
const age = '30';

const person = {
  firstName,
  lastName,
  age,
};

// console.log(person.age);

// Destructuring

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'john',
  },
};

const {
  id: toDoId,
  title,
  user: { name },
} = todo;

console.log(toDoId);

// Destructure Arrays
const numbers = [23, 345, 34, 22, 52, 22];

const [first, second, ...rest] = numbers;

console.log(todo);
