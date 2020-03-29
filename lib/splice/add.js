'use strict';

module.exports = exports = {};

//adds or removes items from an array
//changes the original array
//array.splice(START: index at which to start altering the array(required), DELETE COUNT: the number of items to remove(optional), ITEM1,ITEM2...:the items to be added(optional));
//will return an array of the removed items
//if no items are removed, an empty array is returned
//START
  //if greater than the length of the array, start will be set to the length of the array
  //if negative, it will begin that many elements from the end of the array, -1 will begin at second to last element of array. if start is -n, start will be equal array.length - n
  //if array.length + start is less than 0, it will begin at index 0. So if array.length is 3, and start is given as -4, will just begin at index 0
//DELETE COUNT
  //if omitted, or if it's value is equal to or greater than the number of items left in the array, starting at start (so length - start), it will delete all items from start to the end of the array
  //if 0 or negative, no items will be removed (and ITEMn should be specified)
//ITEMn
  //if omitted, no items will be added

  exports.arraySplice = function(originalArray, start, deleteCount, itemsToAdd) {
    //if there's no deleteCount and there is itemsToAdd
      //just call arrayAdd
    //if there's deleteCount and no itemsToAdd
      //just call arrayRemove
    //if there's neither a deleteCount or itemsToAdd or start
      //return original Array

    //if there's both a deleteCount and itemsToAdd
      //call both arrayAdd and arrayRemove
      //first you want to remove, and then you want to add?
  };

exports.arrayAdd = function(originalArray, start, deleteCount, itemsToAdd) {

  //declare new array
  let newArrayAdd = [];

  if (start > originalArray.length)
    start = originalArray.length;
  if (start < 0)
    start = originalArray.length + start;
  if (originalArray.length + start < 0)
    start = 0;

//if there aren't any items to add, assign it to empty array, so that the length is 0
  if (!itemsToAdd) {
    return originalArray;
    //itemsToAdd = [];
  }

//if only one item to add,
  if (typeof itemsToAdd === 'number' || typeof itemsToAdd === 'string') {
    //store item to add in new variable
    let justOneItem = itemsToAdd;
    //assing itemsToAd to empty array
    itemsToAdd = [];
    //push item into itemsToAdd;
    itemsToAdd.push(justOneItem);

  }

  for (let i = 0; i < originalArray.length+itemsToAdd.length; ++i) {

    //if you haven't reached start yet, push items from original array into new array
    if (i < start) {
      newArrayAdd.push(originalArray[i]);
    }
    //once i equals start, push items from itemsToAdd array into the newArrayAdd, until no more items left in itemsToAdd
    if (i == start) {
      if (itemsToAdd) {
        for (let j = 0; j < itemsToAdd.length; ++j) {
          newArrayAdd.push(itemsToAdd[j]);

        }
        //once you're done adding in all items from itemsToAdd array, and if you havent yet reached the end of the originalArray, then push the item from the current i into the newArrayAdd, and continue on to the next i.
        if (i < originalArray.length) {
        newArrayAdd.push(originalArray[i]);
        }
      }
    }

    //once you're past the start, and until the end of the original array, push items from original array into new array
    if (i > start && i < originalArray.length) {
      newArrayAdd.push(originalArray[i]);
    }
};
return newArrayAdd;
};
