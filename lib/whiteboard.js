for (let i = 0; i < originalArray.length+itemsToAdd.length; ++i) {

  //when this here, the code doesnt work!!!!!!!!!!!!!
  // console.log(`newArray ${newArray}`);
  //if you haven't reached start yet, push items from original array into new array
  if (i < start) {
    newArray.push(originalArray[i]);
  }
  if (i == start) {
    //once i equals start, push items from itemsToAdd array into the newArray, until no more items left in itemsToAdd
    if (itemsToAdd) {
      for (let j = 0; j < itemsToAdd.length; ++j) {
        newArray.push(itemsToAdd[j]);
        //when this here, the code works!!!!!!!!!!!!!
          console.log(`newArray ${newArray}`);
      }
      //once you're done adding in all items from itemsToAdd array, then you want to add the item from the original array into the new array, before you go to next i
      // unless it was the last i, in which case there's nothing left from the original array to add
      //when this is added in, adding to end of array breaks, adding to middle works
      //when removed, adding to end of array works, adding to middle is broken
      if (i < originalArray.length) {
      newArray.push(originalArray[i]);
      //   break;
      }
      //this line is in effect the same as just going on to the next i, where you will break out of the for loop anyway, and return the array anyway
      // if (i >= originalArray.length) {
      //   return newArray;
      // }
      //this line breaks it when you add more than one item

    }
  }

  //once you're past the start, and until the end of the original array, push items from original array into new array
  //and only have to keep going when start is less than  to the length
  if (i > start && i < originalArray.length) {
    console.log('WHAT IS GOING ON');
    newArray.push(originalArray[i]);
  }
  }
  return newArray;
