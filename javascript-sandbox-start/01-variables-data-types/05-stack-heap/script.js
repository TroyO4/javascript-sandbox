// values stored on stack
const name = 'john';
const age = 30;

// reference values stored on heap
const person = {
  name: 'Troy',
  age: 22,
};

let newName = name;
newName = 'troyboy';

let newPerson = person;
newPerson.name = 'Wolf';

console.log(name, newName);
console.log(person, newPerson);
