const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = 12;
let swich = false;

let birthDate = Number(prompt("Enter a birth date"));
if (!birthDate) {alert("Type number"); throw new Error("Type number");}
let birthMonth = Number(prompt("Enter a name of a birth month"));
if (!birthMonth) {alert("Type number"); throw new Error("Type number");}
if (birthDate > days[birthMonth-1] || birthDate < 1 || birthMonth > 12 || birthMonth < 1) {
    alert("Not right birth fomat"); throw new Error("Not right birth fomat. Check amount days in a month or a month number");
}
let birthYear = Number(prompt("Enter a birth year"));
if (!birthYear) {alert("Type number"); throw new Error("Type number");}
let futureYear = Number(prompt("Enter a future year"));
if (!futureYear) {alert("Type number"); throw new Error("Type number");}
let futureMonth = Number(prompt("Enter a name of a future month"));
if (!futureMonth) {alert("Type number"); throw new Error("Type number");}
let futureDay = Number(prompt("Enter a future day"));
if (!futureDay) {alert("Type number"); throw new Error("Type number");}
if (futureDay > days[futureMonth-1] || futureDay < 1 || futureMonth > 12 || futureMonth < 1) {
    alert("Not right birth fomat"); throw new Error("Not right birth fomat. Check amount days in a month or a month number");
}
if (futureYear < birthYear) {
    throw new Error("Future year can not be less then a birth year");
}

if (futureDay < birthDate) {
    let tmp = futureDay;
    futureDay = birthDate;
    birthDate = tmp;
    swich = true;
}

let cBM = birthMonth -1;
let cFM = futureMonth-1;

let monthIndex = 0;

for (let i = 0; i < months; i++) {
    if (birthMonth === monthNum[i+1]) {
        monthIndex = i;
    }
}
let futureMonthIndex = 0;
for (let i = 0; i < months; i++) {
    if (futureMonth === monthNum[i+1]) {
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
        if (cFM === monthNum[count]) {
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
        else if(cBM === months && cBM !== monthNum[i])
        {
            allert("Not right Month name");
        }
        monthCounter = monthCounter + 1;
        i = i + 1;   
    }
    yearCounter = yearCounter + 1;
}

if (swich = true) {
    dayCounter = days[futureMonthIndex] - dayCounter;
}
document.getElementById("demo").innerText = "You are " + yearCounter + " Years " + (monthCounter) + " month(-s) and " + dayCounter + " Days old.";
console.log("You are " + yearCounter + " Years " + (monthCounter) + " month(-s) and " + dayCounter + " Days old.");
