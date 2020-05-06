/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b);

  let diff = 0;
  while (stones.length > 1) {
    const a = stones.pop();
    const b = stones.pop();
    diff = Math.abs(a - b);
    if (diff > 0) {
      stones.push(diff);
      for (let i = stones.length - 1; i >= 0; i--) {
        if (stones[i] > stones[i + 1]) {
          [stones[i], stones[i + 1]] = [stones[i + 1], stones[i]];
        }
      }
    }
  }

  if (stones.length === 1) {
    return stones[0];
  } else {
    return 0;
  }
};

const result = lastStoneWeight([2,7,4,1,8,1]);
console.log(result);

