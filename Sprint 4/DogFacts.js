async function getFacts() {
    // first build the API call string by starting with the URL
    var apiString = "http://dog-api.kinduff.com";
    // next add the parameters to the string using the drop down lists
    var theNbrFacts = document.getElementById("nbrFacts").value;
    apiString = apiString + "/api/facts?number=" + theNbrFacts;
    alert(apiString);
    
    var response = await fetch(apiString);

    // now make the API call to the web service using the string and store what is returned in response
    
    var jsonData = await response.json();
    alert("after response fetch");

    /*
    // now, check the status property of the response object, 200-299 is valid
    if (response.status >= 200 && response.status <= 299) {  // valid status
      // read the response as JSON since it is a JSON file
      var jsonData = await response.json();  
      alert("in if stmt");
      document.getElementById("randomFact").innerHTML = "";   // clear what was previously shown
      
      var theRandomFact = "";  //this string will store what to display to the user
  
      
      for (let i=0; i<theNbrFacts; i++) {   //loop through paragraphs
        //print out the information for the user and clear the userid
        document.getElementById("randomFact").innerHTML += jsonData.fact[i] + "<br><br>";
      }

    } else {    //invalid status 
      //handle errors
      theRandomFact = "<p>Error accessing Dog Fact API, status: " + response.status + ": " + response.statusText;
      console.log(response.status, response.statusText);
    }
*/
     
        
  }
