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
        alert("Please enter 1 or 2");
        return;
    }
    // add the word to the appropriate list
    // determine the which list
    if (nbr == 1) {
        if (checkPalindrome1(x)) {
            var tableAdd = document.getElementById("myList1");
        } else {
            alert("Word is not a palindrome.");
            return;
        }
        
    } else {
        if (checkPalindrome2(x)) {
            var tableAdd = document.getElementById("myList2");
        } else {
            alert("Word is not a palindrome.");
            return;  //so it doesn't write to table
        }
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

function checkPalindrome1(theNewWord) {
    // define variables
    var palindrome = true;
    var middle = theNewWord.length / 2;
    for (var s = 0;s < middle; s++) {
        if (theNewWord[s]!==theNewWord[theNewWord.length-s-1])
          {palindrome = false; break;}
    }
    return palindrome;
}

function checkPalindrome2(theNewWord) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
    var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
       
    var lowRegStr = theNewWord.toLowerCase().replace(re, '');
    // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
    // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
    // var lowRegStr = "amanaplanacanalpanama";
        
    // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
    // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
    // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
    // And, var reverseStr = "amanaplanacanalpanama";
         
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
    return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
   
}
