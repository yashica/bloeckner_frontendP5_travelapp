async function getWeather(lng, lat, timeLeft) {
  //const baseURLDark = "https://api.darksky.net/forecast/";

  //weatherbit offers us forecast only for 16 days
  //if the trip starts in more than 16 day, we use the current weather api
  const baseUrl =
    "https://api.weatherbit.io/v2.0/" +
    (timeLeft <= 16 ? "forecast/daily" : "current");

  const dotenv = require("dotenv");
  dotenv.config();
  //const Darkapikey = process.env.KEY_DARK;
  const keyWeatherbit = process.env.KEY_WEATHERBIT;
  console.log(`getWeather: keyWeatherbit = ${keyWeatherbit}`);
  const fetch = require("node-fetch");
  //"https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY"
  //lat=38.123&lon=-78.543
  const fetchString = `${baseUrl}?lat=${lat}&lon=${lng}&key=${keyWeatherbit}`;
  console.log(`getWeather: fetchString = ${fetchString}`);
  const res = await fetch(fetchString);
  /* const res = await fetch(
    `${baseUrl}?lat=${lat},&lon=${lng},&key=${Darkapikey}`
  ); */
  //const res = await fetch(`${baseURLDark}${Darkapikey}/${lat},${lng}`);
  try {
    const data = await res.json();
    console.log("getWeather: result data = ");
    console.log(data);
    const testday = data.data[0];
    console.log("testday" + testday);
    const testTemp = data.data[0].temp;
    console.log("testTemp" + testTemp);
    const testDescr = data.data[0].weather.description;
    console.log("testDescr" + testDescr);

    const weathersummary = testDescr;
    const temperature = testTemp;
    //const weathersummary = data.currently.summary;
    //const temperature = data.currently.temperature;
    return [weathersummary, temperature];
  } catch (error) {
    console.log("error", error);
  }
  //return ["WEATHER ERROR", 66];
}
module.exports = getWeather;
