/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = s.split('').reduce((acc, token) => {
    let count = acc.get(token);
    if (!count) count = 0;
    count++;
    acc.set(token, count);
    return acc;
  }, new Map());

  const uniques = [];
  const counts = [];
  map.forEach((value, key) => {
    if (!counts[value]) {
      uniques.push(value);
      counts[value] = [];
    }
    counts[value].push(key);
  });

  uniques.sort((a, b) => b - a);

  let result = '';
  uniques.forEach((uniqueCount) => {
    counts[uniqueCount].forEach((token) => {
      result += token.repeat(uniqueCount);
    });
  });

  return result;
};

let result = frequencySort('tree');
console.log(result);

result = frequencySort('cccaaa');
console.log(result);

result = frequencySort('Aabb');
console.log(result);
