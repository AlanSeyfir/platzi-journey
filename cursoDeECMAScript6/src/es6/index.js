function newFunction(name, age, country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name , age, country);
}

//TODO es6
function newFunction2(name = 'oscar', age = 32, country = 'MX'){
    console.log(name , age, country);
}
newFunction2();
newFunction2('Alan', '20', "MX");

//TODO Template Literals
let hello = "Hello";
let world = "World"
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Before ES6
let lorem = "lorem no kitti ipsum porque no se que más escribir xd \n"
+ "otra frase para concatenar mas palabras";

//ES6 Multiline variables
let lorem2 = `otra frase epica pero hay saltos de linea
y no tenemos que agregar un + o la n para saltar linea
`;
console.log(lorem2);

//Destructuring
let person = {
    'name_': 'alan',
    'age_': 20,
    'country': 'MX'
};
console.log(person.name_, person.age_);

let {name_,age_} = person;
console.log(name_);

//Spread Operator
let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria', 'Jessica', 'Camila'];

let education = ['David', ...team1, ...team2];
console.log(education);

//*LET & CONST
{
    var global = 'Global var';
}
console.log(global);
{
    let globalLet = 'Global let';
    console.log(globalLet);
}
//const a = 'b'; //You cannot de asign a const variable

let name = 'Alan';
let age = 20;
//Create an object BEFORE
obj = {name: name, age: age}

//After ES6
obj2 = { name, age}
console.log(obj);
console.log(obj2);

//Arrow functions
//They don't have a "this" vinculated. "This" transforms to the context of an arrow function
const names = [
    {name: 'Alan', age: 20},
    {name: 'Angie', age: 21}
]

let listOfName = names.map(function(item){
    console.log(item.name);
});

let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) =>{
    //
};

const listOfNames4 = name => {

};

const square = num => num * num;

//Promises
const helloPromise = () => {
    return new Promise((resolve,reject) => {
        if (true) {
            resolve("Hey! 😎");
        }else{
            reject("Ups!!😯");
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(err => console.log(err));

//Classes - 
class Calculator {
    //TODO Add more functionality to this to practice constructor
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,2));

//Export and Import Modules - Make differnet modules, like calling an API, make a different matemathic calculus in various modules.
//Modules are a topic I need to research
//* import { hello_module } from "./module";
//* console.log(hello_module());

//Generators
//Function 
function* helloWorld(){
    if(true){
        yield 'Hello,';
    }
    if(true){
        yield 'World';
    }
}
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);