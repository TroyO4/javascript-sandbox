console.log(100);

console.log('hello world');

console.log(20, 'hello', true);

const x = 100;

console.log(x);

console.error('alert');

console.warn('loud');

console.table({ name: 'Brad', email: 'brag@gmail.com' });

console.group('simple');
console.log(x);
console.error('alert');
console.warn('loud');
console.groupEnd();

const styles = 'padding: 10px; background-color: white; color: green';

console.log('%chello World', styles);
