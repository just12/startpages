function changeBackground(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    
    if (randomNumber === 1){
    document.getElementById('picture').style.backgroundImage = "url(src/imagenes/fondos/1.png)";
}else if (randomNumber === 2){
    document.getElementById('picture').style.backgroundImage = "url(src/imagenes/fondos/2.jpg)";
}else if (randomNumber === 3){
    document.getElementById('picture').style.backgroundImage = "url(src/imagenes/fondos/3.jpg)";
}else if (randomNumber === 4){
    document.getElementById('picture').style.backgroundImage = "url(src/imagenes/fondos/4.jpg)";
}else if (randomNumber === 5){
    document.getElementById('picture').style.backgroundImage = "url(src/imagenes/fondos/5.jpg)";
}else if (randomNumber === 6){
    document.getElementById('picture').style.backgroundImage = "url(src/imagenes/fondos/6.jpg)";
}
    
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m;
    var t = setTimeout(startTime, 500);
}