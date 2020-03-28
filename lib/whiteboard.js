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

  // if (deleteCount) {
  //   //removes 1 or multiple items from end
  //   //if how much you want to delete is greater than or equal to whats left in the array from start, just delete it all
  //   if (deleteCount >= originalArray.length - start) {
  //     //if there is stuff to be removed
  //     while (deleteCount) {
  //       originalArray.pop();
  //       --deleteCount;
  //     };
  //   };
  //   //removes 1 or multiple items from beginning or middle
  //   if (deleteCount < originalArray.length - start) {
  //     var newArraySubtract = [];
  //     for (let i = 0; i < originalArray.length; i++) {
  //       while (i < start) {
  //         newArraySubtract.push(originalArray[i]);
  //       }
  //       while (i > start && deleteCount) {
  //         --deleteCount;
  //         ++i;
  //       }
  //       newArraySubtract.push(originalArray[i-1]);
  //       }
  //     return newArraySubtract;
  //   }
  // }

  }

  let array = [1,2,3];
  array.splice() => [1,2,3]
  //calling splice with just start, will remove everything from start on to end
  array.splice(0) => []
  array.splice(1) => [1]
  array.splice(2) => [2,3]
  //if start >= length of array, return original array
  array.splice(3) => [1,2,3]
  array.splice(4) => [1,2,3]
