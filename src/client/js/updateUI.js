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

    // if the trip starts within the next 16 days, we can display a forecast for the day of arrival
    // if the trip starts later, we display the weather of today
    // We display a different caption for these two cases.
    const weathercaption =
      result.timeLeft < 16
        ? `Weather forecast for the day of arrival`
        : `Current weather in${result.city}`;

    // Update UI: Set result text
    document.getElementById("result_text").innerHTML = `
        <h3>Your Trip to ${result.city}</h3>
        <p>Your trip to ${result.city} will start in ${result.timeLeft} days.</p>
        <p>You will stay in ${result.city} for ${result.duration} days.</p>
        </br>
        <h3>${weathercaption}</h3>
        <p>Weather: ${result.summary}</p>
        <p>Temperature: ${result.temperature}°C.</p>
        
        `;
  } catch (error) {
    console.log("error", error);
  }
}

export { updateUI };
//module.exports = updateUI;
