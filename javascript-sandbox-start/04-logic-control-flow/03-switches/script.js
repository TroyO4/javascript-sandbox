const d = new Date(2022, 1, 10, 15, 0, 0);

const month = d.getMonth();
const hour = d.getHours();

switch (month) {
  case 1:
    console.log('It is January');
    break;
  case 2:
    console.log('It is February');
    break;
  case 3:
    console.log('It is March');
    break;
  default:
    console.log('It is not January, February, or March');
}

switch (true) {
  case hour < 12:
    console.log('good morning');
    break;
  case hour < 18:
    console.log('good afternoon');
    break;
  case hour > 18:
    console.log('goodnight');
}
