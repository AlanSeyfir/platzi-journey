var name_1 = "Alan";
var lastName_1 = "bruh";
var platUsername = "AlanSeyfir";
var age = 20;
var email = "test_alan@test.com";

var fullName = `${name_1} ${lastName_1} `;
console.log(fullName);

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

function greetStudent(completeName, nickname){
    console.log(`My name is ${completeName} but I prefer you called me ${nickname}`);
}
greetStudent("Alan Garza bruh","Alan")