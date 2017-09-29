const expect = require('expect');

const greet = require('../kata_welcome/solution.js');

it('should return "Welcome"', () => {
  let result = greet('english');
  expect(result).toBe('Welcome');
});

it('should return "Welkom"', () => {
  let result = greet('dutch');

  expect(result).toBe('Welkom');
});

it('should return "Welcome"', () => {
  let result = greet('IP_ADDRESS_INVALID');
  expect(result).toBe('Welcome');
});
