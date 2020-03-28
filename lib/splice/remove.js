'use strict';

module.exports = exports = {};

exports.removeItems = function(originalArray, start, deleteCount) {

    if (deleteCount <= 0) {
      return originalArray;
    }
    //if how much you want to delete is greater than or equal to whats left in the array from start, just delete it all
    if (deleteCount >= originalArray.length - start) {
      //if there is stuff to be removed
      while (deleteCount) {
        originalArray.pop();
        --deleteCount;
      };
    };
    //removes 1 or multiple items from beginning or middle, or end
      var newArraySubtract = [];
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
