let myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')

for (const iter of myMap.entries()) {
  console.log(iter);
}
