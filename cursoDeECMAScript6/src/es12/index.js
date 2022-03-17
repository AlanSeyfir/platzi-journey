const string = "Javascript es maravilloso, puedo hacer paginas web y Javascript es sencillo";

const replacedString = string.replace("Javascript","Python");
console.log(
    replacedString);

const replacedString2 = string.replaceAll("Javascript", "Python");
console.log(replacedString2);

//Private 
class Message {
    show(val){
        console.log(val);
    };
}

const message = new Message();
message.show("Hola!")

//
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response))

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element)
    }
}

let isTrue1 = true;
let isFalse1 = false;
console.log(isTrue1 &&= isFalse1);

let isTrue2 = true;
let isFalse2 = false;
console.log(isTrue2 ||= isFalse2);

let isTrue3 = true;
let isFalse3 = false;
console.log(isTrue3 ??= isFalse3);


//Default Params, array.includes(value), Object Entries, trimStart