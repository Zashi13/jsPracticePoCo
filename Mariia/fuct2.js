let age = Number(prompt("How old are you?"));
let retire = Number(prompt("At what age would you like to retire?"));


function calculator(age, retire) {
    let left = retire - age;
    let currentYear = new Date().getFullYear();
    let retirementYear = currentYear + left; 
    
    return `You have ${left} years left until you can retire. It's ${currentYear} now, so you can retire in ${retirementYear}.`;
}


alert(calculator(age, retire));
