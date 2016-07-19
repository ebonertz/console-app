//Planning
//Problem: We need a simple way to look as a Users Email and Name
//Solution: Use Node JS to connec to commercetools API to get customer information and print out

//Connect to API Url (http://sphere.io.com/down-under

//HTTP Get web request
//Parse the Data
//Format to CSV for Field Headers
//Send the Data to the Google Sheets API


var http = require("http");

function printMessage(username, email) {
  var message = "User: " + username + " Email: " + email;
  console.log(message);
}

var request = http.get("https://api.sphere.io/down-under/customer" , function(response){
  console.dir(response);
  console.log(response.status);
  var body = " ";
  response.on('data', function(chunk) {
    console.log('BODY: ' + chunk);
  });
  response.on('end', function() {
    console.log(body);
  })
}):

//Set an error for a bad response

request.on("error", function(error){
  console.error(error.message);
});

//Read The Data from the response
response.on('data', function(chunk) {
  console.log('BODY: ' + chunk);
});
