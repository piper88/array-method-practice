'use strict';

module.exports = exports = {};

console.log('easy.js running');

//[1,2,3,4,5] => [1,2,3,4,5,6]

exports.arrayPush = function(array, itemToAdd) {
  array[array.length] = itemToAdd;
  return array;
}

//[1,2,3], length = 3

exports.arrayPop = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length-1; ++i) {
    newArray.push(array[i]);
  }
  return newArray;
}
