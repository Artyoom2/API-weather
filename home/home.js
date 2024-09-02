const apiKey = 'ce1b39de51a53bcebb37bda533489aa6';
const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');
const weatherIcon = document.querySelector('.weather-image i')
const weather = document.querySelector('.weather')
const error = document.querySelector('.error')
async function searchWeather(city) {
	const data = await fetch(url + city + `&appid=${apiKey}`)
	if(data.status == 404) {
		error.style.display = 'block'
		weather.style.display = 'none';
	}
	const response = await data.json()
	console.log(response);
	document.querySelector('.city').innerHTML = response.name
	document.querySelector('.temp').innerHTML = 
	Math.round(response.main.temp) + '&#8451';
	document.querySelector('.humidity').innerHTML = response.main.humidity + '%';
	document.querySelector('.wind').innerHTML = Math.round(response.wind.speed) + 'km / h';

	if(response.weather[0].main === 'Clear') {
		weatherIcon.className = 'fa-solid fa-sun'
	}
	if(response.weather[0].main === 'Mist') {
		weatherIcon.className = 'fa-solid fa-cloud-mist'
	}
	if(response.weather[0].main === 'Rain') {
		weatherIcon.className = 'fa-solid fa-cloud-rain'
	}
	if(response.weather[0].main === 'Drizzle') {
		weatherIcon.className = 'fa-solid fa-cloud-drizzle'
	}
	weather.style.display = 'block'
	error.style.display = 'none'
	
}
searchButton.addEventListener('click', handlerClick)
function handlerClick(e) {
	searchWeather(searchInput.value)
	searchInput.value = ''
}