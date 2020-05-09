/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) return true;

  let k1 = 0;
  let k2 = num;
  while (k2 - k1 > 1) {
    let k = Math.floor((k2 + k1) / 2);
    const square = k * k;
    if (square > num) {
      k2 = k;
    } else if (square < num){
      k1 = k;
    } else {
      return true;
    }
  }

  return false;
};

const result = isPerfectSquare(100);
console.log(result);
