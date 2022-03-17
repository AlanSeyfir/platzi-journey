var number = 1;

switch (number) {
  case 1:
    console.log("I'm one!");
    break;
  case 10:
    console.log("I'm ten!");
    break;
  case 100:
    console.log("I'm one hundred!");
    break;
  default:
    console.log("I'm nothing");
}

var userSelection;
var machineElection;

//ROCK | PAPER | SCISSORS
function gameSwitch(user, machine) {
    userSelection = user;
    machineElection = machine;
    //Add true to loop the switch
    switch (true) {
        case userSelection === machineElection:
            console.log("Is a draw, try again");
            break;
        //CASE when machine wins
        case userSelection === "rock" && machineElection === "paper" || userSelection === "scissors" && machineElection === "rock" || userSelection === "paper" && machineElection === "scissors":
            console.log("Machine wins");
            break;
        //CASE when user wins
        case machineElection === "rock" && userSelection === "paper" || machineElection === "paper" && userSelection === "scissors" || userSelection === "rock" && machineElection === "scissors":
            console.log("User wins");
            break;
        default:
            console.log("Ingrese piedra, papel o tijera");
            break;
    }
}
//INPUT   (USER,MACHINE)
gameSwitch("scissors","rock");
