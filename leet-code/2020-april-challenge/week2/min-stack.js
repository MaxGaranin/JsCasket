/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this._arr = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let min = this.getMin();
  if (this._arr.length === 0 || x < min) {
    min = x;
  }

  this._arr.push({ value: x, min });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this._arr.pop().value;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this._arr.length === 0) return null;
  return this._arr[this._arr.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this._arr.length === 0) return null;
  return this._arr[this._arr.length - 1].min;
};


const stack = new MinStack();
stack.push(-2);
stack.push(0);
stack.push(-1);
console.log(stack.getMin());
console.log(stack.top());
console.log(stack.pop());
console.log(stack.getMin());

// stack.push(2147483646);
// stack.push(2147483646);
// stack.push(2147483647);
// console.log(stack.top());
// console.log(stack.pop());
// console.log(stack.getMin());
// console.log(stack.pop());
// console.log(stack.getMin());
// console.log(stack.pop());
// stack.push(2147483647);
// console.log(stack.top());
// console.log(stack.getMin());
// stack.push(2147483648);
// console.log(stack.top());
// console.log(stack.getMin());
// console.log(stack.pop());
// console.log(stack.getMin());
