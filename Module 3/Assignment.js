  function validateANDadd() {
        // define variables
        var x = document.getElementById("newWord").value;
        var nbr = Number(document.getElementById("newNumber").value)
        // validate that word is not blank
        if (x == '' || x == null) {
            alert("Please enter a word");
            return;
        }
        // validate that the list # is valid
        if (nbr < 1 || nbr > 2) {
            alert("Please enter a valid number");
            return;
        }
        // add the word to the appropriate list
        // determine the which list
        if (nbr == 1) {
            var tableAdd = document.getElementById("myList1");
        } else {
            var tableAdd = document.getElementById("myList2");
        }
        // add the row to the approptiate table
        tableAdd.insertRow(tableAdd.rows.length).innerHTML = x;
    }
    
      function clearList1() {
        var tableRef = document.getElementById("myList1");
        tableRef.innerHTML = " ";
      }
    
      function clearList2() {
        var tableRef = document.getElementById("myList2");
        tableRef.innerHTML = " ";
      }
    


