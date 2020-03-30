'use strict';

const remove = require('./lib/splice/remove.js');
const easy = require('./lib/easy.js');
const add = require('./lib/splice/add.js');
const replace = require('./lib/splice/replace.js');

//if deleteCount > 0 and !itemsToAdd
  //removeArray
//if deleteCount = 0 and itemsToAdd
  //addArray
//if deleteCount > 0 and itemsToAdd
  //removeArray then addArray? but I think it's more complicated than that...blegh
