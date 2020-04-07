/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  function findMax(i1, i2) {
    let sum = nums[i1];
    let maxSum = sum;
    let rightIndex = i1;

    for (let i = i1 + 1; i <= i2; i++) {
      sum = sum + nums[i];
      if (sum > maxSum) {
        maxSum = sum;
        rightIndex = i;
      }
    }

    return { maxSum, rightIndex };
  }

  function findLeftMaxSumFromRight(i2) {
    let sum = nums[i2];
    let maxSum = sum;
    let leftIndex = i2;

    for (let i = i2 - 1; i >= 0; i--) {
      sum = sum + nums[i];
      if (sum > maxSum) {
        maxSum = sum;
        leftIndex = i;
      }
    }

    return { maxSum, leftIndex };
  }

  let maxSum = nums[0];
  let rightIndex = 0;

  let j = 0;
  while (true) {
    const {
      maxSum: currentMaxSum,
      rightIndex: currentRightIndex
    } = findMax(j, nums.length - 1);

    if (currentMaxSum > maxSum) {
      maxSum = currentMaxSum;
      rightIndex = currentRightIndex;
    }

    if (maxSum >= 0 || j >= nums.length) {
      break;
    } else {
      j = currentRightIndex + 1;
    }
  }

  const { maxSum: leftMaxSum, leftIndex } = findLeftMaxSumFromRight(rightIndex);

  if (leftIndex === rightIndex) {
    return nums[leftIndex];
  } else {
    return leftMaxSum;
  }
};

// const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// const result = maxSubArray([1]);
// const result = maxSubArray([-2, -1]);
// const result = maxSubArray([-1, -2]);
const result = maxSubArray([-1,0,-2,2]);

console.log(result);
