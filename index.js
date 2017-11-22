'use strict';

function startsWith(string, target, startIndex) {
  startIndex = Math.max(startIndex, 0) || 0;
  /* eslint eqeqeq: off */
  return string.slice(startIndex, startIndex + target.length) == target;
}

module.exports = startsWith;
