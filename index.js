'use strict';

const remove = require('./lib/splice/remove.js');
const easy = require('./lib/easy.js');
const add = require('./lib/splice/add.js');
const replace = require('./lib/splice/replace.js');


let array1 = [1,2,3];

//REPLACING
//I think replacing is just done by removing and then adding

//if deleteCount > 0 and !itemsToAdd
  //removeArray
//if deleteCount = 0 and itemsToAdd
  //addArray
//if deleteCount > 0 and itemsToAdd
  //removeArray then addArray? but I think it's more complicated than that...blegh

//REPLACE CHECKS
console.log(`should return [1,8,3] ${replace.arrayReplace(array1, 1, 1, 8)}`)
array1 = [1,2,3];

console.log(`should return [8,10,2,3] ${replace.arrayReplace(array1, 0, 1, [8,10])}`)

array1 = [1,2,3];
console.log(`should return [1] ${remove.removeItems(array1, 1, 3)}`);
