/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const n = Math.floor(nums.length / 2);
  const map = new Map();
  for (const num of nums) {
    let count = map.get(num);
    if (!count) count = 0;
    count++;
    if (count > n) return num;
    map.set(num, count);
  }
};

const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);
console.log(result);
