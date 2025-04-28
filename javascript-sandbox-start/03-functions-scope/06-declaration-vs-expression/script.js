console.log(addPlusSign(200));
console.log(addDolarSign(100));
// Funtion declaration
function addDolarSign(value) {
  return '$' + value;
}

// Functin expression
const addPlusSign = function (value) {
  return '+' + value;
};
