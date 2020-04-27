async function updateUI() {
  // fetch data from server
  const req = await fetch("/all");

  try {
    // get result
    const result = await req.json();

    // Update UI: Set result image
    document.getElementById(
      "result_image"
    ).innerHTML = `<figure id="cityimage"><img src="${result.imageurl}" alt="A picture of ${result.city}" ><figcaption>${result.city}</figcaption></figure>`;

    // Update UI: Set result text
    document.getElementById("result_text").innerHTML = `
        <h3>Your Trip to ${result.city}</h3>
        <p>Your trip to ${result.city} will start in ${result.timeLeft} days.</p>
        <p>You will stay in ${result.city} for ${result.duration} days.</p>
        </br>
        <h3>Weather forecast for the day of arrival</h3>
        <p>Temperature in ${result.city}: ${result.temperature}°C.</p>
        <p>Weather: ${result.summary}</p>
        `;
  } catch (error) {
    console.log("error", error);
  }
}
module.exports = updateUI;
