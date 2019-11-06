let Weather;

fetch('https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
    .then(response => response.json())
    .then(data => Weather = data );

export default Weather;


