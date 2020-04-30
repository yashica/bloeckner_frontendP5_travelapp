import { handleSubmit } from "./js/app";
import { updateUI } from "./js/updateUI";

import "./js/app.js";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/form.scss";
import "./styles/results.scss";

document.addEventListener("DOMContentLoaded", () => {
  //add event listener to the submit button
  const submitbutton = document.getElementById("submit");
  submitbutton.addEventListener("click", handleSubmit);
});

export { updateUI };
