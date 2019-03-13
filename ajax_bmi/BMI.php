<?php
  $gewicht = $_GET["gewicht"];
  $lengte = $_GET["lengte"];
  $leeftijd = $_GET["leeftijd"];
  $geslacht = $_GET["geslacht"];
  if(check($gewicht, $lengte, $leeftijd)){
    BMIcalc($gewicht, $lengte, $leeftijd, $geslacht);
  } else {
    echo "Leeftijd, gewicht en lengte moeten nummers zijn!";
  }

  function BMIcalc($gewicht, $lengte, $leeftijd, $geslacht){
    $centimeter = $lengte / 100;
    $antwoord = $gewicht / ($centimeter * $centimeter);

    echo "Uw gewicht is " . $gewicht . " kg.<br>";
    echo "Uw lengte is " . $lengte . " cm.<br>";
    echo "Uw leeftijd is " . $leeftijd . ".<br>";
    echo "En u bent een " . $geslacht . ".<br><br>";
    if($antwoord < 18.5){
      echo "<p class=ondergewicht>Je bent ondergewicht!</p>";
    } else if($antwoord >= 18.5 && $antwoord <= 24.9){
      echo "<p class=normaal>Je hebt een normaal gewicht!</p>";
    } else if($antwoord >= 25 && $antwoord <= 29.9){
      echo "<p class=overgewicht>Je bent overgewicht!</p>";
    } else if($antwoord >= 30 && $antwoord <= 34.9){
      echo "<p class=class1>Je hebt obesitas class 1!</p>";
    } else if($antwoord >= 35 && $antwoord <= 39.9){
      echo "<p class=class2>Je hebt obesitas class 2!</p>";
    } else if($antwoord >= 40){
      echo "<p class=class3>Je hebt obesitas class 3!</p>";
    }
  }

  function check($gewicht, $lengte, $leeftijd){
    if(is_numeric($gewicht)){
       if(is_numeric($lengte)){
         if(is_numeric($leeftijd)){
           return true;
         }
       }
    }
    return false;
  }
?>
