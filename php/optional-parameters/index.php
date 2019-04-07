<?php

function showColor($rgb, $type = "#") {
  if($type == "#") {
    echo $type.$rgb;    // If second paremeter is not set, "#" is assumed
  } else {
    echo $type.$rgb;    // If second parameter is set, its value is taken
  }
}

showColor("00FF94");   // Second parameter is optional
