//**spread **: permite manipular partes de un objeto es decir destructurar o estructura un objeto
const obj = {
    name: "Alan",
    age: 20,
    country: "MX",
}

let { name, ...all} = obj;
console.log(all);

const obj1 = {
    name: "Oscar",
    age: 32,
}

const obj2 = {
    ...obj1,
    country: "MX",
}
console.log(obj2);

//Finally in Promises
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    })
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("Finalized"))
    //We can use it in try/catch and async/await. It doesn't matter if the promise doesn't resolve it will ALWAYS show. We can know when ends

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);