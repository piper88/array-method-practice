'use strict';

module.exports = exports = {};

exports.removeItems = function(originalArray, start, deleteCount) {
  let newArraySubtract = [];

    if (deleteCount <= 0) {
      return originalArray;
    }
    //if how much you want to delete is greater than or equal to whats left in the array from start, or if deleteCount is omitted, just delete it all from start
    if (deleteCount >= originalArray.length - start || !deleteCount) {
      for (let i = 0; i < start; i++) {
        newArraySubtract.push(originalArray[i]);
      }
      return newArraySubtract;
    };
    //removes 1 or multiple items from beginning or middle, or end
      for (let i = 0; i < originalArray.length; ++i) {
        if (i < start) {
          newArraySubtract.push(originalArray[i]);
        }

        if (i == start) {
          while (deleteCount) {
            --deleteCount;
            ++i;
          }
        }

        if (i > start) {
          newArraySubtract.push(originalArray[i]);
        };
      };

    return newArraySubtract;
};
