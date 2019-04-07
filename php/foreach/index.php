<?php

$array = [
    "Value 1",
    "Value 2",
];

foreach(array_reverse($array) as $key => $value) {
  echo "Key: " . $key . " | Value : " . $value;
  echo "<br />";
}
