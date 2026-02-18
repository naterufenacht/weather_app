const API = "https://api.weatherapi.com/v1/current.json";
const API_KEY = "a33c18ffc4704a42806140326261802"; // From weatherapi.com

function showMessage(msg, type = "success") {
    const messageEl = document.getElementById("message");
    messageEl.innerText = msg;
    messageEl.className = type;
}

async function searchWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        showMessage("Please enter a city name", "error");
        return;
    }

    loadWeather(city);
}

async function loadWeather(cityName) {
    const url = `${API}?key=${API_KEY}&q=${cityName}&aqi=no`;

    try {
        showMessage("Loading weather...", "success");

        const response = await fetch(url);
        const data = await response.json();

        console.log("WeatherAPI Response:", data);

        if (data.error) {
            throw new Error(data.error.message);
        }

        displayWeather(data);

    } catch (error) {
        showMessage(`Error: ${error.message}`, "error");
        console.error("Weather API Error:", error);
    }
}

function displayWeather(data) {
    const card = document.getElementById("weatherCard");
    card.style.display = "block";

    document.getElementById("location").innerText =
        `${data.location.name}, ${data.location.country}`;

    document.getElementById("temperature").innerText =
        `Temperature: ${data.current.temp_c}°C`;

    document.getElementById("condition").innerText =
        `Condition: ${data.current.condition.text}`;

    document.getElementById("humidity").innerText =
        `Humidity: ${data.current.humidity}%`;

    document.getElementById("wind").innerText =
        `Wind Speed: ${data.current.wind_kph} kph`;

    document.getElementById("icon").src =
        `https:${data.current.condition.icon}`;

    showMessage("Weather loaded successfully", "success");
}


function saveLastCity(city) {
    localStorage.setItem("lastCity", city);
}

function loadLastCity() {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
        loadWeather(lastCity);
    }
}

loadLastCity();

