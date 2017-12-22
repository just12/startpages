function changeBackground(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    
    if (randomNumber === 1){
    document.getElementById('divimagen').style.backgroundColor = "#ff6666";
    document.getElementById('divimagen').style.backgroundImage = "url(src/imagenes/1.png)";
}else if (randomNumber === 2){
    document.getElementById('divimagen').style.backgroundColor = "#66ff66";
    document.getElementById('divimagen').style.backgroundImage = "url(src/imagenes/2.png)";
}else if (randomNumber === 3){
    document.getElementById('divimagen').style.backgroundColor = "#6699ff";
    document.getElementById('divimagen').style.backgroundImage = "url(src/imagenes/3.png)";
}else if (randomNumber === 4){
    document.getElementById('divimagen').style.backgroundColor = "#6699ff";
    document.getElementById('divimagen').style.backgroundImage = "url(src/imagenes/4.png)";
}else if (randomNumber === 5){
    document.getElementById('divimagen').style.backgroundColor = "#6699ff";
    document.getElementById('divimagen').style.backgroundImage = "url(src/imagenes/5.png)";
}else if (randomNumber === 6){
    document.getElementById('divimagen').style.backgroundColor = "#6699ff";
    document.getElementById('divimagen').style.backgroundImage = "url(src/imagenes/6.png)";
}
}