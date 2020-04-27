import updateUI from "./updateUI";
const submitbutton = document.getElementById("submit");

submitbutton.addEventListener("click", async function () {
  const departtime =
    new Date(document.getElementById("myDate").value).getTime() / 1000;
  const returntime =
    new Date(document.getElementById("backDate").value).getTime() / 1000;
  const currenttime = Math.round(new Date().getTime() / 1000);
  const timeLeft = parseInt((departtime - currenttime) / (3600 * 24));
  const duration = parseInt((returntime - departtime) / (3600 * 24));
  /*   const postData = async (url = "", data = {}) => {
    const res = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  }; */

  const myCity = "Munich"; //initial value
  const city = document.getElementById("myCity").value || myCity;

  const clientInfo = {
    departtime: departtime,
    currenttime: currenttime,
    city: city,
    timeLeft: timeLeft,
    duration: duration,
  };

  postData("/postData", clientInfo).then((data) => updateUI());
  //postData("http://localhost:5050/dataPost", clientInfo).then((data) =>
  //  updateUI()
  //);
});

//async GET request
export const getData = async (url) => {
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
export const postData = async (url = "", data = {}) => {
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

/* import updateUI from "./updateUI";

//trigger action when submitbutton is clicked
const submitbutton = document.getElementById("submit");
submitbutton.addEventListener("click", async function () {
  //get user input from html elements and calculate dependent values
  const departtime =
    new Date(document.getElementById("myDate").value).getTime() / 1000;
  const returntime =
    new Date(document.getElementById("backDate").value).getTime() / 1000;
  const currenttime = Math.round(new Date().getTime() / 1000);
  const timeleft = parseInt((departtime - currenttime) / (3600 * 24));
  const duration = parseInt((returntime - departtime) / (3600 * 24));

  const myCity = "Munich"; //initial value
  //const cityZipCode = document.getElementById("zip").value || myZIP;
  const city = document.getElementById("myCity").value || myCity;

  console.log(
    `
    departtime: ${departtime},
    currenttime: ${currenttime},
    city: ${city},
    future: ${timeleft},
    duration: ${duration}
    `
  );

  const clientData = {
    departtime: departtime,
    currenttime: currenttime,
    city: city,
    future: timeleft,
    duration: duration,
  };

  const postData = async (url = "", data = {}) => {
    const res = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  };

  const clientInfo = {
    departtime: departtime,
    currenttime: currenttime,
    city: document.getElementById("myCity").value,
    future: timeleft,
    duration: duration,
  };

  postData("http://localhost:5050/dataPost", clientInfo).then((data) =>
    updateUI()
  );
});

//async GET request
export const getData = async (url) => {
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
export const postData = async (url = "", data = {}) => {
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
}; */

/* export const updateUI = (inputData) => {
  document.getElementById("date").textContent = `date: ${inputData.today}`;
  document.getElementById(
    "temp"
  ).textContent = `temperature: ${inputData.temperature}°C`;
  document.getElementById(
    "content"
  ).textContent = `feeling: ${inputData.feeling}`;
}; */

//Execution:
//add eventlistener to button generate
//to execute and process the requests and update the UI on click
//document.getElementById("generate").addEventListener("click", async () => {

/* export async function handleClick(event) {
  event.preventDefault();

  console.log("Button clicked!");

  const myZIP = 10001; //somewhwere in New York
  const myApiKey = "e3fc7bbc056d167d99d73a964e1efc27";
  //let cityZipCode = myZIP;
  let urlOpenWeatherMap = `http://api.openweathermap.org/data/2.5/weather?zip=${myZIP}&appid=${myApiKey}&units=metric`;

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

  //server calls
  let msgFromServer = await postData("/postData", dataObject);
  console.log(`Message from server: ${msgFromServer}`);
  let dataFromServer = await getData("/getData");
  console.log(`dataFromServer: ${dataFromServer}`);

  //update UI with data from server
  //updateUI(dataObject);
  updateUI(dataFromServer);
} */
