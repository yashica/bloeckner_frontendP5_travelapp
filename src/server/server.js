const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const fetch = require("node-fetch");
const path = require("path");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(express.static("dist"));
app.use(cors());

let getCoordinates = require("./getChoords");
let getWeather = require("./getWeather");
let getImage = require("./getImage");

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

const port = 5050;
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
postDataObject = {};
app.post("/postData", function (req, res) {
  inputCity = req.body.city;
  getCoordinates(inputCity)
    .then((data) => getWeather(data[0], data[1]))
    .then(function (data) {
      weathersummary = data[0];
      temperature = data[1];
    })
    .then((data) => getImage(inputCity))
    .then(function (data) {
      imageurl = data;
      postDataObject.imageurl = imageurl;
      postDataObject.summary = weathersummary;
      postDataObject.temperature = temperature;
      postDataObject.timeLeft = req.body.timeLeft;
      postDataObject.duration = req.body.duration;
      postDataObject.city = req.body.city;
      res.send({
        msg: "Received and processed",
      });
    });
});

app.get("/all", function (req, res) {
  res.send(postDataObject);
});

/* //setup use of Environment Variables
const dotenv = require("dotenv");
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

var path = require("path");

// Require Express to run server and routes
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

// Start up an instance of app
const app = express();

//Middleware
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

console.log(`.env Test: KEY_DARK = ${process.env.KEY_DARK}`);
console.log(`.env Test: KEY_GEO = ${process.env.KEY_GEO}`);
console.log(`.env Test: KEY_PIXABAY = ${process.env.KEY_PIXABAY}`);
console.log(
  `.env Test: KEY_OPENWEATHERMAP = ${process.env.KEY_OPENWEATHERMAP}`
);

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

//Creating a get-route that uses the url '/all'
//and returns the JavaScript Object projectData (defined at the top of the server.js file)
app.get("/getData", sendData);
function sendData(req, res) {
  res.send(projectData);
}

app.get("/all", function (req, res) {
  res.send(postDataObject);
});

//get access to other server scripts
let getCoordinates = require("./getChoords");
let getWeather = require("./getWeather");
let getImage = require("./getImage");
//creating a simple POST-route with an endpoint to store the sent data
//app.post("/postData", addData);

postDataObject = {};
app.post("/postData", assembleData);

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

function assembleData(req, res) {
  console.log("IN SERVER: in post Route -> function assembleData");
  console.log(req.body);
  inputCity = req.body.city;
  getCoordinates(inputCity)
    .then((data) => getWeather(data[0], data[1]))
    .then(function (data) {
      weathersummary = data[0];
      temperature = data[1];
    })
    .then((data) => getImage(inputCity))
    .then(function (data) {
      imageurl = data;
      postDataObject.imageurl = imageurl;
      postDataObject.summary = weathersummary;
      postDataObject.temperature = temperature;
      postDataObject.future = req.body.future;
      postDataObject.duration = req.body.duration;
      postDataObject.city = req.body.city;
      res.send({
        msg: "Received and processed",
      });
    });
  res.send({
    msg: "Message received!",
  });
}
 */
