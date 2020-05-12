/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  if (trust.length === 0) return 1;
  
  const map = new Map();
  const set = new Set();

  trust.forEach((pair) => {
    const a = pair[0];
    const b = pair[1];
    let count = map.get(b);
    if (!count) count = 0;
    count++;
    map.set(b, count);
    set.add(a);
  });

  for (const entry of map) {
    if (entry[1] === N - 1 && !set.has(entry[0])) return entry[0];
  }

  return -1;
};

let result = findJudge(2, [[1, 2]]);
console.log(result);
