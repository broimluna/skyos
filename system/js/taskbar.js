function appstoggle() {
	document.getElementById("appsmenu").classList.toggle("opened");
	document.getElementById("skybutton").classList.toggle("active");
}

function timeService() {
	//Initialize Date
	const date = new Date()
    //Get the time
	var hour = date.getHours()
	var minutes = date.getMinutes()
	hour = (hour < 10) ? "0" + hour : hour;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	//Get the date
	var day = date.getDate();
	var month = date.getMonth() + 1;
	var year = date.getFullYear();
	day = (day < 10) ? "0" + day : day;
	month = (month < 10) ? "0" + month : month;
	//Export the lot in the "div"
	var timediv = document.getElementsByClassName("timendate")[0];
	timediv.innerHTML = hour + ":" + minutes + " • " + day + "/" + month + "/" + year
	//Repeat the function
	setTimeout(timeService, 1000);
}
function weatherService() {
	//Set variables
	var weather = $('.weather')
	var api = 'https://api.openweathermap.org/data/2.5/weather' // OpenWeather API url
	var apikey = "24a64a2d24697b4b292500aaa627a25e";
	//Default message 



//If geolocalisation is enabled, do this
    function successFunction(position) {
		var lat = position.coords.latitude;
		var long = position.coords.longitude;
	
	$.getJSON(api + "?appid=" + apikey + "&lat=" + lat + "&lon=" + long + "&units=metric", function(data) {
    // JSON result in `data` variable
    var apiicon = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"	

	weather.html(
		'<a><div class="weathermain"><img src='+apiicon+' style="vertical-align: middle;" width="46" height="46"></img></a>' + Math.round(data.main.temp) + '°C, ' + data.weather[0].main + "</div><br> Currently feels like " + Math.round(data.main.feels_like) + "°C, with " + data.weather[0].description + ".<br> The wind's speed is " + Math.round(data.wind.speed) + "km/h." 
	)
	})
	}

//If geolocalisation is disabled, do this
	function errorFunction() {
		weather.html(
			'<a><img src="system/img/icons/widgets.png" style="vertical-align: middle;" width="46" height="46"></img></a>' + "Could not fetch weather"
		)
	}

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
	}
	setTimeout(weatherService, 5000);

}

//Taskbar Search Box
function taskSearch() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById("taskbarSearch");
	filter = input.value.toUpperCase();
	ul = document.getElementsByClassName("applist")[0];
	li = ul.getElementsByTagName("li");
	for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName("a")[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
					li[i].style.display = "";
			} else {
					li[i].style.display = "none";
			}
	}
	document.getElementById("appsmenu").classList.add("opened");
	document.getElementById("skybutton").classList.add("active");

}