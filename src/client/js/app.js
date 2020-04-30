//get access to input elements
const dateInput_start = document.getElementById("dateInput_start");
const dateInput_back = document.getElementById("dateInput_back");
const cityInput = document.getElementById("cityInput");

//set date inputs to today's date (format: "yyyy-MM-dd")
const d = new Date();
const currentMonth = (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1);
const formattedDate = `${d.getFullYear()}-${currentMonth}-${d.getDate()}`;
console.log(`Today's date = ${formattedDate}`);
//set value to today
dateInput_start.value = formattedDate;
dateInput_back.value = formattedDate;
//Do not allow to pick dates in the past
dateInput_start.setAttribute("min", formattedDate);
dateInput_back.setAttribute("min", formattedDate);

//event listener function for submit button
//(listener ist added to the button in index.js on event "DOMContentLoaded")
async function handleSubmit() {
  console.log("SUBMIT BUTTON WAS CLICKED!");

  //get date input values and do time calculations
  const departtime = new Date(dateInput_start.value).getTime() / 1000;
  const returntime = new Date(dateInput_back.value).getTime() / 1000;
  const timeNow = Math.round(new Date().getTime() / 1000);
  const timeLeft = parseInt((departtime - timeNow) / (3600 * 24));
  const duration = parseInt((returntime - departtime) / (3600 * 24));

  //city input
  const myCity = "Munich"; //initial value
  const city = cityInput.value || myCity;

  // data object to pass client data to server
  const clientDataObject = {
    departtime: departtime,
    city: city,
    timeLeft: timeLeft,
    duration: duration,
  };

  // do post request with client data to server
  // and then update UI with returned values
  postData("/postData", clientDataObject).then((data) => Client.updateUI());
}

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

export { handleSubmit };
