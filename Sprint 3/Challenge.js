async function getQuote() {
    // first build the API call string by starting with the URL
    var apiString = "https://api.quotable.io/";
    // next add the parameters to the string using the drop down lists
    var theQuoteLength = document.getElementById("QuoteLength").value;

    if (theQuoteLength === "short")
      apiString = apiString + "random?maxLength=100";
      if (theQuoteLength === "medium")
        apiString = apiString + "random?minLength=100&maxLength=140"; 
        if (theQuoteLength === "long")
        apiString = apiString + "random?minLength=140"; 

    alert(apiString);  // show the API string
  
    // now make the API call to the web service using the string and store what is returned in response
    // response is data we got back
    var response = await fetch(apiString);
  
    // finally, print the response in the various formats
    document.getElementById("myQuote").innerHTML = "";   // clear what was previously shown
    document.getElementById("myAuthor").innerHTML = "";   // clear what was previously shown
    
    // read the response JSON text and use json method to create jsondata object
    var jsonData = await response.json();  
    
    //json object can be accessed direction with content and author etc
    document.getElementById("myQuote").innerHTML = jsonData.content;
    document.getElementById("myAuthor").innerHTML = jsonData.author;
        
  }
