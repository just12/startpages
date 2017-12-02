document.addEventListener('DOMContentLoaded', function() {
	var randomNumber = Math.floor((Math.random() * 20) + 1);
	var randomBackground = randomNumber + ".jpg";

	document.querySelector("div#picture").style.backgroundImage = "url(src/b/" + randomBackground + ")";
	document.querySelector("table").classList.add("a" + randomNumber);
	document.querySelector("body").classList.add("b" + randomNumber);
	document.querySelector("div#menu").classList.add("a" + randomNumber);
});
