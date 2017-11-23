$(document).ready(function(){
  var randomNumber = Math.floor((Math.random() * 20) + 1);
  var randomBackground = randomNumber + ".jpg";
  $("div#picture").css("background-image", "url(src/b/" + randomBackground + ")");
  $("table").addClass("a" + randomNumber);
  $("body").addClass("b" + randomNumber);
  $("div#menu").addClass("a" + randomNumber);
});