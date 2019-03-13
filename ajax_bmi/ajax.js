function ajax(gewicht, lengte, leeftijd, geslacht) {
  let debug = true; // maak false als script werkt
  let controlScript = "BMI.php"; // PHP script met berekening
  let xmlhttp = new XMLHttpRequest();// maak een instance
  let httpString = controlScript + "?gewicht=" + gewicht + "&lengte=" + lengte + "&geslacht=" + geslacht + "&leeftijd=" + leeftijd;
  let httpResponse = "";

  if(debug) console.log(httpString); // debug
  xmlhttp.open("GET", httpString, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function() {
    if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
      if(debug) console.log("http response = " + xmlhttp.responseText); //debug
      httpResponse = xmlhttp.responseText; // read the string from the server
      conclusion.innerHTML = httpResponse;
    }
  }
}
