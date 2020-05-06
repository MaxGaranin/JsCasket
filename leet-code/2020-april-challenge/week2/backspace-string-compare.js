/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
  const s = processStr(S);
  const t = processStr(T);
  return s === t;
};

function processStr(str) {
  const arr = [];
  for (const ch of str) {
    if (ch === "#") {
      arr.pop();
    } else {
      arr.push(ch);
    }
  }
  return arr.join('');
}

let result = backspaceCompare('ab#c', 'ad#c');
console.log(result);
result = backspaceCompare('a#c', 'b');
console.log(result);
