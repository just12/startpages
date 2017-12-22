function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  h = checkTime(h);
  m = checkTime(m);
  
  document.getElementById('head').innerHTML =
  h + ":" + m;
  var t = setTimeout(startTime, 500);
}
        
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}