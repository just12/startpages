/*$(document).ready(function(){
  var randomNumber = Math.floor((Math.random() * 2) + 0);
  $("#asadasa").text(randomNumber);
  var randomRotate = if(randomNumber === 0){randomRotate = "hovered1"}else if(randomNumber === 1){randomRotate = "hovered2"};
});*/



$("#links1").mouseenter(function(){
  $("#img1").addClass("hovered")
}).mouseleave(function(){
  $("#img1").removeClass("hovered")
})

$("#links2").mouseenter(function(){
  $("#img2").addClass("hovered")
}).mouseleave(function(){
  $("#img2").removeClass("hovered")
})

$("#links3").mouseenter(function(){
  $("#img3").addClass("hovered")
}).mouseleave(function(){
  $("#img3").removeClass("hovered")
})

$("#links4").mouseenter(function(){
  $("#img4").addClass("hovered")
}).mouseleave(function(){
  $("#img4").removeClass("hovered")
})

$(document).ready(function(){
  var date = new Date;
  var h = date.getHours();
  var m = date.getMinutes();
  if (m < 10){m = "0" + m};
  if (h < 10){h = "0" + h};
  $("#time a").text(h + ":" + m);
});