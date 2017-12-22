function changeSentence(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    
    if (randomNumber === 1){
    document.getElementById('sentence').innerHTML = "Asadasa";
}else if (randomNumber === 2){
    document.getElementById('sentence').innerHTML = "esedese";
}else if (randomNumber === 3){
    document.getElementById('sentence').innerHTML = "isidisi";
}else if (randomNumber === 4){
    document.getElementById('sentence').innerHTML = "osodoso";
}else if (randomNumber === 5){
    document.getElementById('sentence').innerHTML = "usudusu";
}else if (randomNumber === 6){
    document.getElementById('sentence').innerHTML = "asediosu";
}
}