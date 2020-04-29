async function getWeather(lng, lat, timeLeft) {
  if (timeLeft < 0) {
    timeLeft = 0;
  } //avoid wrong index errors

  //weatherbit offers us forecast for 16 days
  //if the trip starts in more than 16 day, we use the current weather api
  const baseUrl =
    "https://api.weatherbit.io/v2.0/" +
    (timeLeft < 16 ? "forecast/daily" : "current");

  //dotenv to access our key
  const dotenv = require("dotenv");
  dotenv.config();
  const keyWeatherbit = process.env.KEY_WEATHERBIT;

  // construct the url to fetch from
  const fetchString = `${baseUrl}?lat=${lat}&lon=${lng}&key=${keyWeatherbit}`;
  console.log(`getWeather: fetchString = ${fetchString}`);

  // fetch the data
  const fetch = require("node-fetch");
  const res = await fetch(fetchString);

  try {
    const resultObject = await res.json();

    // retrieve the weather data of one day
    const dataIndex = timeLeft < 16 ? timeLeft : 0;
    const dataOfOneDay = resultObject.data[dataIndex];

    // retrieve and return temperature and weather description of this day
    const description = dataOfOneDay.weather.description;
    const temperature = dataOfOneDay.temp;
    return [description, temperature];
  } catch (error) {
    console.log("Error in getWeather ", error);
  }
}
module.exports = getWeather;
