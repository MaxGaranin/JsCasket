// Let's make a Cat constructor!
var Cat = (function() {
  let cats = [];

  const cns = function Cns(name, weight) {
    if (!name || !weight) throw new Error('Arguments must be defined');

    Object.defineProperty(this, 'name', {
        get() {
            return name;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(this, 'weight', {
      get() {
          return weight;
      },
      set(value) {
          weight = value;
      },
      enumerable: true,
      configurable: true
    });

    cats.push(this);
  };

  cns.averageWeight = function() {
    return cats.reduce((sum, current) => sum + current.weight, 0) / cats.length;
  };

  return cns;
})();

let fluffy = new Cat('fluffy', 15);
let garfield = new Cat('garfield', 25);

console.log(Cat.averageWeight());
let w = garfield.weight;

// Test.assertEquals(fluffy.weight, 15);
// Test.assertEquals(fluffy instanceof Cat, true);
// Test.assertEquals(fluffy.averageWeight, undefined);
// Test.assertEquals(typeof Cat.averageWeight, "function");
// Test.assertEquals(Cat.averageWeight(), 20);

console.log(fluffy.weight);
console.log(fluffy instanceof Cat);
console.log(fluffy.averageWeight);
console.log(typeof Cat.averageWeight);
console.log(typeof fluffy.__proto__.constructor.averageWeight);
console.log(Cat.averageWeight());
