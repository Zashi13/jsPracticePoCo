function calculator(num1, num2, num3, num4, num5) {
    let sum = num1 + num2 + num3 + num4 + num5;
    let average = sum / 5;
    

    return {
        sum: sum,
        average: average
    };
}


let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let num3 = Number(prompt("Enter the third number:"));
let num4 = Number(prompt("Enter the fourth number:"));
let num5 = Number(prompt("Enter the fifth number:"));


let result = calculator(num1, num2, num3, num4, num5);


alert("Sum: " + result.sum);
alert("Average: " + result.average);
