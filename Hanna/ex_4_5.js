let vNumber;

vNumber = prompt("Write the number:");

if (!isNaN(vNumber)&&vNumber.trim() !== "") {

    vNumber = Number(vNumber);
if(vNumber%2===0){
     alert("The number is even.");
    
    }else {
        alert("The number is odd.")
    }
}
else{ 

    alert("This is not a number.");
}

/*
if (isFinite(vNumber)&&vNumber.trim() !== "") {
    alert("Number "+vNumber);
    alert("Type of vNumber:" + typeof vNumber)

}
else{ 
    alert("NaN "+vNumber);
    alert("Type of vNumber:" + typeof vNumber)

}
*/