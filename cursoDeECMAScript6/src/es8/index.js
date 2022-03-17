//Object Entries
const data_1 = {
    frontend: 'Alan',
    backend: 'No c',
    design: 'Angie',
};
const entries = Object.entries(data_1);
console.log(entries);
console.log(entries.length);

//Object Values
const data_2 = {
    frontend: 'Alan',
    backend: 'No c',
    design: 'Angie'
}
const values = Object.values(data_2);
console.log(values);
console.log(values.length);

//Padding
const string = "hello";
console.log(string.padStart(7,"hi"));
console.log(string.padEnd(12," -----"));
console.log("food".padEnd(12,"  -----"));

const obj = {
    name: "AlanTest",
}

//ASYNC & AWAIT
const helloWorld_1 = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve("Hello World"), 1000)
            : reject(new Error("Test Error"))
    });
}

const helloAsync = async () =>{
    const hello = await helloWorld_1();
    console.log(hello);
}
helloAsync();

const anotherFunction = async () => {
    try{
        const hello = await helloWorld_1();
        console.log(hello);
    }catch(error){
        console.log(error);
    }
}
anotherFunction();