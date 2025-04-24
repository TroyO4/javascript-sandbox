let x;

// Arry Literal
const numbers = [1, 2, 3, 4, 5, 7, 8];

//Array Constructor
const fruits = new Array('apple', 'grapes', 'orange');

x = numbers[2];

x = numbers[0] + numbers[3];

x = `My Favorite fruit is ${fruits[2]} ${fruits[1]}`;

x = numbers.length;

fruits[2] = 'pear';

//fruits.length = 1;

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry;';
fruits[fruits.length] = 'pineappple;';

x = fruits;

console.log(x);
