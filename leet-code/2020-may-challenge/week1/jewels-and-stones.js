/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  const stones = S.split('');
  const map = new Map();
  stones.forEach(stone => {
      let k = map.get(stone);
      if (!k) k = 0;
      map.set(stone, ++k);
  });

  let counter = 0;

  const jewels = J.split('');
  jewels.forEach(jewel => {
      const k = map.get(jewel);
      if (k) {
          counter += k;
      };
  });

  return counter;
};

const result = numJewelsInStones("aA", "aAAbbbb");
console.log(result);
