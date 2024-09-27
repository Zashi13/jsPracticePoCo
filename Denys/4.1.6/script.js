let birthDate = Number(prompt("Enter a birth date"));
let birthMonth = prompt("Enter a name of a birth month");
let birthYear = Number(prompt("Enter a birth year"));
let futureYear = Number(prompt("Enter a future year"));
let futureMonth = prompt("Enter a name of a future month");
let futureDay = Number(prompt("Enter a future day"));

const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = 12;

let monthIndex = 0;

for (let i = 0; i < months; i++) {
    if (birthMonth === month[i]) {
        monthIndex = i;
    }
}
let futureMonthIndex = 0;
for (let i = 0; i < months; i++) {
    if (futureMonth === month[i]) {
        futureMonthIndex = i;
    }
}

let count = 0;

let yearCounter = 0;
let monthCounter = 0;
let dayCounter = 0;
for (let j = birthYear; j < futureYear; j++) {
    monthCounter = 0;
    for (let i = 0, k = monthIndex, count = k % 12; count != futureMonthIndex; k++) {
        count = k % 12;
        if (futureMonth === month[count]) {
            dayCounter = 0;
            for (let n = birthDate; n < futureDay; n++) {
                if (n === futureDay) {
                    dayCounter = dayCounter + 1;
                    break;
                }
                
                if (n !== futureDay && n === days[count]) {
                    alert("Not right day in a month");
                }
                dayCounter = dayCounter + 1;
            }
            break;
        }
        else if(birthMonth === months && birthMonth !== month[i])
        {
            allert("Not right Month name");
        }
        monthCounter = monthCounter + 1;
        i = i + 1;   
    }
    yearCounter = yearCounter + 1;
}

document.getElementById("demo").innerText = "You are " + yearCounter + " Years " + (monthCounter) + " month(-s) and " + dayCounter + " Days old.";
console.log("You are " + yearCounter + " Years " + (monthCounter) + " month(-s) and " + dayCounter + " Days old.");
