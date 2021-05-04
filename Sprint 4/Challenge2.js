async function getRepos() {
    // first build the API call string by starting with the URL
    var apiString = "https://api.github.com/users";
    // next add the parameters to the string using the drop down lists
    var theNewUser = document.getElementById('userName').value;
    apiString = apiString + "/" + theNewUser + "/repos";
    //alert(apiString);  // show the API string
  
    // now make the API call to the web service using the string and store what is returned in response
    // response is data we got back
    var response = await fetch(apiString);

    // now, check the status property of the response object, 200-299 is valid
    if (response.status >= 200 && response.status <= 299) {  // valid status
      // read the response as JSON since it is a JSON file
      var jsonData = await response.json();  
    
      // create the user feedback with the repos and links
      var theRepos = "";  //this string will store what to display to the user
      for (var aRepos in jsonData) {   //loop through repos 
        theRepos += "<p><a href=" + jsonData[aRepos].html_url + ">" + jsonData[aRepos].name + "</a></p>";
      }
    } else {    //invalid status 
      //handle errors
      theRepos = "<p>Error accessing GitHub, status: " + response.status + ": " + response.statusText;
      console.log(response.status, response.statusText);
    }

    document.getElementById("userName").innerHTML = "";   // clear what was previously shown
    document.getElementById("myRepos").innerHTML = "";   // clear what was previously shown
       
    //print out the information for the user and clear the userid
    document.getElementById("myUser").innerHTML = theNewUser;
    document.getElementById("myRepos").innerHTML = theRepos;
    document.getElementById('userName').value = "";
        
  }
