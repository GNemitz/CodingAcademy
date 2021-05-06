export{};

function validateANDadd() {
  // define variables
  let minString: string = (<HTMLInputElement>document.getElementById("min")).value;
  let newMin: number; 
  let maxString: string = (<HTMLInputElement>document.getElementById("max")).value;
  let newMax: number;
  let nbrString: string = (<HTMLInputElement>document.getElementById("newNumber")).value;
  let newNbr: Number;

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
  if ((newNbr<newMin) || (newNbr>newMax)) {
      alert("Please enter a number in the range");
      (<HTMLInputElement>document.getElementById("newNumber")).value = "";
      return false;
  }
  else {

    //disable the buttons so the user cannot enter any changes
   (<HTMLInputElement>document.getElementById("min")).disabled = true;
   (<HTMLInputElement>document.getElementById("max")).disabled = true;

       // add the number to the list
    let tableAdd: any = (<HTMLInputElement>document.getElementById("myList"));
    (tableAdd.insertRow(tableAdd.rows.length)).innerHTML = newNbr;   // add the row to the table

    //calculate the mean:
    //count number of numbers in list
    let numsCnt: number = tableAdd.rows.length;   
    let sum = 0;            //get sum of numbers added together 
    for (let i: number = 0; i < numsCnt; i++){
        sum += parseInt((tableAdd.rows[i]).innerHTML);
    }
    let mean = (sum / numsCnt);
    let Meanlabel = (<HTMLInputElement>document.getElementById("Mean"));
    Meanlabel.innerHTML = mean.toFixed(3);

    //find the median number:
    let array = [];         //create empty array
    //load array using table data        
    for (let i: number = 0; i <= numsCnt; i++){
        array.push(parseInt(((tableAdd.rows[i]).innerHTML)));
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
}

function clearAll() {
  document.getElementById("myList").innerHTML = "";
  (<HTMLInputElement>document.getElementById("min")).disabled = false;
  (<HTMLInputElement>document.getElementById("max")).disabled = false;
  (<HTMLInputElement>document.getElementById("min")).value = "";
  (<HTMLInputElement>document.getElementById("max")).value = "";
  (<HTMLInputElement>document.getElementById("newNumber")).value = "";
  (<HTMLInputElement>document.getElementById("Mean")).value = "n/a";
  
}

