// console.log(10 > 20 && 30 > 15 && 40 > 30);
console.log(10 > 20 || 30 > 15);

// && - Will return the first falsy value or the last value
let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 20 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['post one', 'post two'];

posts.length > 0 && console.log(posts[0]);

// || - wil return the first truthy value or the last value

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - Returns the right side operand when the left is either null or undefined

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 20;
c = 0 ?? 20;
c = '' ?? 20;

console.log(c);
