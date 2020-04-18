var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

app.use(express.static("src/client"));

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile("/client/views/index.html", { root: __dirname + "/.." });
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
