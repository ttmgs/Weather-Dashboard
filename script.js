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
      console.log("Wind speed: " + data)
      // $("#content").html(JSON.stringify(data))
      $("#heading").html(cityname)
      $("#temp").text("Temperature: " + data.main.temp + " °F") 
      $("#windspeed").text("Wind Speed: " + data.wind.speed + " mph") 






















// for(weather in data)
// if(data.hasOwnProperty(weather)) {
//   var value= data[weather]
// }
// $("#value").html(JSON.stringify("Wind speed: " + value))









// for(key in data)
// if(data.hasOwnProperty(key)) {
//   var maindata= data[key]
// }
// $("#main").html(JSON.stringify("main: " + maindata))


// 

  //    var showMain = "Main: "
  //  $("#main").html(JSON.stringify(data))


  })





})
