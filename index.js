'use strict';

const remove = require('./lib/splice/remove.js');
const easy = require('./lib/easy.js');
const add = require('./lib/splice/add.js');


let array1 = [1,2,3];

// //adding 1 to end
array1 = [1,2,3];
console.log(`should return [1,2,3,47] ${add.arrayAdd(array1, 3, 0, 47)}`);
// exports.arrayAdd = function(originalArray, start, removeCount, itemsToAdd)

// console.log(`should return [1,2,3,5] ${easy.arrayPush(array1, 5)}`);
//
// console.log(`should return [1,2,3,4,5] ${easy.arrayPush(array1, [4,5])}`);

// array1 = [1,2,3];
//
// function blegh (array) {
//   console.log(`array ${Array.isArray(array)}`);
// };
//
// //when you return an array from a function, or print an array from within a function, it seems to remove the []
//
// blegh(array1);

//REPLACING
//I think replacing is just done by removing and then adding

// // remove multiple from end
// array1 = [1,2,3];
// console.log(`should return [1] ${remove.removeItems(array1, 2, 2)}`);
//
// //removes one from end
// array1 = [1,2,3];
// console.log(`should return [1,2] ${remove.removeItems(array1, 2, 1)}`)
//
// //remove 2 from beginning
// array1 = [1,2,3];
// console.log(`should return [3] ${remove.removeItems(array1, 0, 2)}`)
//
// //remove 1 from middle
// array1 = [1,2,3];
// console.log(`should return [1,3] ${remove.removeItems(array1, 1, 1)}`)
//
//
// // remove all items
// array1 = [1,2,3];
// console.log(`should return [] ${remove.removeItems(array1, 2, 3)}`);
//
// // with negative removeCount
// array1 = [1,2,3];
// console.log(`should return [1,2,3] ${remove.removeItems(array1, 2, -1)}`);
//
// //with removeCount of 0
// console.log(`should return [1,2,3] ${remove.removeItems(array1, 2, 0)}`);
