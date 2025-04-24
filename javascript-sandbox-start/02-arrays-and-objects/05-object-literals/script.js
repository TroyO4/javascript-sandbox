let x;

const person = {
  name: 'John Doe',
  age: 30,
  isADmin: true,
  adress: {
    street: '123 Main st',
    city: 'Boston',
    state: 'MA',
  },
  hobbies: ['music', 'sports'],
};

x = person.name;
x = person['name'];
x = person.adress.state;
x = person.hobbies[0];

person.name = 'jane doe';
person['isADmin'] = 'false';

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`Hello my name is ${this.name}`);
};

person.greet();

const person2 = {
  'first name': 'Brad',
  'last name': 'Traversy',
};

x = person2['first name'];
console.log(x);
