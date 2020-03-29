const spliceAdd = require('../lib/splice/add.js');

const assert = require('assert');

describe('testing module splice add', function() {
  describe('testing #arrayAdd', function() {
    it('should return [1,8,2,3]', function() {
      //add one to middle
      let result = spliceAdd.arrayAdd([1,2,3], 1, 0, 8);
      assert.deepStrictEqual(result, [1,8,2,3], 'was not [1,8,2,3]');
    })
    //add one to beginning
    it('should return [8,1,2,3]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], 0, 0, 8);
      assert.deepStrictEqual(result, [8,1,2,3], 'was not [8,1,2,3]');
    })
    //add one to end
    it('should return [1,2,3,47]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], 3, 0, 47);
      assert.deepStrictEqual(result, [1,2,3,47], 'was not [1,2,3,47]');
    })
    //add multiple to end
    it('should return [1,2,3,4,5]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], 3, 0, [4,5]);
      assert.deepStrictEqual(result, [1,2,3,4,5], 'was not [1,2,3,4,5]');
    })
    it('should return [1,2,3,4,5]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], 5, 0, [4,5]);
      assert.deepStrictEqual(result, [1,2,3,4,5], 'was not [1,2,3,4,5]');
    })
    //add multiple to beginning or middle
    it('should return [1,4,5,6,2,3]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], 1, 0, [4,5,6]);
      assert.deepStrictEqual(result, [1,4,5,6,2,3], 'was not [1,4,5,6,2,3]');
    })
    it('should return [1,4,5,6,2,3]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], 0, 0, [4,5,6]);
      assert.deepStrictEqual(result, [4,5,6,1,2,3], 'was not [4,5,6,1,2,3]');
    })
    //when start is negative
    it('should return [1,2,4,3]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], -1, 0, 4);
      assert.deepStrictEqual(result, [1,2,4,3], 'was not [1,2,4,3]');
    })
    //when start is greater than length
    it('should return [1,2,3,4]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], 100, 0, 4);
      assert.deepStrictEqual(result, [1,2,3,4], 'was not [1,2,3,4]');
    })
    //if length + start is less than 0
    it('should return [47,1,2,3]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], -12, 0, 47);
      assert.deepStrictEqual(result, [47,1,2,3], 'was not [47,1,2,3]');
    })
  })
})

//ADDING
//ADDING SINGLES

//
// //ADDING MULTIPLES

//add multiple to middle or beginning
// array1 = [1,2,3];
// console.log(`should return [1,4,5,6,2,3] ${add.arrayAdd(array1, 1, 0, [4,5,6])}`)
//
// array1 = [1,2,3]
// console.log(`should return [47,47,47,1,2,3] ${add.arrayAdd(array1, 0, 0, [47,47,47])}`);
//
