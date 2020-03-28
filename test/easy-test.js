const easy = require('../lib/easy.js');

const assert = require('assert');

//describe testing module
//describe testing method of module
//it
  //let result = call method
  //assert.ok(result == 'was what we expected', 'was not what we expected')

  describe('testing module easy', function() {
    describe('testing #arrayPush', function() {
      it('should return [1,2,3,4]', function() {
        let result = easy.arrayPush([1,2,3], 4);
        //deepStrictEqual checks if operands are semantically equal
        assert.deepStrictEqual(result, [1,2,3,4], 'was not [1,2,3,4]');
        //whereas assert.ok (aka assert.equal checks to see if the operands refer to the same object, hence while assert.ok was failing)
        // assert.ok(result == '1,2,3,4', 'was not 1,2,3,4');
      })
      it('should return [1,2,3,4,5]', function() {
        let result = easy.arrayPush([1,2,3], [4,5]);
        assert.deepStrictEqual(result, [1,2,3,4,5], 'was not [1,2,3,4,5]');
      });
    })

    describe('testing #arrayPop', function() {
      it('should return [1,2,3]', function() {
        let result = easy.arrayPop([1,2,3,4]);
        assert.deepStrictEqual(result, [1,2,3], 'was not 1,2,3');
      })
    })
    describe('testing #arrayShift', function() {
      it('should return [2,3,4]', function() {
        let result = easy.arrayShift([1,2,3,4]);
        assert.deepStrictEqual(result, [2,3,4], 'was not 2,3,4');
      })
    })
    describe('testing #arrayUnshift', function() {
      it('should return [0,1,2,3,4]', function() {
        let result = easy.arrayUnshift([1,2,3,4], 0);
        assert.deepStrictEqual(result, [0,1,2,3,4], 'was not 0,1,2,3,4');
      })
    })

    describe('testing #arrayIndexOf', function() {
      it('should return 0', function() {
        let result = easy.arrayIndexOf([1,2,3,4], 1);
        assert.deepStrictEqual(result, 0, 'was not 0')
      })
    })
  });


// let array1 = [1,2,3,4,5];
//
// console.log('are you there God, it\'s me Margaret');
//
// console.log(easy.arrayPush(array1, 2));
//
// // because arrayPush modifies original array, so have to reassign to original
// array1 = [1,2,3,4,5];
//
// console.log(`after second push ${easy.arrayPush(array1, 2)}`);
//
// array1 = [1,2,3,4,5];
//
// console.log(`after pop ${easy.arrayPop(array1)}`);
//
// array1 = [1,2,3,4,5];
//
// console.log(`after shift ${easy.arrayShift(array1)}`);
//
// array1 = [1,2,3,4,5];
//
// console.log(`after unshift ${easy.arrayUnshift(array1, 0)}`);
//
// array1 = [1,2,3,4,5];
//
// //should return 4
// console.log(`after indexOf ${easy.arrayIndexOf(array1, 5)}`)
//
// array1 = [1,2,3,4,5];
// console.log(`after indexOf with item not found ${easy.arrayIndexOf(array1, 12)}`);
