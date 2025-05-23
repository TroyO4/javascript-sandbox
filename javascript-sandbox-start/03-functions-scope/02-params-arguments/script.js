// Default Params
function registerUser(user = 'Bot') {
  return user + ' is registered';
}

console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id}
     is logged in`;
}

const user = {
  id: 1,
  name: 'Wolf Gang',
};

console.log(loginUser(user));

console.log(
  loginUser({
    id: 2,
    name: 'sara',
  })
);

// Arrays as params

function randomNum(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

console.log(randomNum([1, 2, 3, 4, 5]));
