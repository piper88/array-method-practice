const spliceRemove = require('../lib/splice/remove.js');

const assert = require('assert');

describe('testing module splice remove', function() {
  describe('testing removeItems', function() {
    //remove multiple from end
    it('should return [1]', function() {
      let result = spliceRemove.removeItems([1,2,3], 2, 2);
      assert.deepStrictEqual(result, [1,2], 'was not [1]');
    })
    //remove one from end
    it('should return [1,2]', function() {
      let result = spliceRemove.removeItems([1,2,3], 2, 1);
      assert.deepStrictEqual(result, [1,2,], 'was not [1,2]');
    })
    //remove 2 from beginning
    it('should return [3]', function() {
      let result = spliceRemove.removeItems([1,2,3], 0, 2);
      assert.deepStrictEqual(result, [3], 'was not [3]');
    })
    //remove 1 from middle
    it('should return [1,3]', function() {
      let result = spliceRemove.removeItems([1,2,3], 1, 1);
      assert.deepStrictEqual(result, [1,3], 'was not [1,3]');
    })
    //remove multiple from middle
    it('should return [1,4]', function() {
      let result = spliceRemove.removeItems([1,2,3,4], 1, 2);
      assert.deepStrictEqual(result, [1,4], 'was not [1,4]');
    })
    //when length - start is greater than delete count
    it('should return [1]', function() {
      let result = spliceRemove.removeItems([1,2,3], 1, 1000);
      assert.deepStrictEqual(result, [1], 'was not [1]');
    })
    //when deleteCount is omitted
    it('should return [1,2,3,4]', function() {
      let result = spliceRemove.removeItems([1,2,3,4,5], 4);
      assert.deepStrictEqual(result, [1,2,3,4], 'was not [1,2,3,4]');
    })
    //when deleteCount is negative
    it('should return [1,2,3]', function() {
      let result = spliceRemove.removeItems([1,2,3], 0 , -1);
      assert.deepStrictEqual(result, [1,2,3], 'was not [1,2,3]');
    })
    //when deleteCount is 0
    it('should return [1,2,3]', function() {
      let result = spliceRemove.removeItems([1,2,3], 1, 0);
      assert.deepStrictEqual(result, [1,2,3], 'was not [1,2,3]');
    })
    //when deleteCount is negative and start is greater than length of array
    it ('should return [47,48,49]', function() {
      let result = spliceRemove.removeItems([47,48,49], 1000000, -1000000);
      assert.deepStrictEqual(result, [47,48,49], 'was not [47,48,49]');
    });
  });
});
