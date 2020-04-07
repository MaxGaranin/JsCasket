/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = new Map();

  strs.forEach(str => {
    const sortedStr = str.split('').sort().join('');
    const wordsArr = map.get(sortedStr);
    if (wordsArr) {
      wordsArr.push(str);
    } else {
      map.set(sortedStr, [str]);
    }
  });

  const result = [...map.values()];
  return result;
};

const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
// const result = groupAnagrams(["tao","pit","cam","aid","pro","dog"]);
console.log(result);
