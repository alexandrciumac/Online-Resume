var request = new XMLHttpRequest()

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=51.51&lon=-0.13&APPID=11c50404b4fe1ddf6ea079ca87dd541c', true)
request.onload = function() {
	  // Begin accessing JSON data here
	  var name = JSON.parse(this.response).name;
	  var temp = JSON.parse(this.response).main.temp;
	  var hum = JSON.parse(this.response).main.humidity;
	  var wind = JSON.parse(this.response).wind.speed;
	  temp -= 273; // Преводим из Келтса в Цельсий
	  tempFixed = temp.toFixed();
	document.getElementById("name").innerHTML = name;
	document.getElementById("temp").innerHTML = tempFixed;
	document.getElementById("hum").innerHTML = hum;
	document.getElementById("wind").innerHTML = wind;
}
request.send();

var request = new XMLHttpRequest()

request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=47.01&lon=28.86&APPID=11c50404b4fe1ddf6ea079ca87dd541c', true)
request.onload = function() {
	  // Begin accessing JSON data here
	  var name2 = JSON.parse(this.response).name;
	  var temp2 = JSON.parse(this.response).main.temp;
	  var hum2 = JSON.parse(this.response).main.humidity;
	  var wind2 = JSON.parse(this.response).wind.speed;
	  temp2 -= 273; // Преводим из Келтса в Цельсий
	  tempFixed2 = temp2.toFixed();
	document.getElementById("name2").innerHTML = name2;
	document.getElementById("temp2").innerHTML = tempFixed2;
	document.getElementById("hum2").innerHTML = hum2;
	document.getElementById("wind2").innerHTML = wind2;
}
request.send();
