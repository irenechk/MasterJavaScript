async function getWeather() {
  try {
    const city = document.getElementById("cityInput").value;

    if (!city) {
      alert("Please enter a city name");
      return;
    }

    const url = `https://wttr.in/${city}?format=j1`;

    const response = await fetch(url);
    const data = await response.json();

    const temp = data.current_condition[0].temp_C;
    const desc = data.current_condition[0].weatherDesc[0].value;
    const humidity = data.current_condition[0].humidity;

    document.getElementById("result").innerHTML =
      `Weather of <b>${city}</b><br>
       🌡 Temperature: ${temp}°C <br>
       ☁ Condition: ${desc} <br>
       💧 Humidity: ${humidity}%`;

  } catch (error) {
    console.log("Error:", error);
    document.getElementById("result").innerHTML = "Failed to fetch weather.";
  }
}