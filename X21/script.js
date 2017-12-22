$(document).ready(function asadasa(){
  var randomNumber = Math.floor((Math.random() * 24) + 1);
  if (randomNumber < 10) { randomNumber = "0" + randomNumber}
  else if (randomNumber > 10) {randomNumber = randomNumber};
  var randomBackground = randomNumber + ".jpg";
  $("#picturenumber").html(randomBackground);
  $("#picture").css("background-image", "url(src/" + randomBackground + ")");
});

$("#picture").mouseenter(function(){$("#pestanaa").css("background-color", "#555").css("border-color", "#fff");}).mouseleave(function(){$("#pestanaa").css("background-color", "#222").css("border-color", "#333");});
$("#text").mouseenter(function(){$("#pestanab").css("background-color", "#555").css("border-color", "#fff");}).mouseleave(function(){$("#pestanab").css("background-color", "#222").css("border-color", "#333");});
$("#ascii").mouseenter(function(){$("#pestanac").css("background-color", "#555").css("border-color", "#fff");}).mouseleave(function(){$("#pestanac").css("background-color", "#222").css("border-color", "#333");});

$(document).ready(function(){
  var date = new Date;
  var h = date.getHours();
  var m = date.getMinutes();
  if (m < 10){m = "0" + m};
  if (h < 10){h = "0" + h};
  $("#time a").text(h + ":" + m);
});