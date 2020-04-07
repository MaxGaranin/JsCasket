/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let stock = 0;
  let top = 0;
  let bottom = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const dp = prices[i] - prices[i - 1];
    if (dp > 0) {
      if (bottom > 0) {
        stock -= bottom;
        bottom = 0;
      }
      top = prices[i];
    } else if (dp < 0) {
      if (top > 0) {
        stock += top;
        top = 0;
      }
      bottom = prices[i];
    } else {
      // ничего не делаем
    }
  }

  if (top > 0) {
    stock += top;
  }

  return stock;
};

// const result = maxProfit([7,1,5,3,6,4]);
// const result = maxProfit([1,2,3,4,5]);
const result = maxProfit([7,6,4,3,1]);
console.log(result);
