var students = ["Maria","Sergio","Rosa","Daniel"]

function greetStudent(student){
    console.log(`Hola, ${student}`);
}

while(students.length > 0){
    console.log(students);
    var student = students.shift();
    greetStudent(student);
}