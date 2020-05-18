/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  //
  // Это решение еле-еле по времени выполнения для длинных строк (7 сек),
  // надо искать более оптимальное решение
  //
  const result = [];
  const pMap = groupByToMap(p.split(''));

  for (let i = 0; i < s.length; i++) {
    const cur = s.slice(i, i + p.length)
    const curMap = groupByToMap(cur.split(''));

    if (eqMap(curMap, pMap)) {
      result.push(i);
    }
  }

  return result;

  function groupByToMap(arr) {
    const map = arr.reduce(function(result, ch) {
      let value = result.get(ch);
      if (value) value++; else value = 1;
      result.set(ch, value);
      return result;
    }, new Map());

    return map;
  };

  function eqMap(aMap, bMap) {
    if (aMap.size !== bMap.size) return false;
    for (let aEntry of aMap) {
      const bValue = bMap.get(aEntry[0]);
      if (!bValue || bValue !== aEntry[1]) return false;
    }
    return true;
  }
};

const result = findAnagrams('cbaebabacd', 'abc');
console.log(result);
