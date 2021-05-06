function validateANDadd() {
    // define variables
    let min = document.getElementById("min").value;
    var max = document.getElementById("max").value;
    var nbr = Number(document.getElementById("newNumber").value)
    // validate min is valid
    if (min == "") {
        alert("Please enter a number for the minimum");
    return;
    }
    // validate max is valid
    if (max == "") {
        alert("Please enter a number for the maximum");
    return;
    }
    //ADD CODE to block ranges after they have been input and validated

    // validate nbr is not blank
    if (nbr == "") {
        alert("Please enter a number to add to the list");
        return;
    }
    // validate if in range
    if ((nbr<min) || (nbr>max)) {
        alert("Please enter a number in the range");
        return;
    }
    // add the number to the list
    var tableAdd = document.getElementById("myList");
        
    // add the row to the table
    tableAdd.insertRow(tableAdd.rows.length).innerHTML = nbr;

    //calculate the mean:
    //count number of numbers in list
    var numsCnt = tableAdd.rows.length;   
    //get sum of numbers added together 
    var sum = 0;
    for (i=0; i<numsCnt; i++){
        sum += parseInt((tableAdd.rows[i]).innerHTML);
    }
    var mean = (sum / numsCnt);
    var Meanlabel = document.getElementById("Mean");
    Meanlabel.innerHTML = mean.toFixed(3);

    //find the median number:
    //create empty array
    var array = [];
    //load array using table data        
    for (i=0; i<=numsCnt; i++){
        array.push(tableAdd.rows[i].innerHTML);
    }
        
    //sort array 
    array.sort((function(a, b){return a - b}));
    
    //divides by 2 but returns remainder 
    if (numsCnt%2==1) {
        var median = array[array.length / 2 | 0]            // if remainder is 1 then there is an odd number of numbers
    }  
    else {           
        var median = array[array.length / 2 | 0]            // if the remainder is 0 then there is an even number of numbers
        return;
    } 

    //var Meanlabel = document.getElementById("Mean");
    //Meanlabel.innerHTML = mean.toFixed(3);
    //var middle = theNewWord.length / 2;
}

  function clearAll() {
    document.getElementById("min").value = "";
    document.getElementById("max").value = "";
    document.getElementById("newNumber").value = "";
    document.getElementById("Mean").value = "";
    var tableRef = document.getElementById("myList");
    tableRef.innerHTML = "";
  }

