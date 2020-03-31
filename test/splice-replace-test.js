'use strict';

const replace = require('../lib/splice/replace.js');
const assert = require('assert');

describe('testing module replace', function() {
  describe('testing #arrayReplace', function() {
    //replace items in middle of array
    it('should return [1,8,3]', function() {
      let result = replace.arrayReplace([1,2,3], 1, 1, 8);
      assert.deepStrictEqual(result, [1,8,3], 'was not [1,8,3]');
    })
    //replace items at beginning of array
    it('should return [8,10,2,3]', function() {
      let result = replace.arrayReplace([1,2,3], 0, 1, [8,10]);
      assert.deepStrictEqual(result, [8,10,2,3], 'was not [8,10,2,3]');
    })
    //replace all items
    it('should return ["carol", "baskin", "is", "too"]', function() {
      let result = replace.arrayReplace(['nick', 'is', 'too'], 0, 4, ['carol', 'baskin', 'is', 'too']);
      assert.deepStrictEqual(result, ['carol', 'baskin', 'is', 'too'], 'was not "carol baskin is too"' );
    })
  })
})
