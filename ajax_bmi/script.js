let bereken = document.getElementById('bereken');
let lengte = document.getElementById('lengte');
let leeftijd = document.getElementById('leeftijd');
let gewicht = document.getElementById('gewicht');
let geslacht = document.getElementById("geslacht");
let vrouw = document.getElementById("vrouw");
let man = document.getElementById("man");
let conclusion = document.getElementById("conclusion");
let input = document.getElementById('input');
let waarschuwing = document.getElementById('waarschuwing');

let number = 0;

gewicht.addEventListener('focus', function() {
  clearResult(gewicht);
})

leeftijd.addEventListener('focus', function() {
  clearResult(leeftijd);
})

lengte.addEventListener('focus', function() {
  clearResult(lengte);
})

man.addEventListener('click', function() {
  geslacht.value = "man";
  man.style.backgroundColor = "blue";
  man.style.color = "white";
  vrouw.style.backgroundColor = "red";
  vrouw.style.color = "black";
  number = 1;
})

vrouw.addEventListener('click', function() {
  geslacht.value = "vrouw";
  man.style.backgroundColor = "red";
  man.style.color = "black";
  vrouw.style.backgroundColor = "blue";
  vrouw.style.color = "white";
  number = 1;
})

bereken.addEventListener('click', function() {
  if(gewicht.value != "" && lengte.value != "" && leeftijd.value != "" && number != 0){
    ajax(gewicht.value,lengte.value,leeftijd.value,geslacht.value);
    waarschuwing.innerHTML = "";
  } else {
    waarschuwing.innerHTML = "Een van de factoren is niet ingevult";
  }
})

function clearResult(soort){
  soort.value = "";
}
