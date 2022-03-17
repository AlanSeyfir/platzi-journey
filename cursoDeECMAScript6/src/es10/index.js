let array1 = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array1.flat(2));

let array2 = [1,2,3,4,5];
console.log(
    array2.flatMap(value => [value, value * 2]
));

//Delete junk space
let hello = "                   hello world";
console.log(hello);
console.log(hello.trimStart());

let helloEnd = "hello world                  ";
console.log(helloEnd);
console.log(helloEnd.trimEnd());

try{

}catch{
    error
}

//Object to array and using entries
let entries = [["name", "oscar"],["age", 23]];
console.log(Object.fromEntries(entries));

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);