var students = ["Maria","Sergio","Rosa","Daniel"]

function greetStudent(students){
    console.log(`Hi, ${students}`);
}

for(var i=0; i< students.length; i++){
    greetStudent(students[i]);
}

for(let student of students){
    greetStudent(student)
}

 