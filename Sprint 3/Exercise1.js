async function getBaconIpsum() {
    // first build the API call string by starting with the URL
    var apiString = "https://baconipsum.com/api/";
    // next add the parameters to the string using the drop down lists
    var theNewParameter = document.getElementById("Parameter").value;
    var theNewParagraphs = document.getElementById("nbrParagraphs").value;
    apiString = apiString + "?type=" + theNewParameter + "&paras=" + theNewParagraphs; 
    alert(apiString);  // show the API string
  
    // now make the API call to the web service using the string and store what is returned in response
    var response = await fetch(apiString);
  
    // finally, print the response in the various formats
    document.getElementById("myRawData").innerHTML = "";   // clear what was previously shown
    document.getElementById("myFormattedData").innerHTML = "";   // clear what was previously shown
    document.getElementById("myEncryptedData").innerHTML = "";   // clear what was previously shown
    
    var jsonData = await response.json();  // read the response as JSON
    
    // stringify and print out the JSON object in the RawData section
    document.getElementById("myRawData").innerHTML = JSON.stringify(jsonData);
    
    // loop through the JSON object one paragraph at a time and print each in the FormattedData section
    for (var para in jsonData) {   
        document.getElementById("myFormattedData").innerHTML += "<p>" + jsonData[para] + "</p>";
      }
  
    // determine which algorithm to use, encrypt the data using that algorithm, and print in the myEncrypted Data section
    var theAlgorithm = document.getElementById("Algorithm").value;  
    var newJsonData;
    
    if (theAlgorithm === "1") 
      newJsonData = Encrypt1(jsonData);   // apply the first algorithm
    else 
      newJsonData = Encrypt2(jsonData);   // apply the second algorithm
    
  // loop through the encrypted JSON object one paragraph at a time and print each in the EncryptedData section
  for (var para in newJsonData) {   
    document.getElementById("myEncryptedData").innerHTML += "<p>" + newJsonData[para] + "</p>";
  }
  
  return true;
  } 

function Encrypt1 (someJSON) {
  /* This simple Caesar's cipher algorithm will add 13 to the ASCII value of each character if the character
     is a letter.  It is circular so when adding 13 if it goes past z (or Z) it will go to a (or A) next. */
     var newChar;      // will contain the character being examined
     var newCharCode;  // will contain the ASCII code of the character being examined
     var newJSON=[];   // will contain the new JSON, initially an empty array

  // loop through the JSON object one paragraph at a time
  for (var para in someJSON) {     // for each paragraph in the object
    var newPara = "";              // initialize new paragraph to empty string, build it one character at a time
    for (var chara in someJSON[para]){          // for each character in the paragraph
      newChar = someJSON[para][chara];          //     get the character
      newCharCode = newChar.charCodeAt(0);      //     get the ASCII code of the character
      if ((newCharCode >= 65)&&(newCharCode <= 77))           // check for A-M
        newChar = String.fromCharCode(newCharCode+13)              // change the character
      else if ((newCharCode >= 78)&&(newCharCode <= 90))      // check for N-Z
        newChar = String.fromCharCode(newCharCode-13)              // change the character
      else if ((newCharCode >= 97)&&(newCharCode <= 109))     // check for a-m
        newChar = String.fromCharCode(newCharCode+13)              // change the character
      else if ((newCharCode >= 110)&&(newCharCode <= 122))    // check for n-z
        newChar = String.fromCharCode(newCharCode-13);             // change the character
      newPara += newChar;          // add the new character to the paragraph
    }  // end for each character

  newJSON.push(newPara);   // add the new encrypted paragraph array

  }  // end for each paragraph

return newJSON;   // return the encrypted paragraphs
}

function Encrypt2(inStr) {

  var startArray = [],
      outArray = [],
      mixedArray =[];

  for (var i = 32; i <= 126; i++) {
      startArray[i - 32] = String.fromCharCode(i);
  }
  var mixedArray = generateKeyArr(startArray);

  for (var para of inStr) {    // loop through each paragraph
      for (var chara of para) {  //loop through each character of the paragraph
          outArray.push(mixedArray[startArray.indexOf(chara)]);
      }
      outArray.push("<br></br>");  // \n\n removed
  }

  return outArray.join("");
}

function generateKeyArr(startArray) {
  var currentIndex = startArray.length,
      temporaryValue, randomIndex,
      array = startArray.slice();

  while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }
  return array;
}