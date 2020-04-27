async function getWeather(lng, lat) {
  const baseURLDark = "https://api.darksky.net/forecast/";
  const dotenv = require("dotenv");
  dotenv.config();
  const Darkapikey = process.env.KEY_DARK;
  const fetch = require("node-fetch");
  const res = await fetch(`${baseURLDark}${Darkapikey}/${lat},${lng}`);
  try {
    const data = await res.json();
    const weathersummary = data.currently.summary;
    const temperature = data.currently.temperature;
    return [weathersummary, temperature];
  } catch (error) {
    console.log("error", error);
  }
}
module.exports = getWeather;
