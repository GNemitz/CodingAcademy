"use strict";
exports.__esModule = true;
function validateANDadd() {
    // define variables
    var minString = document.getElementById("min").value;
    var newMin;
    var maxString = document.getElementById("max").value;
    var newMax;
    var nbrString = document.getElementById("newNumber").value;
    var newNbr;
    // validate min is valid
    if (minString == "") {
        alert("Please enter a minimum value");
        return false;
    }
    else
        newMin = parseInt(minString);
    // validate max is valid
    if (maxString == "") {
        alert("Please enter a maximum value");
        return false;
    }
    else
        newMax = parseInt(maxString);
    //ADD CODE to block ranges after they have been input and validated
    // validate nbr is not blank
    if (nbrString == "") {
        alert("Please enter a number to add to the list");
        return false;
    }
    else
        newNbr = parseInt(nbrString);
    // validate if in range
    if ((newNbr < newMin) || (newNbr > newMax)) {
        alert("Please enter a number in the range");
        document.getElementById("newNumber").value = "";
        return false;
    }
    else {
        //disable the buttons so the user cannot enter any changes
        document.getElementById("min").disabled = true;
        document.getElementById("max").disabled = true;
        // add the number to the list
        var tableAdd = document.getElementById("myList");
        (tableAdd.insertRow(tableAdd.rows.length)).innerHTML = newNbr; // add the row to the table
        //calculate the mean:
        //count number of numbers in list
        var numsCnt = tableAdd.rows.length;
        var sum = 0; //get sum of numbers added together 
        for (var i = 0; i < numsCnt; i++) {
            sum += parseInt((tableAdd.rows[i]).innerHTML);
        }
        var mean = (sum / numsCnt);
        var Meanlabel = document.getElementById("Mean");
        Meanlabel.innerHTML = mean.toFixed(3);
        //find the median number:
        var array = []; //create empty array
        //load array using table data        
        for (var i = 0; i <= numsCnt; i++) {
            array.push(parseInt(((tableAdd.rows[i]).innerHTML)));
        }
        //sort array 
        array.sort((function (a, b) { return a - b; }));
        //divides by 2 but returns remainder 
        if (numsCnt % 2 == 1) {
            var median = array[array.length / 2 | 0]; // if remainder is 1 then there is an odd number of numbers
        }
        else {
            var median = array[array.length / 2 | 0]; // if the remainder is 0 then there is an even number of numbers
            return;
        }
        //var Meanlabel = document.getElementById("Mean");
        //Meanlabel.innerHTML = mean.toFixed(3);
        //var middle = theNewWord.length / 2;
    }
}
function clearAll() {
    document.getElementById("myList").innerHTML = "";
    document.getElementById("min").disabled = false;
    document.getElementById("max").disabled = false;
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    document.getElementById("newNumber").value = "";
    document.getElementById("Mean").value = "n/a";
}
