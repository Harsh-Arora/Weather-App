// var city = $('.city').val();
var key = "API_KEY";

$(".btn").click(function(){

	$.getJSON("https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q="+$('.city').val()+"&units=metric&appid="+key, 
		function(data){

			var icon = "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png";
			$('.icon').attr('src', icon);

			var name = data.name;
			$('.name').html(name);

			var temp = data.main.temp;
			$('.temp').html(temp + "&#8451;" );

			var desc = data.weather[0].description;
			$('.desc').html(desc);

		});

});


