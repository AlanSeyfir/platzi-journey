var fruits = ["🍎","🍌","🍒","🍓"]
console.log(fruits);

console.log(fruits.length)

console.log(fruits[2]);
console.log(fruits[0]);


var moreFruits = fruits.push("🍇");
console.log(fruits);
console.log(fruits[4]);

var lastFruit = fruits.pop("🍇");
console.log(fruits);

var newLength = fruits.unshift("🍇");
console.log(fruits);

var deleteFruit = fruits.shift()
console.log(fruits);

var position = fruits.indexOf("🍒")
console.log(position);
console.log(fruits[2]);


var inception = [[1,3,4],[5,6,7,[1,3,4,]]]

console.log(inception);