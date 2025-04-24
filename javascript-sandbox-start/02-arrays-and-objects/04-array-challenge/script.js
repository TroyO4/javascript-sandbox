const arr = [1, 2, 3, 4, 5];

// arr.push(6);

// arr.reverse().push(0);

// console.log(arr);

const arr2 = [5, 6, 7, 8, 9, 10];
let x;
x = [...arr, ...arr2];
x.splice(5, 1);

console.log(x);
