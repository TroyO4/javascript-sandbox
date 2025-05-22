const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubledNumbers = numbers.map((number) => 'number ' + number * 3);

// console.log(doubledNumbers);

// // Same with for each
// const doubleNumbers2 = [];
// numbers.forEach((number) => doubleNumbers2.push(number * 2));
// console.log(doubleNumbers2);

const companies = [
  { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
  { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
  { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
  { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
  { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
  { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
  { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
  { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
  { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
];

// // Create an array of company names
// const names = companies.map((company) => company.name);

// console.log(names);

// // Create an array with just company and category
// const comCat = companies.map(
//   (company) => `${company.name}: ${company.category}`
// );

// console.log(comCat);

// Create an array of the length of each company in years
const lengthY = companies.map((company) => company.end - company.start);

console.log(lengthY);

// // Create an array of objects with the name and the length of the company in years
// const nameY = companies.map((company) => {
//   return {
//     name: company.name,
//     years: company.end - company.start,
//   };
// });

// console.log(nameY);

// Chain map Methods
const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqaroot) => sqaroot * 2);

// long version of chain map
const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqaroot) {
    return sqaroot * 2;
  })
  .map(function (sqarootDoubled) {
    return sqarootDoubled * 3;
  });

console.log(squareAndDouble2);

// chaining different methods
const evenDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDouble);
