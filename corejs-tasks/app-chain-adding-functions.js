function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function add(a) {
  let sum = a;

  add.__proto__.toString = function() {
    return sum;
  };

  return function func(b) {
    sum += b;
    return func;
  };
}

var addTwo = add(2);
console.log(addTwo); // 2
console.log(addTwo + 5); // 7
console.log(addTwo(3)); // 5
console.log(addTwo(3)(5)); // 10

// console.log(add(1));
// console.log(add(1)(2));
// console.log(add(1)(2)(3));
