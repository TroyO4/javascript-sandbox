const getCelsius = (F) => ((F - 32) * 5) / 9;
console.log(`The temperature is ${getCelsius(32)} \xB0C `);

const minMax = (arr) => {
  const Min = Math.min(...arr);
  const Max = Math.max(...arr);

  return { Min, Max };
};

console.log(minMax([1, 2, 3, 44, 5]));

(function area(length, width) {
  console.log(
    `The area of a rectangle with length ${length} 
and a width of ${width} is ${length * width}`
  );
})(5, 10);
