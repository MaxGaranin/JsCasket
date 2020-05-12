/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  let k1 = 0;
  let k2 = nums.length - 1;
  const index = find(k1, k2);
  return nums[index];

  function find(k1, k2) {
    const count = k2 - k1 + 1;
    if (count === 1) return k1;

    let k = Math.floor((k2 + k1) / 2);
    if (nums[k] === nums[k + 1]) {
      k = k - 1;
    }

    const count1 = k - k1 + 1;
    if (count1 % 2 > 0) {
      k2 = k;
    } else {
      k1 = k + 1;
    }

    return find(k1, k2);
  }
};

// const nums = [1];
// const nums = [1,1,2,2,3];
// const nums = [1,1,2,3,3,4,4,8,8];
const nums = [3,3,7,7,10,11,11];
const result = singleNonDuplicate(nums);
console.log(result);
