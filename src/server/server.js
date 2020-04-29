// Dependencies
const path = require("path");
const express = require("express"); //Express to run server and routes
const bodyParser = require("body-parser"); //Middleware
const cors = require("cors"); // Cors for cross origin allowance
const dotenv = require("dotenv");
const fetch = require("node-fetch");
//bring in the other server script files
let getCoordinates = require("./getChoords");
let getWeather = require("./getWeather");
let getImage = require("./getImage");

// Setup use of environment variables
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Start up an instance of the app
const app = express();

// Setup server middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup the server to look for assets in the dist folder
app.use(express.static("dist"));

// Spin up the server
// designates what port the app will listen to for incoming requests
const port = 5050;
app.listen(port, listening);

function listening() {
  console.log("Server is running");
  console.log(`Server is running on localhost: ${port}`);
}

//// Routes ////

// home route uses index file from dist folder
app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// post route for post request from Client
// -> assemble the data gathered by multiple API calls and store them in postDataOject
postDataObject = {};
app.post("/postData", function (req, res) {
  inputCity = req.body.city;
  getCoordinates(inputCity)
    .then((data) => getWeather(data[0], data[1], req.body.timeLeft))
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

// get route
// -> deliver the data stored in postDataObject to the client
app.get("/all", function (req, res) {
  res.send(postDataObject);
});
