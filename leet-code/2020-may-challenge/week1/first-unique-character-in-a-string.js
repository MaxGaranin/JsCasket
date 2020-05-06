/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const map = new Map();

  const tokens = s.split('');
  tokens.forEach((token, index) => {
    let arr = map.get(token);
    if (!arr) arr = [];
    arr.push(index);
    map.set(token, arr);
  });

  let index = -1;
  for (let entry of map) {
    const token = entry[0];
    const arr = entry[1];
    if (arr.length === 1) {
      index = arr[0];
      break;
    }
  }
  return index;
};

const result = firstUniqChar('loveleetcode');
console.log(result);
