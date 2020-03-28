const spliceAdd = require('../lib/splice/add.js');

const assert = require('assert');

describe('testing module splice add', function() {
  describe('testing #arrayAdd', function() {
    it('should return [1,8,2,3]', function() {
      let result = spliceAdd.arrayAdd([1,2,3], 1, 0, 8);
      assert.deepStrictEqual(result, [1,8,2,3], 'was not [1,8,2,3]');
    })
  })
})

//ADDING
//ADDING SINGLES
// add 1 to middle
// console.log(`should return [1,8,2,3] ${add.arrayAdd(array1, 1, 0, 8)}`);
//
// // add 1 to beginning
// array1 = [1,2,3];
// console.log(`should return [8,1,2,3] ${add.arrayAdd(array1, 0, 0, 8)}`);
//
// //adding 1 to end
// array1 = [1,2,3];
// console.log(`should return [1,2,3,47] ${add.arrayAdd(array1, 3, 0, 47)}`);
//
// //ADDING MULTIPLES
// // add multiple to end
// array1 = [1,2,3];
// console.log(`should return [1,2,3,4,5] ${add.arrayAdd(array1, 3, 0, [4,5])}`)
//
// array1 = [1,2,3];
// console.log(`should return [1,2,3,4,5,6] ${add.arrayAdd(array1, 3, 0, [4,5,6])}`)
//
//add multiple to middle or beginning
// array1 = [1,2,3];
// console.log(`should return [1,4,5,6,2,3] ${add.arrayAdd(array1, 1, 0, [4,5,6])}`)
//
// array1 = [1,2,3]
// console.log(`should return [47,47,47,1,2,3] ${add.arrayAdd(array1, 0, 0, [47,47,47])}`);
//
