async function getCoordinates(city) {
  const baseUrl = "http://api.geonames.org/searchJSON?q=";

  //dotenv to access our key
  const dotenv = require("dotenv");
  dotenv.config();

  // geonames requests username instead of key for access
  const username = process.env.KEY_GEO;
  const fetch = require("node-fetch");

  // fetch the data
  const res = await fetch(`${baseUrl}${city}&maxRows=10&username=${username}`);
  try {
    //read data and return the results
    const resultObject = await res.json();
    const lng = resultObject.geonames[0].lng;
    const lat = resultObject.geonames[0].lat;
    return [lng, lat];
  } catch (error) {
    console.log("error", error);
  }
}
module.exports = getCoordinates;
