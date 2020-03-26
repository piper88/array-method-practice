'use strict';

const remove = require('./lib/remove.js');
const easy = require('./lib/easy.js');
const harder = require('./lib/harder.js');

// let array1 = [1,2,3,4,5];
//
// console.log('are you there God, it\'s me Margaret');
//
// console.log(easy.arrayPush(array1, 2));
//
// // because arrayPush modifies original array, so have to reassign to original
// array1 = [1,2,3,4,5];
//
// console.log(`after second push ${easy.arrayPush(array1, 2)}`);
//
// array1 = [1,2,3,4,5];
//
// console.log(`after pop ${easy.arrayPop(array1)}`);
//
// array1 = [1,2,3,4,5];
//
// console.log(`after shift ${easy.arrayShift(array1)}`);
//
// array1 = [1,2,3,4,5];
//
// console.log(`after unshift ${easy.arrayUnshift(array1, 0)}`);
//
// array1 = [1,2,3,4,5];
//
// //should return 4
// console.log(`after indexOf ${easy.arrayIndexOf(array1, 5)}`)
//
// array1 = [1,2,3,4,5];
// console.log(`after indexOf with item not found ${easy.arrayIndexOf(array1, 12)}`);

let array1 = [1,2,3];
// exports.arraySplice = function(originalArray, start, removeCount, itemsToAdd)

//REPLACING
//I think replacing is just done by removing and then adding

//ADDING
//ADDING SINGLES
// add 1 to middle
// console.log(`should return [1,8,2,3] ${harder.arraySplice(array1, 1, 0, 8)}`);
//
// // add 1 to beginning
// array1 = [1,2,3];
// console.log(`should return [8,1,2,3] ${harder.arraySplice(array1, 0, 0, 8)}`);
//
// //adding 1 to end
// array1 = [1,2,3];
// console.log(`should return [1,2,3,47] ${harder.arraySplice(array1, 3, 0, 47)}`);
//
// //ADDING MULTIPLES
// // add multiple to end
// array1 = [1,2,3];
// console.log(`should return [1,2,3,4,5] ${harder.arraySplice(array1, 3, 0, [4,5])}`)
//
// array1 = [1,2,3];
// console.log(`should return [1,2,3,4,5,6] ${harder.arraySplice(array1, 3, 0, [4,5,6])}`)
//
//add multiple to middle or beginning
array1 = [1,2,3];
console.log(`should return [1,4,5,6,2,3] ${harder.arraySplice(array1, 1, 0, [4,5,6])}`)

array1 = [1,2,3]
console.log(`should return [47,47,47,1,2,3] ${harder.arraySplice(array1, 0, 0, [47,47,47])}`);


// remove multiple from end
array1 = [1,2,3];
console.log(`should return [1] ${remove.removeItems(array1, 2, 2)}`);

//removes one from end
array1 = [1,2,3];
console.log(`should return [1,2] ${remove.removeItems(array1, 2, 1)}`)

//remove 2 from beginning
array1 = [1,2,3];
console.log(`should return [3] ${remove.removeItems(array1, 0, 2)}`)

//remove 1 from middle
array1 = [1,2,3];
console.log(`should return [1,3] ${remove.removeItems(array1, 1, 1)}`)


// remove all items
array1 = [1,2,3];
console.log(`should return [] ${remove.removeItems(array1, 2, 3)}`);

// with negative removeCount
array1 = [1,2,3];
console.log(`should return [1,2,3] ${remove.removeItems(array1, 2, -1)}`);

//with removeCount of 0
console.log(`should return [1,2,3] ${remove.removeItems(array1, 2, 0)}`);
