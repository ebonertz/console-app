//Planning
//Problem: We need a simple way to look as a Users Email and Name
//Solution: Use Node JS to connec to commercetools API to get customer information and print out

//Connect to API Url (http://sphere.io.com/down-under
//Read The Data from the response
//HTTP Get web request
//Parse the Data > Convert to CSV
//Send the Data to the Google Sheets API


var http = require("http");

function printMessage(username, email) {
  var message = "User: " + username + " Email: " + email;
  console.log(message);
}

var request = http.get("https://api.sphere.io/down-under/customer" , function(response){
  console.dir(response);
  console.log(response.status);

}):

request.on("error", function(error){
  console.error(error.message);
});