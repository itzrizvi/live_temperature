const onLoadDefault = () => {
    const myApiKey = `91105755f287ef850ce43c786caf3a00`;
    const apiURLforDefault = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${myApiKey}&units=metric`;

    fetch(apiURLforDefault)
        .then(res => res.json())
        .then(data => defaultWeather(data));
}

const defaultWeather = (data) => {
    const weatherOutputCont = document.getElementById('weather-output');
    weatherOutputCont.innerHTML =
        `   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${data.main.temp}</span>&deg;C</h3>
            <h3>Feels Like <span>${data.main.feels_like}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].description.toUpperCase()}</h1>
        `;
}
const loadApi = () => {
    const getCityInput = document.getElementById('city-name');
    const getCityName = getCityInput.value.toLowerCase();
    getCityInput.value = '';
    const myApiKey = `91105755f287ef850ce43c786caf3a00`;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${getCityName}&appid=${myApiKey}&units=metric`;

    fetch(apiURL)
        .then(response => response.json())
        .then(weatherdata => showWeatherData(weatherdata));
}
const showWeatherData = (weatherData) => {
    const weatherOutputCont = document.getElementById('weather-output');
    weatherOutputCont.innerHTML =
        `   <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="">
            <h1>${weatherData.name}</h1>
            <h3><span>${weatherData.main.temp}</span>&deg;C</h3>
            <h3>Feels Like <span>${weatherData.main.feels_like}</span>&deg;C</h3>
            <h1 class="lead">${weatherData.weather[0].description.toUpperCase()}</h1>
        `;
}
