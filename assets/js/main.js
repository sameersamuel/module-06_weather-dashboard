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
var forcastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=';
var searchBtn = document.querySelector('#button');
var inputValueEl = document.querySelector('#inputValue');
var nameEl = document.querySelector('#name');
var dateEl = document.querySelector('#date');
var tempEl = document.querySelector('#temp');
var cityEl = document.querySelector('#city');
var stateEl = document.querySelector('#state');
var windspeedEl = document.querySelector('#windspeed');
var humidityEl = document.querySelector('#humidity');
var lat,lon;




function fetchForecast () {
  fetch(`${forcastUrl}${lat}&lon=${lon}&units=imperial&appid=${myApiKey}`)
  .then(response => response.json())
      .then(data => {
        console.log(data);
        displayForecast(city, data)
        
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
        // stateEl.innerText = "State: " + data.; <-- see line 92
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myApiKey}`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          displayCurrentWeather(city, data)
          fetchForecast ();
        })
        .catch(err => console.log(err))
        });
      };
        

          
         



function displayCurrentWeather (city, data) {

  var temp, humidity, windSpeed, weatherIcon;
  temp = Math.floor ((data.main.temp- 273.15) * 1.8 +32);
  tempEl.innerText = "Temp: " + temp + "°F" ;
  console.log("data = ", data);

  humidity = data.main.humidity;
  console.log(data.main);
  console.log(humidity);
  humidityEl.innerText = "Humidity: " + humidity + "%";
  windSpeed = data.wind.speed;
  windspeedEl.innerText = "Wind: " + windSpeed + "mph";
  cityEl.innerText = "City: " + data.name;
  // stateEl.innerText = "State: " + data.main[0].state; <--- find path to State
  dateEl.innerText = new Date(data.dt*1000);
 
}

function displayForecast (city, data) {
  //display forecast for day 1
  //grab the elements for day 1
  tempEl = document.getElementById('temp-1');
  humidityEl = document.getElementById('humidity-1');
  windspeedEl = document.getElementById('windspeed-1');
  dateEl = document.getElementById('date-1');
  weatherEl = document.getElementById('weather-1');
  var temp, humidity, windSpeed, weatherIcon;
  console.log('data= ', data);
  temp = data.list[0].main.temp;
  tempEl.innerText = "Temp: " + temp + "°F" ;
  console.log(temp);

  humidity = data.list[0].main.humidity;
  
  console.log(humidity);
  humidityEl.innerText = "Humidity: " + humidity + "%";
  windSpeed = data.list[0].wind.speed;
  windspeedEl.innerText = "Wind: " + windSpeed + "mph";
  
 
  dateEl.innerText = new Date(data.list[0].dt*1000);

  //display forecast for day 2
  //grab the elements for day 2
  tempEl = document.getElementById('temp-2');
  humidityEl = document.getElementById('humidity-2');
  windspeedEl = document.getElementById('windspeed-2');
  dateEl = document.getElementById('date-2');
  weatherEl = document.getElementById('weather-2');
  var temp, humidity, windSpeed, weatherIcon;
  console.log('data= ', data);
  temp = data.list[8].main.temp;
  tempEl.innerText = "Temp: " + temp + "°F" ;
  console.log(temp);

  humidity = data.list[8].main.humidity;
  
  console.log(humidity);
  humidityEl.innerText = "Humidity: " + humidity + "%";
  windSpeed = data.list[8].wind.speed;
  windspeedEl.innerText = "Wind: " + windSpeed + "mph";
  
 
  dateEl.innerText = new Date(data.list[8].dt*1000);
  //display forecast for day 3
  //grab the elements for day 3
  tempEl = document.getElementById('temp-3');
  humidityEl = document.getElementById('humidity-3');
  windspeedEl = document.getElementById('windspeed-3');
  dateEl = document.getElementById('date-3');
  weatherEl = document.getElementById('weather-3');
  var temp, humidity, windSpeed, weatherIcon;
  console.log('data= ', data);
  temp = data.list[16].main.temp;
  tempEl.innerText = "Temp: " + temp + "°F" ;
  console.log(temp);

  humidity = data.list[16].main.humidity;
  
  console.log(humidity);
  humidityEl.innerText = "Humidity: " + humidity + "%";
  windSpeed = data.list[16].wind.speed;
  windspeedEl.innerText = "Wind: " + windSpeed + "mph";
  
 
  dateEl.innerText = new Date(data.list[16].dt*1000);
  //display forecast for day 4
  //grab the elements for day 4
  tempEl = document.getElementById('temp-4');
  humidityEl = document.getElementById('humidity-4');
  windspeedEl = document.getElementById('windspeed-4');
  dateEl = document.getElementById('date-4');
  weatherEl = document.getElementById('weather-4');
  var temp, humidity, windSpeed, weatherIcon;
  console.log('data= ', data);
  temp = data.list[24].main.temp;
  tempEl.innerText = "Temp: " + temp + "°F" ;
  console.log(temp);

  humidity = data.list[24].main.humidity;
  
  console.log(humidity);
  humidityEl.innerText = "Humidity: " + humidity + "%";
  windSpeed = data.list[24].wind.speed;
  windspeedEl.innerText = "Wind: " + windSpeed + "mph";
  
 
  dateEl.innerText = new Date(data.list[24].dt*1000);
  //display forecast for day 5
  //grab the elements for day 5
  tempEl = document.getElementById('temp-5');
  humidityEl = document.getElementById('humidity-5');
  windspeedEl = document.getElementById('windspeed-5');
  dateEl = document.getElementById('date-5');
  weatherEl = document.getElementById('weather-5');
  var temp, humidity, windSpeed, weatherIcon;
  console.log('data= ', data);
  temp = data.list[32].main.temp;
  tempEl.innerText = "Temp: " + temp + "°F" ;
  console.log(temp);

  humidity = data.list[32].main.humidity;
  
  console.log(humidity);
  humidityEl.innerText = "Humidity: " + humidity + "%";
  windSpeed = data.list[32].wind.speed;
  windspeedEl.innerText = "Wind: " + windSpeed + "mph";
  
 
  dateEl.innerText = new Date(data.list[32].dt*1000);
}

button.addEventListener('click', function() {
    //get cooridinates from openweather
    var city = inputValue.value
    console.log(city);
    getCoordinates (city)
   
});
     
  
    





// async function loadIntoTable(url, table) {
//   const tableHead = table.querySelector('thead')
//   const tableBody = table.querySelector('tbody');
//   const response = await 

// }

// loadIntoTable('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=73713d092fbc2614296bf3acc8509c6a', document.querySelector('table'));

