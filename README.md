<h1>Weather App</h1>

<p>
A simple weather application that allows users to search for real-time weather data for any city. 
The project focuses on working with external APIs, asynchronous JavaScript, and dynamic DOM updates to present live weather information in a clean, minimal interface.
</p>

---

<h2>Tech Stack</h2>

<ul>
<li><strong>HTML5</strong> – semantic page structure</li>
<li><strong>CSS3</strong> – custom styling with CSS variables</li>
<li><strong>JavaScript (ES6)</strong> – async functions, DOM manipulation, fetch API</li>
<li><strong>WeatherAPI</strong> – external API for live weather data</li>
<li><strong>LocalStorage</strong> – persists the last searched city</li>
<li><strong>Google Fonts</strong> – Archivo typeface</li>
</ul>

---

<h2>Features</h2>

<ul>
<li>Search for current weather by city name</li>
<li>Displays temperature, condition, humidity, wind speed, and weather icon</li>
<li>Clean weather card layout for results</li>
<li>Error handling for invalid city searches</li>
<li>Loading and status messages for better UX</li>
<li>Saves the last searched city using <strong>LocalStorage</strong></li>
<li>Automatically loads the previous city on page refresh</li>
</ul>

---

<h2>How It Works</h2>

<p>
The application sends a request to the WeatherAPI endpoint using the <code>fetch()</code> API. 
When a user searches for a city:
</p>

<ol>
<li>The input is validated to ensure a city name has been entered.</li>
<li>A request is sent to the WeatherAPI <code>current.json</code> endpoint.</li>
<li>The response data is parsed and used to update the DOM.</li>
<li>The weather card is displayed with the returned data.</li>
<li>The city is stored in <code>localStorage</code> so the last search persists between sessions.</li>
</ol>

---

<h2>Project Structure</h2>

<pre>
weather-app
│
├── index.html      # Main application layout
├── styles.css      # Styling and layout
├── script.js       # API logic and DOM manipulation
└── README.md
</pre>

---

<h2>Example Data Displayed</h2>

<ul>
<li>City and country</li>
<li>Temperature (°C)</li>
<li>Weather condition</li>
<li>Humidity percentage</li>
<li>Wind speed (kph)</li>
<li>Weather condition icon</li>
</ul>

---

<h2>Future Improvements</h2>

<ul>
<li>Add 5-day forecast support</li>
<li>Allow temperature unit switching (°C / °F)</li>
<li>Add search history</li>
<li>Improve mobile layout</li>
<li>Add loading spinner instead of text message</li>
</ul>

---

<h2>Why I Built This</h2>

<p>
This project was built while learning how to work with APIs and asynchronous JavaScript. 
The goal was to practise retrieving external data, handling responses and errors properly, and updating the UI dynamically without reloading the page.
</p>

<p>
It also gave me the opportunity to work with browser storage and structure a small front-end project in a clean, maintainable way.
</p>

---

<h2>Running the Project</h2>

<ol>
<li>Clone the repository</li>
<li>Open <code>index.html</code> in your browser</li>
<li>Enter a city and search for the current weather</li>
</ol>

---

<h2>Author</h2>

<p>
<strong>Nate Rufenacht</strong><br>
Aspiring Web Developer transitioning into tech and building practical projects with JavaScript, APIs, and modern web tools.
</p>