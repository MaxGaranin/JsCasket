function compose(f, g) {
    return function (...args) {
        return f(g(...args));
    }
}

function compose2(f, g) {
    return function () {
        const context = {}; // здесь может быть все, что угодно - this (глобальный объект), null 
        return f(g.apply(context, arguments));
    };
}

let add1 = function (a) { return a + 1 }
let id = function (a) { return a }
console.log(compose(add1, id)(0));

let fs1 = function (s) { return s.length; }
let fs2 = function (s1, s2, s3) { return s1 + s2 + s3 }
console.log(compose2(fs1, fs2)("aaa_", "bbb_", "ccc_"));