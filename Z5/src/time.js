function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);
    document.getElementById('asadasa').innerHTML =
    h +""+ m;
    var t = setTimeout(startTime, 500);
}
        
function checkTime(i) {
    if (i < 10) {i = "x" + i};
    return i;
}