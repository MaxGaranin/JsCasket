/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  function swap(i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  let z1 = -1;
  let z2 = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      if (z1 < 0) {
        z1 = i;
      } else {
        z2 = i;
      }
    } else {
      if (z1 >= 0) {
        swap(i, z1);
        z1++;
        z2++;
      }
    }
  }
};

const nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums);
