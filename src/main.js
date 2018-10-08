import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { tamagotchi } from "./backend.js";

let barLevelCheck = function() {
  setInterval(() =>{
    $("#hungerBar").html(tamagotchi.hungerArray.join(''));
    $("#playBar").html(tamagotchi.playArray.join(''));
    $("#sleepBar").html(tamagotchi.sleepArray.join(''));
  }, 100);
};
// UI Logic
$(document).ready(function() {
  tamagotchi.setHunger();
  tamagotchi.setPlay();
  tamagotchi.setSleep();
  barLevelCheck();
  $(".statusButton").click(function() {

    tamagotchi.downside = tamagotchi['blockSet'](7,-3);
    tamagotchi.large = tamagotchi['blockSet'](5);
    tamagotchi.small = tamagotchi['blockSet'](3);

    const buttonValue = $(this).val();
    const buttonValueArray = buttonValue.split(" ");
    console.log(buttonValue);
    if (buttonValueArray.length == 2){
      tamagotchi[buttonValueArray[0]](tamagotchi[buttonValueArray[1] + 'Array'])
    } else if (buttonValueArray.length == 3){
      tamagotchi[buttonValueArray[0]](tamagotchi[buttonValueArray[1] + 'Array'], tamagotchi[buttonValueArray[2] + 'Array']);
    } else if (buttonValueArray.length == 4){
      tamagotchi[buttonValueArray[0]](tamagotchi[buttonValueArray[1] + 'Array'], tamagotchi[buttonValueArray[2] + 'Array'], tamagotchi[buttonValueArray[3] + 'Array']);
    }
    // tamagotchi.full(tamagotchi.playArray);
    // tamagotchi.full(tamagotchi.sleepArray);
  });
});
