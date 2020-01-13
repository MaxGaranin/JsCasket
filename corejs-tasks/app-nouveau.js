function nouveau(Constructor) {
    const args = [].slice.call(arguments, 1);

    const obj = Object.create(Constructor.prototype);
    const result = Constructor.apply(obj, args);

    // То же самое
    // const result = obj.constructor(args);

    return result && (isObject(result))
        ? result
        : obj;
}

function isObject(obj) {
    return obj === Object(obj);
}

function Str() { return 's'; }
function Fnc() { return Fnc; }

const str = nouveau(Fnc, 'aaa');
console.log(str);

// function Person(name) {
//     this.name = name;
// }
// Person.prototype.sayHi = function () {
//     return 'Hi, I am ' + this.name;
// };

// var guy = nouveau(Person, 'Guy');
// console.log(guy.name);  // guy.name, 'Guy'
// console.log(guy.sayHi); // 'Hi, I am Guy'

// console.log(Person('Max'));