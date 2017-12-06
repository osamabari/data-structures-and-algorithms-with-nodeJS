'use strict';

module.exports = {
  sort: function(array) {
    return Array.prototype.sort.call(array, function(a, b) { return a - b; });
  }
};
