/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const sIn = num.toString(2);

  const sOut = sIn
    .split('')
    .map((ch) => (ch === '0' ? '1' : '0'))
    .join('');

  return parseInt(sOut, 2);
};

const result = findComplement(5);
console.log(result);
