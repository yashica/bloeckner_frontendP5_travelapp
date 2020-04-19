// Setup empty JS object to act as endpoint for all routes
projectData = {};

var path = require("path");

// Require Express to run server and routes
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

// Start up an instance of app
const app = express();

/* Middleware*/
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// Initialize the main project folder
app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
// Setup Server
const port = 5050;

app.listen(port, listening);

function listening() {
  console.log("Server is running");
  console.log(`Server is running on localhost: ${port}`);
}

/* app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
}); */

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

//Creating a get-route that uses the url '/all'
//and returns the JavaScript Object projectData (defined at the top of the server.js file)
app.get("/getData", sendData);
function sendData(req, res) {
  res.send(projectData);
}

//creating a simple POST-route with an endpoint to store the sent data
app.post("/postData", addData);
console.log("IN SERVER: in post Route");
function addData(req, res) {
  console.log("IN SERVER: in post Routev-> function addData");
  console.log(req.body);
  projectData.today = req.body.date;
  projectData.feeling = req.body.feel;
  projectData.temperature = req.body.temp;
  res.send({
    msg: "Message received!",
  });
}
