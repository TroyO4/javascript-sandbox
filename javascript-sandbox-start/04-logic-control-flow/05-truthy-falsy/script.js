const x = ' ';

if (x) {
  console.log('this is truthy');
} else {
  console.log('this is falsy');
}

console.log(Boolean(x));

// Truthy and falsy caveats
const children = 3;

if (!isNaN(children)) {
  console.log(`You have ${children} children`);
} else {
  console.log('Please enter number if children');
}

// Checking for empty arrays

const posts = [];

if (posts.length > 0) {
  console.log('List Posts');
} else {
  console.log('No Posts to List');
}

// Checking for empty objects

const user = {};

if (Object.keys(user).length > 0) {
  console.log('List user');
} else {
  console.log('no user ');
}

// Loose Equality (==)
console.log(false === 0);
console.log('' == 0);
console.log(null === undefined);
