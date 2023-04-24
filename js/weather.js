/*  __      __        _   _            
//  \ \    / /__ __ _| |_| |_  ___ _ _ 
//  \ \/\/ / -_) _` |  _| ' \/ -_) '_|
//  \_/\_/\___\__,_|\__|_||_\___|_|  
*/
const weather = {};
weather.temperature = {
	unit: 'celsius',
};

const weatherIcons = {
	0: 0,
	1: 1,
	2: 2,
	3: 3,
	45: 45,
	51: 51,
	53: 51,
	55: 51,
	56: 51,
	57: 51,
	61: 51,
	63: 51,
	65: 51,
	66: 51,
	67: 51,
	71: 71,
	73: 71,
	75: 71,
	77: 77,
	80: 51,
	81: 51,
	82: 51,
	85: 85,
	86: 85,
	95: 95,
	96: 95,
	99: 95,
};

const weatherDescriptions = {
	0: 'Clear',
	1: 'Mostly clear',
	2: 'Partly cloudy',
	3: 'Mostly cloudy',
	45: 'Fog',
	51: 'Drizzle',
	53: 'Light rain',
	55: 'Rain',
	56: 'Rain',
	57: 'Heavy rain',
	61: 'Light snow',
	63: 'Snow',
	65: 'Heavy snow',
	66: 'Snow shower',
	67: 'Heavy snow shower',
	71: 'Thunderstorm',
	73: 'Thunderstorm',
	75: 'Thunderstorm',
	77: 'Thunderstorm',
	80: 'Light rain shower',
	81: 'Rain shower',
	82: 'Heavy rain shower',
	85: 'Light snow shower',
	86: 'Snow shower',
	95: 'Thunderstorm',
	96: 'Thunderstorm',
	99: 'Thunderstorm',
};

const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');
const width = screen.width > 1101;

if (width) {
	navigator.geolocation.getCurrentPosition(
		pos => {
		  let api = `https://api.open-meteo.com/v1/forecast?latitude=${pos.coords.latitude.toFixed(3)}&longitude=${pos.coords.longitude.toFixed(3)}&current_weather=true`;
		  fetch(api)
			.then(response => response.json())
			.then(data => {
			  weather.temperature.value = data.current_weather.temperature;
			  weather.iconId = data.current_weather.weathercode;
			  weather.is_day = data.current_weather.is_day;
			  displayWeather();
			})
			.catch(err => {
			  console.error(err);
			  getWeather(49, 11.5);
			});
		},
		err => {
		  console.error(err);
		  getWeather(49, 11.5);
		}
	  );
}

function displayWeather() {
	if (!weather.is_day == 1) {
		iconElement.innerHTML = `<img src="assets/icons/Nord/${weatherIcons[weather.iconId]}n.png"/>`;
	}
	else {
		iconElement.innerHTML = `<img src="assets/icons/Nord/${weatherIcons[weather.iconId]}.png"/>`;
	}
	tempElement.innerHTML = Math.round(weather.temperature.value) + ' °C';
	descElement.textContent = weatherDescriptions[weather.iconId];
}
