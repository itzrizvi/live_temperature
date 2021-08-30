const onLoadDefault = () => {
    const myApiKey = `91105755f287ef850ce43c786caf3a00`;
    const apiURLforDefault = `https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${myApiKey}`;

    fetch(apiURLforDefault)
        .then(res => res.json())
        .then(data => defaultWeather(data));
}

const defaultWeather = (data) => {
    const tempKelvinToCelcius = parseFloat(data.main.temp) - 273.15;
    const mainTemp = tempKelvinToCelcius.toFixed(2);

    const templFLKelToCel = parseFloat(data.main.feels_like) - 273.15;
    const mainFeelsLike = templFLKelToCel.toFixed(2);

    const weatherOutputCont = document.getElementById('weather-output');
    weatherOutputCont.innerHTML =
        `   <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1>${data.name}</h1>
            <h3><span>${mainTemp}</span>&deg;C</h3>
            <h3>Feels Like <span>${mainFeelsLike}</span>&deg;C</h3>
            <h1 class="lead">${data.weather[0].description.toUpperCase()}</h1>
        `;
}
const loadApi = () => {
    const getCityInput = document.getElementById('city-name');
    const getCityName = getCityInput.value.toLowerCase();
    getCityInput.value = '';
    const myApiKey = `91105755f287ef850ce43c786caf3a00`;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${getCityName}&appid=${myApiKey}`;

    fetch(apiURL)
        .then(response => response.json())
        .then(weatherdata => showWeatherData(weatherdata));
}
const showWeatherData = (weatherData) => {
    const tempKelvinToCelcius = parseFloat(weatherData.main.temp) - 273.15;
    const mainTemp = tempKelvinToCelcius.toFixed(2);

    const templFLKelToCel = parseFloat(weatherData.main.feels_like) - 273.15;
    const mainFeelsLike = templFLKelToCel.toFixed(2);

    const weatherOutputCont = document.getElementById('weather-output');
    weatherOutputCont.innerHTML =
        `   <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="">
            <h1>${weatherData.name}</h1>
            <h3><span>${mainTemp}</span>&deg;C</h3>
            <h3>Feels Like <span>${mainFeelsLike}</span>&deg;C</h3>
            <h1 class="lead">${weatherData.weather[0].description.toUpperCase()}</h1>
        `;
}
