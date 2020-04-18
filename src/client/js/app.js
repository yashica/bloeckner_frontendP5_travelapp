/* Global Variables */
//const myCityID = 2884878;
const myZIP = 10001; //somewhwere in New York
const myApiKey = "e3fc7bbc056d167d99d73a964e1efc27";
let cityZipCode = myZIP;
let urlOpenWeatherMap = `http://api.openweathermap.org/data/2.5/weather?zip=${myZIP}&appid=${myApiKey}&units=metric`;

//async GET request
const getData = async (url) => {
  const request = await fetch(url);
  try {
    //transform into JSON
    const receivedData = await request.json();
    return receivedData;
  } catch (error) {
    console.log("error in getData ", error);
  }
};

//async POST request
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error in postRequest ", error);
  }
};

const updateUI = (inputData) => {
  document.getElementById("date").textContent = `date: ${inputData.today}`;
  document.getElementById(
    "temp"
  ).textContent = `temperature: ${inputData.temperature}°C`;
  document.getElementById(
    "content"
  ).textContent = `feeling: ${inputData.feeling}`;
};

//Execution:
//add eventlistener to button generate
//to execute and process the requests and update the UI on click
document.getElementById("generate").addEventListener("click", async () => {
  console.log("Button clicked!");

  // Create a new date instance dynamically with JS
  let d = new Date();
  let newDate = `${d.getMonth() + 1}.${d.getDate()}.${d.getFullYear()}`;
  console.log("New date is: " + newDate);

  //get user input from html elements
  const cityZipCode = document.getElementById("zip").value || myZIP;
  const feeling =
    document.getElementById("feelings").value || "Everything is fine";
  console.log("New feeling is: " + feeling);

  //update url for OpenWeatherMap request
  urlOpenWeatherMap = `http://api.openweathermap.org/data/2.5/weather?zip=${cityZipCode}&appid=${myApiKey}&units=metric`;

  //get weather data
  const weatherData = await getData(urlOpenWeatherMap);
  console.log(weatherData);
  weatherData.main
    ? console.log("Weather data is fine")
    : console.log("Bad weather data");

  fetch("http://localhost:5050/test")
    .then((res) => res.json())
    .then(function (res) {
      console.log("Result from server is: " + res.message);
      //document.getElementById("results").innerHTML = res.message;
    });

  //create a data object containing current date, feeling and temperature
  let dataObject = {
    date: newDate,
    feel: feeling,
    temp: weatherData.main ? weatherData.main.temp : "?",
  };

  /*   let dataObject = {
    today: newDate,
    feeling: feeling,
    temperature: weatherData.main ? weatherData.main.temp : "?",
  }; */

  //server calls
  let msgFromServer = await postData("/postData", dataObject);
  console.log(`Message from server: ${msgFromServer}`);
  let dataFromServer = await getData("/getData");
  console.log(`dataFromServer: ${dataFromServer}`);

  //update UI with data from server
  //updateUI(dataObject);
  updateUI(dataFromServer);
});
