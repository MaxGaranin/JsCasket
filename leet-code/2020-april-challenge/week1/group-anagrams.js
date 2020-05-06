/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  function calculateCharCodeSum(str) {
    let sum = 0;
    let xor = 0;
    for (var i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      sum = sum + code;
      xor = xor ^ code;
    }
    return sum * xor;
  }

  const map = new Map();

  strs.forEach(str => {
    const sum = calculateCharCodeSum(str);
    const wordsArr = map.get(sum);
    if (wordsArr) {
      wordsArr.push(str);
    } else {
      map.set(sum, [str]);
    }
  });

  const result = [...map.values()];
  return result;
};

// const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
const result = groupAnagrams(["tao","pit","cam","aid","pro","dog"]);
console.log(result);
