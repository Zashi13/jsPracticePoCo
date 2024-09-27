/* Calculator */

let firstNumber = Number(prompt("Please, enter your first number"));
let secondNumber = Number(prompt("Please, enter your second number"));
let operator = prompt("Please, choose operartor +, -, /, *");
let result;

switch(operator) {
    case "+": 
    result = firstNumber + secondNumber;
    break; 
    case "-":
    result = firstNumber - secondNumber;
    break;
    case "/":
    result = firstNumber / secondNumber;
    break;
    case "*": 
    result = firstNumber * secondNumber;
    break;
    default: alert("Something went wrong");
    break;
}


/* Even or Odd */

let userNumber = Number(prompt("Please, enter your number"));

if (userNumber % 2 === 0) {
    alert("Number is even");
} else {
    alert("Number is odd");
}
    

/* Age Calculator */ 

let birthYear = Number(prompt("When is your birthday?"));
let futureYear = Number(prompt("Please, enter future year"));

let age1 = futureYear - birthYear;
let age2 = age1 - 1;

alert("I will be either " + age1 + " or " + age2 + " in " + futureYear); 

/* Keyless Car */ 

let userAge = Number(prompt("What is your age?"));
let requiredAge = 18;

if (userAge < requiredAge) {
    alert("Sorry, you are too young to drive this car. Powering off");
} else if (userAge === requiredAge) {
    alert("Congratulations on your first year of driving. Enjoy the ride!");
} else if (userAge > requiredAge) {
    alert("Powering On. Enjoy the ride!");
} else {
    alert("Something went wrong");
}

/* Multiplication table */

for (let i = 1; i <= 10; i++) {
    console.log(7 + " x " + i + " = " + 7 * i);
  }