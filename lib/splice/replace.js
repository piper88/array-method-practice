'use strict';

const add = require('../splice/add.js');
const remove = require('../splice/remove.js');

module.exports = exports = {};

exports.arrayReplace = function(array, start, deleteCount, itemsToAdd) {
    let arrayAfterRemove = remove.removeItems(array, start, deleteCount, itemsToAdd);
    return add.arrayAdd(arrayAfterRemove, start, deleteCount, itemsToAdd);
};
