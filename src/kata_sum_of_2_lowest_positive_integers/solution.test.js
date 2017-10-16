const expect = require('expect');

const {sumTwoSmallestNumbers, getMinimum, sumIntegers} = require('./solution.js');

describe('kata_sum_of_2_lowest_positive_integers', () => {
  describe('sumTwoSmallestNumbers function', () => {
    it('should return 13', () => {
      const list = [5, 8, 12, 19, 22];
      let result = sumTwoSmallestNumbers(list);
      expect(result).toBe(13);
    });

    it('should return 6', () => {
      const list = [15, 28, 4, 2, 43];
      let result  = sumTwoSmallestNumbers(list);
      expect(result).toBe(6);
    });
  });

  describe('getMinimum function', () => {
    it('should return 5', () => {
      const list = [5, 8, 12, 19, 22];
      let result  = getMinimum(list);
      expect(result).toBe(5);
    });
  });

  describe('sumIntegers function', () => {
    it('should return 13', () => {
      const a = 5;
      const b = 8;
      let result = sumIntegers(a, b);
      expect(result).toBe(13);
    });
  });
});
