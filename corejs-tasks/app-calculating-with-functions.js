let op = function(func) {
  return function(a) {
    return function(b) {
      return func(a, b);
    };
  };
};

let number = function(a) {
  return function(func) {
    if (func) {
      return func(a);
    } else {
      return a;
    }
  };
};

let zero = number(0);
let one = number(1);
let two = number(2);
let three = number(3);
let four = number(4);
let five = number(5);
let six = number(6);
let seven = number(7);
let eight = number(8);
let nine = number(9);

let plus = op((b, a) => a + b);
let minus = op((b, a) => a - b);
let times = op((b, a) => a * b);
let dividedBy = op((b, a) => Math.floor(a / b));

console.log(seven(times(five()))); // 35
console.log(four(plus(nine()))); // 13
console.log(eight(minus(three()))); // 5
console.log(six(dividedBy(two()))); // 3
