'use strict';

module.exports = exports = {};

//[1,2,3,4,5] => [1,2,3,4,5,6]

exports.arrayPush = function(array, itemsToAdd) {
  if (typeof itemsToAdd == 'number') {
    array[array.length] = itemsToAdd;
    return array;
  }
  for (let i = 0; i < itemsToAdd.length; ++i) {
    array[array.length] = itemsToAdd[i];
  };
  return array;
};


//[1,2,3], length = 3

exports.arrayPop = function(array) {
  let newArray = [];
  for (let i = 0; i < array.length-1; ++i) {
    newArray.push(array[i]);
  }
  return newArray;
}

//shift -- remove first item from array

exports.arrayShift = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; ++i) {
    newArray.push(array[i]);
  }
  return newArray;
}

//unshift -- add to the front of the array1
//array[0] = newArray[1]
//[1,2,3,4] => [0,1,2,3,4]
exports.arrayUnshift = function(array, itemToAdd) {
    let newArray = [];
    newArray[0] = itemToAdd
    for (let i = 0; i < array.length; ++i) {
      newArray[i+1] = array[i];
    }
    return newArray;
}

//indexOf -- returns the index of an item
exports.arrayIndexOf = function(array, itemToFind) {
  if (!itemToFind)
    throw new Error('item not found');
  for (let i = 0; i < array.length; ++i) {
    if (array[i] == itemToFind)
      return i;
  }
}
