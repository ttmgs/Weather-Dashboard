const button = $("#button")


button.click(function run() {

  var cityname = $("#search").val()

  var apikey = "d20c8e5b0b51eb6cb1f0eac2c05fd576"


  var queryurl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + apikey;

  $.ajax({
   url: queryurl,
   method: "GET"
  }).then(function(data){
      console.log(data)

      // grabbing html element id & matching them with api value
      $("#heading").html(cityname)
      $("#temp").text("Temperature: " + data.main.temp + " °F") 
      $("#country").text("Country: " + data.sys.country) 
      $("#long").text("Longitude: " + data.coord.lon) 
      $("#lat").text("Latitude: " + data.coord.lat) 
      $("#description").text(`Today in ${cityname}, we are expecting ` + data.weather[0].description) 
      $("#feels").text("Feels like: " + data.main.feels_like + " °F") 
      $("#winddirection").text("Wind Direction: " + data.wind.direction.name) 
      $("#windspeed").text("Wind Speed: " + data.wind.speed + " mph") 
      $("#base").text("Longitude: " + data.base) 




  });
});
