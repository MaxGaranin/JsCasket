/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  let counter = 0;

  arr = arr.slice().sort((a, b) => a - b);
  const map = new Map();

  arr.forEach((n) => {
    const nCount = map.get(n);
    if (!nCount) {
      map.set(n, 1);
    } else {
      map.set(n, nCount + 1);
    }

    const np = n - 1;
    const npCount = map.get(np);
    if (npCount > 0) {
      counter += npCount;
      map.set(np, 0);
    }
  });

  return counter;
};

let result = countElements([0, 6, 3, 4, 2, 10, 4, 3, 10, 0]); // 3
console.log(result);

// result = countElements([1, 1, 3, 3, 5, 5, 7, 7]); // 0
// console.log(result);
// result = countElements([1, 3, 2, 3, 5, 0]); // 3
// console.log(result);
// result = countElements([1, 1, 2, 2]); // 2
// console.log(result);
