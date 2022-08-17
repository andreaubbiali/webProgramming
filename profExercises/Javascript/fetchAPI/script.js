
// FETCH REQUEST

async function getWeather(){
let response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4642&lon=9.19&appid=e21c453d380f0ca1bc5d071698438e15&units=metric",{
method:"GET"
});

let jsonObj = await response.json();
console.log(jsonObj);
document.getElementById('weather-temp').innerText= jsonObj.main.temp + "°";
}

getWeather();



// // AJAX REQUEST

// function load(jsonObj){

//     console.log(jsonObj);
//     document.getElementById('weather-temp').innerText= jsonObj.main.temp + "°";      
// }

// function success(){
// 	var data = JSON.parse(this.responseText);
// 	console.log('Ricevo:', this.status);
// 	console.log('da:', this.responseURL);
// 	load(data)
// };


// function error(err){
// 	console.log('An Error:', err)
// };

// var xhr = new XMLHttpRequest();
// console.log(xhr);
// xhr.onload = success;
// xhr.onerror = error;
// xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=45.4642&lon=9.19&appid=e21c453d380f0ca1bc5d071698438e15&units=metric')
// xhr.send();