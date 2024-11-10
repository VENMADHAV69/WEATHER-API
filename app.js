const apiKey = '6abf9c0b190f50e32c7d7e5c340d154b'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('city').value;
    const weatherInfoDiv = document.getElementById('weather-info');
    
    if (!city) {
        alert('Please enter a city name!');
        return;
    }

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(`Fetching weather data from: ${apiURL}`);
    try {
        const response = await fetch(apiURL);
        const data = await response.json();

        if (data.cod === 200) {
            weatherInfoDiv.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp} °C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        } else {
            weatherInfoDiv.innerHTML = `<p>City not found. Please try again.</p>`;
        }
    } catch (error) {
        weatherInfoDiv.innerHTML = `<p>Error fetching weather data. Please try again later.</p>`;
    }
}
