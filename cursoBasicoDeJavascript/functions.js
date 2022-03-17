//Declaratives
function myFunction(){
    return 3;
}
myFunction();

//Expresions
var myFunction = function(a,b){
    return a + b;
}
myFunction();

function greetStudent(student){
    console.log("Hola! Mucho gusto " + student);
    console.log(`Hola! ${student}`);
}
greetStudent("Alan");

function sum(a,b){
    var result = a + b;
    return result;
}
console.log(sum(1,2));