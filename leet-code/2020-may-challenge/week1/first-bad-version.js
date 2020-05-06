/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 *
 * var isBadVersion = function (version) {
 *     return version === 4;
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let n1 = 1;
    let n2 = n;
    let k = 0;

    while (true) {
      if (n2 - n1 <= 1) {
        if (isBadVersion(n1)) {
          return n1;
        } else if (isBadVersion(n2)) {
          return n2;
        } else {
          throw new Error('Wrong arguments');
        }
      };

      k = Math.ceil((n1 + n2) / 2);

      if (isBadVersion(k)) {
        n2 = k;
      } else {
        n1 = k;
      }
    }
  };
};

const result = solution((v) => v >= 4)(5);
console.log(result);
