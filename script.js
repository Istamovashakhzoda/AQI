/*
Details:

Current U.S AQI EPA(Environmental Protection Agency) format, PM(Particle Matter) 2.5, Live Data, Nearest Station based off Geolocation. Made using Vanilla HTML,CSS & JS. PM SVG(Scalable Vector Graphic) made using Figma and a Degree Calculation Formula for AQI Animation The AQI values range from 0 to 500, and the indicator's animation is circular. The formula takes an AQI value, divides it by 500, and then scales the result to fit within a range of 5 to 355 degrees (which corresponds to the circular indicator's correct position relative to the current AQI ).Open to Suggestion,Questions,Feedback. Thanks.

API info:

Free API key  can be found at:
https://www.iqair.com/commercial-air-quality-monitors/api
The free option alllows 10,000 calls/monthy.
*/
/*EXAMPLE START 
AQI and DEG Stats Calculations Shown in Console
*/
const currentAqi = document.getElementById("current-aqi");
const indicator = document.getElementById("indicator");

function calculateValue(aqi) {
  return (aqi / 500) * 350 + 5;
}

let aqi = 0;
let deg = calculateValue(aqi);
let intervalId;

function updateValues() {
  aqi++;
    deg = calculateValue(aqi);
    console.log(`AQI: ${aqi}, DEG: ${deg.toFixed(2)}`);
    currentAqi.innerText= aqi;
  indicator.style.rotate =`${deg}deg`;
//current AQI simulation number 137
  if (aqi === 128) {
    clearInterval(intervalId);
  }
}

intervalId = setInterval(updateValues, 100);
/*EXAMPLE END*/

/*
// DOM elements
const currentAqi = document.getElementById("current-aqi");
const indicator = document.getElementById("indicator");
// API key
const key = "YOUR API KEY HERE";
// Geolocation coordinates
let latitude;
let longitude;

// Function to update geolocation
function updateGeolocation(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
}

// Check if geolocation is available
function checkGeolocation() {
  if ("geolocation" in navigator) {
    // Get the current geolocation
    navigator.geolocation.getCurrentPosition(updateGeolocation);
  } else {
    console.log("Geolocation is not available.");
  }
}

// Fetch data from the API
function fetchData() {
  const apiUrl = `https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=${key}`;
  // Fetch data from the API
  fetch(apiUrl).then(handleResponse).then(processData).catch(handleError);
}

// Handle response from API
function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json(); // Parse the response as JSON
}

// Process data and update values
function processData(data) {
  const calculateValue = (aqi) => (aqi / 500) * 350 + 5;
  let aqi = 0;
  let result = calculateValue(aqi);
  let intervalId;

  // Update AQI values and rotation
  function updateValues() {
    console.log(`AQI: ${aqi}, DEG: ${result}`);

    // Update the AQI display using SVG code
    currentAqi.innerHTML = `${aqi}<br>`;

    // Update the rotation of the indicator
    indicator.style.rotate = `${result}deg`;

    // Increment AQI and calculate corresponding rotation
    aqi += 1;
    result = calculateValue(aqi);

    // Check if the target AQI has been reached
    if (aqi > data.data.current.pollution.aqius) {
      clearInterval(intervalId);
    }
  }

  // Set interval for updating values
  intervalId = setInterval(updateValues, 100);
}

// Handle errors during data fetching
function handleError(error) {
  console.error("Fetch error:", error);
}

// Initiate data retrieval and updates
function initializeApp() {
  checkGeolocation();
  fetchData();
}

// Call the initializeApp function
initializeApp();
*/