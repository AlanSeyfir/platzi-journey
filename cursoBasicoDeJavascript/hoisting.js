var myName = undefined;
console.log(myName + " Soy ese hoisting");
myName = "Alan";


hey();
function hey(){
    console.log("Test hey " + myName);
}
