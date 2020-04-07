/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const currentSum = [];
  currentSum[0] = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum[i] = Math.max(currentSum[i - 1] + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currentSum[i]);
  }

  return maxSum;
};

const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(result);
