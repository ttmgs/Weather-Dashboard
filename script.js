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
      // $("#main").html(JSON.stringify(`Main:${data}`)   

     var showMain = $("#main")
   var main = `Main: ${data}`
         showMain.html(JSON.stringify(main))


  })





})
