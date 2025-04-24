let x;

const arr = [34, 55, 55, 33, 1324];

// arr.push(11);

// arr.pop();

// arr.unshift(55);

// arr.shift(55);

// arr.reverse();

x = arr.includes(33);

x = arr.indexOf(33);

// x = arr.slice(1, 4);

// x = arr.splice(1, 3);

// x = arr.splice(1, 2);

x = arr.splice(1, 4).reverse().toString().charAt(2);

console.log(x, arr);
