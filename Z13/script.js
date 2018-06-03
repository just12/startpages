document.addEventListener('DOMContentLoaded', function() {
  var randomNumber = Math.floor((Math.random() * 31) + 1);
  var randomBackground = randomNumber + ".jpg";
  console.log(randomNumber);

  document.querySelector("div#picture").style.backgroundImage = "url(src/a/" + randomBackground + ")";
  document.querySelector("div.background").style.backgroundImage = "url(src/a/" + randomBackground + ")";
});

var menu = document.querySelector("div#menu a");
var amenu = menu.querySelectorAll(":scope > a");

document.addEventListener('focus',function(e){
  document.querySelector("div#menu").style.left = "0px";
}, true);

document.addEventListener('blur',function(e){
  document.querySelector("div#menu").style.left = "-155px";
}, true);
