<?php

$h = date("G") + 1;
$time = $h.":".date("i");
echo $time;
$initial = "16:00";
$final = "18:00";

if($time > $initial && $time < $final) {
  echo "In time lapse.";
}
