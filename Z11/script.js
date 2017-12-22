$(document).ready(function(){
  var mainh = $("div#main").height();
  var lineheight = mainh;
  $("div#main a").css("line-height", lineheight/3 + "px");
  
  
  var randomNumber = Math.floor((Math.random() * 18) + 1);
  var randomBackground = randomNumber + ".jpg";
  $("body").css("background-image", "url(src/" + randomBackground + ")");
});

$(window).resize(function(){
  var mainh = $("#main").height();
  var lineheight = mainh;
  $("div#main a").css("line-height", lineheight/3 + "px");
});