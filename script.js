/* Script.js */

//calculateTip();

function calculateTip() {
    //store data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQual = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("peopleShare").value;
    
    //validation
    if (billAmount === "" || serviceQual == 0 || billAmount == 0) {
        return window.alert("Please enter a valid number");
    } 
    
    
    
    if (numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }
    
    var total = (billAmount * serviceQual) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);
    
    // Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
    
    
    
}


//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the button calls our function
document.getElementById("calc").onclick = function () { calculateTip(); };