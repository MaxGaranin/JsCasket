/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const products = magazine.split('');
  const map = new Map();
  products.forEach(product => {
      let k = map.get(product);
      if (!k) k = 0;
      map.set(product, ++k);
  });

  const notes = ransomNote.split('');
  for (const note of notes) {
    let count = map.get(note);
    if (!count || count === 0) return false;
    count--;
    map.set(note, count);
  }

  return true;
};

let result = canConstruct('aa', 'ab');
console.log(result);
result = canConstruct('aa', 'aab');
console.log(result);
