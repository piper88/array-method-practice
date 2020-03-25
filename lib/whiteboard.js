([1,2,3], 1, 0, 8) => [1,2,8,3];

//first pass
i = 1
j = 0
originalArray[1] = itemsToAdd[0]
originalArray[1] = 8
originalArray = [1,8,3]
originalArray[1] = originalArray[1]
//while i < start, keep items the same
//at start - 1, item should be temp variable
//
//have to somehow store originalArray[1] before you change it, then add item to add, then stick it back in

//store originalArray[i] in a temp variable
// then set originalArray[i] = itemTo Add[j]
//then set originalArray[i] to temp variable

originalArray[i] = originalArray[i++]


//create new array
//loop through old array
//as long as i is less than start, push items of old array into new array
//when i = start, push item to add in new array
//then as long as i < oldarray length + itemsToAdd length, push items from old array into new array
