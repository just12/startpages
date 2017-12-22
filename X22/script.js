$(window).ready(function asadasa(){
  var randomNumber = Math.floor((Math.random() * 43) + 1);
  if (randomNumber < 10) { randomNumber = "0" + randomNumber}
  else if (randomNumber > 10) {randomNumber = randomNumber};
  var randomBackground = randomNumber + ".jpg";
  $("body").css("background-image", "url(src/a/" + randomBackground + ")");
});

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  //if (h < 10){h = "0" + h}
  //if (m < 10){m = "0" + m}
  document.getElementById('time').innerHTML = h + ":" + m;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

$(document).ready(function(){
	var mainh = $("#main").height();
	var lineheight = mainh/4 + "px";
	$("a.links").css("line-height", lineheight);
});

$(window).resize(function(){
	var mainh = $("#main").height();
	var lineheight = mainh/4 + "px";
	$("a.links").css("line-height", lineheight);
});

$(document).keydown(function(e){
  var keyPressed = e.keyCode;
  console.log(keyPressed);
  var asadasa = $("." + keyPressed).attr("href");
  $("." + keyPressed).css("background-color", "rgba(0,0,0,.3)");
  if(asadasa != undefined){window.location = asadasa;}
});