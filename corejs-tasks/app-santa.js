function isSantaClausable(obj) {
    const proto = Object.getPrototypeOf(obj);
    return (proto.sayHoHoHo &&
        proto.distributeGifts &&
        proto.goDownTheChimney);
}

var santa = {
    sayHoHoHo: function () { console.log('Ho Ho Ho!') },
    distributeGifts: function () { console.log('Gifts for all!'); },
    goDownTheChimney: function () { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function () { console.log('Oink Oink!') }
};

console.log(isSantaClausable(santa), true);
console.log(isSantaClausable(notSanta), false);

for (const prop in santa) {
    console.log(santa[prop]);
}
console.log('sayHoHoHo' in santa);

console.log(isSantaClausable instanceof Function);
console.log(santa instanceof Object);

console.log(typeof isSantaClausable == 'function');
console.log(typeof santa == 'object');
