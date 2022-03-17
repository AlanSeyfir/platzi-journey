var age = 7;

if(age === 18){
    console.log("Hey, It's your 1° time voting");
}else if (age > 18){
    console.log("You can vote again");
}else{
    console.log("You can't vote 😅");
}

//Ternary Operator | condition ? true : false
var number = 1;
var result = number === 1 ? "Yes I'm one" : "No, I'm not one";

console.log(result);


//----------
if (true) {
    console.log("Hi");
}else{
    console.log("I'm false");
}

if (false) {
    console.log("Hi");
}


var rock = "rock";
var scissors = "scissors";
var paper = "paper";

function game(userElection, machineElection){
    if(userElection == machineElection){
        console.log("Is a draw 🤡");
    }

    //User selection is ROCK
    if(userElection == "rock" && machineElection == "scissors"){
        console.log("Player Wins 😎");
    }else if(userElection == "rock" && machineElection == "paper"){
        console.log("Machine Wins 😵"); 
    }

    //User selection is PAPER
    if(userElection == "paper" && machineElection == "scissors"){
        console.log("Machine Wins 😵"); 
    }else if(userElection == "paper" && machineElection == "rock"){
        console.log("Player Wins 😎");
    }

    //User selection is SCISSORS
    if(userElection == "scissors" && machineElection == "paper"){
        console.log("Player Wins 😎");
    }
    else if(userElection == "scissors" && machineElection == "rock"){
        console.log("Machine Wins 😵"); 
    }
}
//(User selection, Machine selection). Use ONLY lowercase
game("scissors","paper");

