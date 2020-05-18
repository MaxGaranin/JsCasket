/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  //
  // Это решение не прошло по времени выполнения для длинных строк,
  // хотя в задаче Group Anagrams оно сработало
  //
  const result = [];
  const pSort = p.split('').sort().join('');

  for (let i = 0; i < s.length; i++) {
    const curSort = s
      .slice(i, i + p.length)
      .split('')
      .sort()
      .join('');

    if (curSort === pSort) {
      result.push(i);
    }
  }

  return result;
};

const result = findAnagrams('cbaebabacd', 'abc');
console.log(result);
