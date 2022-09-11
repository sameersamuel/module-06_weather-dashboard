// 16 day API url 
// 3.0 OneCall API https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
// 73713d092fbc2614296bf3acc8509c6a
// geocoding url http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&http://api.openweathermap.org/geo/1.0/direct?{API key}
var geoCodingUrl = 'http://api.openweathermap.org/geo/1.0/direct?q='
var sixteen_url = 'api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={API key}';
var myApiKey = '73713d092fbc2614296bf3acc8509c6a';

var searchBtn = document.querySelector('#button');
var inputValue = document.querySelector('#inputValue');
var name = document.querySelector('#name');
var desc = document.querySelector('#desc');

var temp = document.querySelector('#temp');
var lat,lon;
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
      .catch(err => alert('Wrong city name!'))
};

button.addEventListener('click', function() {
    //get cooridinates from openweather
    var city = inputValue.value
    getCoordinates (city)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${myApiKey}`)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => alert('Wrong city name!'))
});



// async function loadIntoTable(url, table) {
//   const tableHead = table.querySelector('thead')
//   const tableBody = table.querySelector('tbody');
//   const response = await 

// }

// loadIntoTable('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=73713d092fbc2614296bf3acc8509c6a', document.querySelector('table'));

