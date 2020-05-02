/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let counter = 0;
  const stones = S.split('');
  const jewels = new Set(J.split(''));
  stones.forEach(stone => {
      if (jewels.has(stone)) {
          counter++;
      };
  });

  return counter;
};
