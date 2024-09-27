
let age = Number(prompt("Enter your age"));
let text = verification(age);

document.getElementById("demo").innerText = text;


function verification() {
    if (!age) {
        alert("Not right age format, insert a number");
    }
    else if (age < 18)
    {
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if (age == 18) {
        let result = ("Congratulations on your first year of driving. Enjoy the ride!");
        return(result);
    }
    else {
        let result = ("Powering On. Enjoy the ride!");
        return(result);
    }
}


