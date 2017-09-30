const expect = require('expect');

const getCount = require('./solution.js');

describe('kata_vowel_count', () => {
  describe('getCount function', () => {
    it('should return int 4', () => {
      const result = getCount('Elle Belle');
      expect(result).toBe(4);
    });

    it('should return int 5', () => {
      const result = getCount('abracadabra');
      expect(result).toBe(5);
    });
  });
});
