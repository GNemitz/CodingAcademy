async function getFoodImage() {
    // first build the API call string by starting with the URL
    var apiString = "https://foodish-api.herokuapp.com/api/";
    // next add the parameters to the string using the drop down lists
    alert(apiString);
    
    var response = await fetch(apiString);
    
    // now, check the status property of the response object, 200-299 is valid
    if (response.status >= 200 && response.status <= 299) {  // valid status
      // read the response as JSON since it is a JSON file
      var jsonData = await response.json();  
      
      document.getElementById("FoodImage").innerHTML = "";   // clear what was previously shown
      
      var theRandomFoodImage = "";  //this string will store what to display to the user
      //print out the information for the user and clear the userid
      document.getElementById("FoodImage").innerHTML = "<img src='" + jsonData.image + "' width='300'></img>";
      
    } else {    //invalid status 
      //handle errors
      theRandomFoodImage = "<p>Error accessing Food Image API, status: " + response.status + ": " + response.statusText;
      console.log(response.status, response.statusText);
    }
     
        
  }
