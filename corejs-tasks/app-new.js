///*----------------------------------
// Construct object
// 
function Greeting3(name) {
    this.name = name;

    this.sayHello = function () {
        return "Hello " + this.name;
    };

    this.sayBye = function () {
        return "Bye " + this.name;
    };
}

function factory() {
    return {
        createGreeting() {
            return construct(Greeting3, 'Maksim');
        }
    }
}

function construct(Constructor) {
    //---------------------------------------------------------
    // Самый простой способ с использованием оператора ...spread
    const args = [].slice.call(arguments, 1);
    const obj = new Constructor(...args);
    return obj;

    //---------------------------------------------------------
    // Очень интересный способ создания объекта с параметрами,
    // когда нет оператора ...spread

    // var args = Array.prototype.slice.call(arguments, 1);

    // // Temporary constructor
    // let Temp = function () { }

    // // Give the Temp constructor the Class's prototype
    // Temp.prototype = Constructor.prototype;

    // // Create a new instance
    // let instance = new Temp();

    // // Call the original Constructor with the temp
    // // instance as its context (i.e. its 'this' value)
    // let result = Constructor.apply(instance, args);

    // // If an object has been returned then return it,
    // // otherwise return the original instance.
    // // (consistent with behaviour of the new operator)
    // return Object(result) === result ? result : instance;
    //---------------------------------------------------------    

    // // 3. Еще один способ (из современного стандарта)
    // let obj = Object.create(Class.prototype);
    // Constructor.apply(obj, Array.prototype.slice.call(arguments, 1));
    // return obj;

    // Для способа 3. Можно так объекты-клоны создавать (это из объекта, не конструктора)
    // let newObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}

// const greeting = construct(Greeting3, 'Maksim', 'Garanin');
const greeting = factory().createGreeting('Maksim', 'Garanin');
console.log(greeting.sayHello());

// ///*----------------------------------
// // Object inheritance
// //
// function Greeting(name) {
//     this.name = name;

//     this.sayHello = function () {
//         return "Hello " + this.name;
//     };

//     this.sayBye = function () {
//         return "Bye " + this.name;
//     };
// }

// var greeting = new Greeting('John');
// console.log(greeting.sayHello());
// console.log(greeting.sayBye());

// ///*----------------------------------
// // Prototype inheritance
// //
// function Greeting2(name) {
//     this.name = name;
// }

// Greeting2.prototype.sayHello = function () {
//     return "Hello " + this.name;
// };


// Greeting2.prototype.sayBye = function () {
//     return "Bye " + this.name;
// };

// var greeting2 = new Greeting2('John');
// console.log(greeting2.sayHello());
// console.log(greeting2.sayBye());
