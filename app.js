//Planning
//Problem: We need a simple way to look as a Users Email and Name
//Solution: Use Node JS to connec to commercetools API to get customer information and print out

//Connect to API Url (http://sphere.io.com/down-under

//HTTP Get web request
//Parse the Data
//Format to CSV for Field Headers
//Send the Data to the Google Sheets API

// require('./modules/ct-service')(app);
// require('./modules/sheets')(app);

var http = require("http");

var projectKey = 'down-under';
var token = '';
var baseURL = 'https://api.sphere.io/$projectKey';
var tokenHeader = 'Authorization: Bearer $token';

function printMessage(username, email) {
  var message = "User: " + username + " Email: " + email;
  console.log(message);
}

var options = {
  hostname: 'https://api.sphere.io',
  port: 80,
  path: '/down-under/customer',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer token'
      }
};

var request = http.request(options, function(response){
  console.dir(response);
  console.log(response.status);
  var body = " ";
  response.on('data', function(chunk) {
    console.log(chunk);
    body += chunk;
  });
  response.on('end', function() {
    var profile = JSON.parse(body);
    console.log(body);
  })
});

//Set an error for a bad response

request.on("error", function(error){
  console.error(error.message);
});

//Read The Data from the response
response.on('data', function(chunk) {
  console.log('BODY: ' + chunk);
});
