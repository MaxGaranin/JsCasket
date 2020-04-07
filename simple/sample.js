const arr = [1, 2, 3];

const copy = [...arr];
copy[0] = 25;

const copy2 = Array.from(arr);

console.log(copy2);
console.log(copy);
console.log(arr);

