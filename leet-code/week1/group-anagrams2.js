/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const anagramsMap = new Map();

  strs.forEach(str => {
    const inputMap = groupByToMap(str.split(''));

    let isFound = false;
    for (let entry of anagramsMap.entries()) {
      const mapMap = entry[0];
      const mapArray = entry[1];
      if (eqMap(inputMap, mapMap)) {
        mapArray.push(str);
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      anagramsMap.set(inputMap, [str]);
    }
  });

  const result = [...anagramsMap.values()];
  return result;
};

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

// const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
const result = groupAnagrams(["hos","boo","nay","deb","wow","bop","bob"]);
console.log(result);
