const expect = require('expect');

const number = require('./solution.js');

// Test.assertEquals(number([[10,0],[3,5],[5,8]]),5);
// Test.assertEquals(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
// Test.assertEquals(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);

describe('kata_number_of_people-in_the_bus', () => {
  describe('number function', () => {
    it('should return int 5', () => {
      const list = [[10,0], [3,5], [5,8]]
      let result = number(list);
      expect(result).toBe(5);
    });

    it('should return int 17', () => {
      const result = number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]);
      expect(result).toBe(17);
    });
  });
});
