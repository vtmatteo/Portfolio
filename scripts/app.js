//main function that runs
function main(){
  console.log("Document is ready");


//sidebar menu
  var $menu = $("#sidebar-wrapper");

  $(document).on("click", ".js-menu-open", function(evt) {
      $menu.addClass("open");

      return evt.target.tagName === "A";
    })
  $(document).on("click", ".js-menu-close", function(evt) {
      $menu.removeClass("open");

      return evt.target.tagName === "A";
    });


//get the weather
getWeather();
function getWeather(){

   var apiKey="dd1a899184a613e5";
   var zipCode ="20910";

  $.ajax({
    url: "http://api.wunderground.com/api/" + apiKey + '/geolookup/conditions/q/' + zipCode + ".json",
    dataType:"jsonp",
    success: function(parsed_json){
      var conditions= parsed_json.current_observation.weather;
      var city = parsed_json['location']['city'];
      var state = parsed_json['location']['state'];
      console.log("Your weather forcast is " + conditions + " in " + city +", " + state);
      loadImage(conditions);      
    }
  })
}

//Get time of day
console.log(getTimeOfDay());

function getTimeOfDay(){
  var time= new Date();
  var hours = time.getHours();
  var timeOfDay;

      if (hours>17){
      return timeOfDay="night";
    } else if (hour => 12){
      return timeOfDay="afternoon";
    } else {
      return timeOfDay="morning";
    }
}

// Select which image to load as background
function loadImage(conditions){
  
  var validConditions=[
    "cloudy",
    "clear",
    "rain",
    "snow"
  ];
  
  conditions=conditions.toLowerCase();

  var timeOfDay=getTimeOfDay();
  var foundCondition=validConditions.indexOf(conditions);

  if (foundCondition == -1){
    var conditions="cloudy";}

  var imageSRC= "img/weather/hero-" + conditions + "-" + timeOfDay + ".jpg";

  $("#intro").css("background-image", "url("+ imageSRC + ")");

  console.log(conditions);
  console.log(timeOfDay);
  console.log("url(" + imageSRC + ")");


}




//close the main function
}





  //make sure the page is ready before running javascript
$(document).ready(main);