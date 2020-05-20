var StockSpanner = function () {
  this.prices = [];
  this.counters = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let counter = 1;

  let i = this.prices.length - 1;
  while (i >= 0) {
    if (this.prices[i] <= price) {
      counter += this.counters[i];
      i -= this.counters[i];
    } else {
      break;
    }
  }

  this.prices.push(price);
  this.counters.push(counter);
  return counter;
};

const obj = new StockSpanner();
const arr = [28, 14, 28, 35, 46, 53, 66, 80, 87, 88];
arr.forEach((price) => {
  console.log(obj.next(price));
});
