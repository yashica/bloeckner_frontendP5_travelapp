async function getWeather(lng, lat) {
  const baseURLDark = "https://api.darksky.net/forecast/";
  const dotenv = require("dotenv");
  dotenv.config();
  //const Darkapikey = process.env.DARK;
  //const fetch = require('node-fetch');
  //const res = await fetch(`${baseURLDark}${Darkapikey}/${lat},${lng}`)
  /* try {
        const data = await res.json();
        const weathersummary = data.currently.summary;
        const temperature = data.currently.temperature;
        return [weathersummary, temperature];
    } catch (error) {
        console.log("error", error);
    } */
  const weathersummary = "The weather is fine";
  const temperature = 36;
  return [weathersummary, temperature];
}
module.exports = getWeather;
