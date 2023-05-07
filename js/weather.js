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
	0: 'Klarer Himmel',
	1: 'Überwiegend klar',
	2: 'Teilweise bewölkt',
	3: 'Bedeckt',
	45: 'Nebel',
	48: 'Rauhreif-Nebel',
	51: 'Leichter Nieselregen',
	53: 'Mäßiger Nieselregen',
	55: 'Starker Nieselregen',
	56: 'Leichter gefrierender Nieselregen',
	57: 'Starker gefrierender Nieselregen',
	61: 'Leichter Regen',
	63: 'Mäßiger Regen',
	65: 'Starker Regen',
	66: 'Leichter gefrierender Regen',
	67: 'Starker gefrierender Regen',
	71: 'Leichter Schneefall',
	73: 'Mäßiger Schneefall',
	75: 'Starker Schneefall',
	77: 'Schneekörner',
	80: 'Leichter Regenschauer',
	81: 'Mäßiger Regenschauer',
	82: 'Starker Regenschauer',
	85: 'Leichter Schneeschauer',
	86: 'Starker Schneeschauer',
	95: 'Leichtes oder mäßiges Gewitter',
	96: 'Leichtes oder mäßiges Gewitter mit Hagel',
	99: 'Starkes Gewitter mit Hagel'
  };

const iconElement = document.querySelector('.weatherIcon');
const tempElement = document.querySelector('.weatherValue p');
const descElement = document.querySelector('.weatherDescription p');
const width = screen.width > 1101;

function getWeather() {
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
		});
	}
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
getWeather();
setInterval(getWeather, 300000);