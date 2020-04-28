async function getImage(city) {
  const baseUrl = "https://pixabay.com/api/?key=";

  //dotenv to access our key
  const dotenv = require("dotenv");
  dotenv.config();

  const keyPixa = process.env.KEY_PIXABAY;

  // fetch the data
  const fetch = require("node-fetch");
  const res = await fetch(`${baseUrl}${keyPixa}&q=${city}`);
  try {
    //read data and return the results
    const data = await res.json();
    const imageurl = data.hits[0].largeImageURL;
    return imageurl;
  } catch (error) {
    console.log("error", error);
  }
}
module.exports = getImage;
