/**
* Create a function that returns the sum of the two lowest positive numbers
* given an array of minimum 4 integers. No floats or empty arrays will be
* passed.
* For example, when an array is passed like [19,5,42,2,77], the output should be
* 7.
*
* [10,343445353,3453445,3453545353453] should return 3453455.
* Hint: Do not modify the original array.
*/

const sumTwoSmallestNumbers = numbers => {
  // get the 2 lowest integers
  let firstMin = getMinimum(numbers);

  let newArray = numbers.filter(item => item !== firstMin);
  let secondMin = getMinimum(newArray);

  // sum the integers
  let sum = sumIntegers(firstMin, secondMin);
  return sum;
};

// helper fns
const getMinimum = (numbers) => {
  // takes [] param, destructures and return min
  return Math.min(...numbers);
};

// takes 2 ints and sums
const sumIntegers = (a, b) => {
  return a + b;
};

module.exports = {
  sumTwoSmallestNumbers,
  getMinimum,
  sumIntegers
};
