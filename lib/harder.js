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


  if (start > originalArray.length)
    start = originalArray.length;
  if (start < 0)
    start = originalArray.length + n;
  if (originalArray.length + start < 0)
    start = 0;
  //checking and setting deleteCount
  if (deleteCount >= originalArray.length - start) {
    deleteCount = originalArray.length - start;
  }
  //don't know if this is necessary
  if (deleteCount <= 0) {
    deleteCount = null;
  }

  //checking items to be added
  //also don't know if this is necessary
  if (itemsToAdd.length == 0)
    itemsToAdd = null;

var newArray = [];
  for (let i = 0; i < originalArray.length+1; ++i) {
    // console.log(`looping through originalArray ${i} times`);
    //if there are items to add
    if (typeof itemsToAdd === 'number') {
      var justOneItem = itemsToAdd;
      itemsToAdd = [];
      itemsToAdd.push(justOneItem);
    }


    if (i <= start) {
      newArray.push(originalArray[i]);
    }
    if (i == start+1) {
      //once i equals start+1, push items from itemsToAdd array into the newArray, until no more items left in itemsToAdd
      for (let j = 0; j < itemsToAdd.length; ++j) {
        newArray.push(itemsToAdd[j]);
      }

    }

    if (i > start && i < originalArray.length) {
      newArray.push(originalArray[i]);
    }

    if (deleteCount) {
      //if there is stuff to be removed
      originalArray[i] = null;
      --deleteCount;
    }
  }

  return newArray;
};