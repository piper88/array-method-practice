'use strict';

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
  //if omitted, or if it's value is equal to or greater than the number of items left in the array, starting at start, it will delete all items from start to the end of the array
  //if 0 or negative, no items will be removed (and ITEMn should be specified)
//ITEMn
  //if omitted, no items will be added

exports.arraySplice = function(originalArray, start, deleteCount, itemsToAdd) {

  // console.log(`deleteCount at very beginning ${deleteCount}`);
  var newArray = [];

  if (start > originalArray.length)
    start = originalArray.length;
  if (start < 0)
    start = originalArray.length + n;
  if (originalArray.length + start < 0)
    start = 0;

//if there aren't any items to add, assign it to empty array, so that the length is 0
  if (!itemsToAdd) {
    itemsToAdd = [];
  }

  if (typeof itemsToAdd === 'number') {
    var justOneItem = itemsToAdd;
    itemsToAdd = [];
    itemsToAdd.push(justOneItem);
  }

//if deletecount equals length of array, all items should be removed and empty array should be removed
  if (deleteCount == originalArray.length) {
    return [];
  }

  for (let i = 0; i < originalArray.length+itemsToAdd.length; ++i) {
    //if there are items to add

    //if you haven't reached start yet, push items from original array into new array
    if (i < start) {
      newArray.push(originalArray[i]);
    }
    if (i == start) {
      //once i equals start, push items from itemsToAdd array into the newArray, until no more items left in itemsToAdd
      if (itemsToAdd) {
        for (let j = 0; j < itemsToAdd.length; ++j) {
          newArray.push(itemsToAdd[j]);

        }
        //once you're done adding in all items from itemsToAdd array, and if you havent yet reached the end of the originalArray, then push the item from the current i into the newArray, and continue on to the next i.
        if (i < originalArray.length) {
        newArray.push(originalArray[i]);
        }

      }
    }

    //once you're past the start, and until the end of the original array, push items from original array into new array
    if (i > start && i < originalArray.length) {
      newArray.push(originalArray[i]);
    }

    //removes items from end
      if (deleteCount >= originalArray.length - start) {
        //if there is stuff to be removed
        while (deleteCount) {
          originalArray.pop();
          --deleteCount;
        };
      };
    //how to remove items if they're in the middle?
    }

  return newArray;
};
