/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const templateArr = Array(256).fill(0);
  s1.split('').forEach(ch => {
    const code = ch.charCodeAt(0);
    templateArr[code] += 1;
  });

  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    const arr = templateArr.slice();
    const ss2 = s2.slice(i, i + s1.length);

    let isFound = true;
    for (let j = 0; j < ss2.length; j++) {
      const code2 = ss2.charCodeAt(j);
      arr[code2]--;
      if (arr[code2] < 0) {
        isFound = false;
        break;
      }
    }

    if (isFound) {
      return true;
    }
  }

  return false;
};

const result = checkInclusion('adc', 'dcda');
console.log(result);
