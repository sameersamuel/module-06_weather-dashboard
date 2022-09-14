// var apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${weatherAPIKey}&q=${name}&units=imperial`;
// var apiUrlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=${weatherAPIKey}&q=${name}&units=imperial`;
//   get the forecast, uses lat/lon
// var apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${weatherAPIKey}`;
// let UVQueryURL =

//           "https://api.openweathermap.org/data/2.5/onecall?lat=" +
//           lat +
//           "&lon=" +
//           lon +
//           "&exclude=current,minutely,hourly&appid=" +
//           APIKey;


// 16 day API url 
// 3.0 OneCall API https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// 73713d092fbc2614296bf3acc8509c6a
// geocoding url http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&http://api.openweathermap.org/geo/1.0/direct?{API key}



var geoCodingUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='
var sixteen_url = 'api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={API key}';
var myApiKey = '73713d092fbc2614296bf3acc8509c6a';
// var oneCall30 = 'https://api.openweathermap.org/data/3.0/onecall?lat='; 
var forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=';
var searchBtn = document.querySelector('#button');
var inputValueEl = document.querySelector('#inputValue');
var nameEl = document.querySelector('#name');

var tempEl = document.querySelector('#temp');
var cityEl = document.querySelector('#city');
var windspeedEl = document.querySelector('#windspeed');
var humidityEl = document.querySelector('#humidity');

var lat,lon;


function fetchForecast () {
  fetch(`${forcastUrl}${lat}&lon=${lon}&units=imperial&appid=${myApiKey}`)
  .then(response => response.json())
      .then(data => {
        console.log(data);
      
        
      })
      .catch(err => console.log(err));

}
function getCoordinates (city) {
  fetch(`${geoCodingUrl}${city}&appid=${myApiKey}`)
  .then(response => response.json())
      .then(data => {
        console.log(data);
        lat = data[0].lat;
        console.log(lat);
        lon = data[0].lon;
        console.log(lon);
        
      })
      .catch(err => console.log(err))
};

function displayCurrentWeather (city, data) {

  var temp, humidity, windSpeed, weatherIcon;
  temp = Math.floor ((data.main.temp- 273.15) * 1.8 +32);
  tempEl.innerText = "Temp: " + temp + "F" ;
  console.log(temp);

  humidity = data.main.humidity;
  console.log(data.main);
  console.log(humidity);
  humidityEl.innerText = "Humidity: " + humidity + "%";
  windSpeed = data.wind.speed;
  windspeedEl.innerText = "Wind: " + windSpeed + "mph";
  cityEl.innerText = "City: " + city;



}

button.addEventListener('click', function() {
    //get cooridinates from openweather
    var city = inputValue.value
    console.log(city);
    getCoordinates (city)
    // makeOneCall30();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}`)
      .then(response => response.json())
      .then(data => {
        
        console.log(data)
        displayCurrentWeather(city, data)
        fetchForecast ();
          

      })

      .catch(err => console.log(err))
});





// async function loadIntoTable(url, table) {
//   const tableHead = table.querySelector('thead')
//   const tableBody = table.querySelector('tbody');
//   const response = await 

// }

// loadIntoTable('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=73713d092fbc2614296bf3acc8509c6a', document.querySelector('table'));

