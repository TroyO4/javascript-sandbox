const age = 17;

// Using if statement
if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('You cannot vote');
}

// Using a ternary operator
age >= 18 ? console.log('You can vote') : console.log('you cannot vote ;)');

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'Vote!' : 'No Vote Dummy!';

console.log(canVote2);

// Multiple statements
const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Acess Denied');
//   redirect = '/login';
// }

// const redirect = auth
//   ? (alert('Welcome to Dash'), '/dashboard')
//   : (alert('Acess Denied'), '/login');

// console.log(redirect);

// auth ? console.log('Welcome to dashboard') : null;

auth && console.log('Welcome to Dash');
