/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const calculate = number => {
    const result = number
      .toString()
      .split('')
      .reduce((acc, digit) => (acc = acc + (+digit) ** 2), 0);

    return result;
  };

  const set = new Set();

  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = calculate(n);
  }

  return n === 1;
};

console.log(isHappy(123));

