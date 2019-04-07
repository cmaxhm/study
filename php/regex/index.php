<?php

$string = "https://www.google.com/";

if (preg_match("|^http(s)?://[a-z0-9-]+\.[a-z]*(:[0-9]+)?.*$|i", $string)) {
  echo "Has matched";
} else {
  echo "Hasn't matched";
}
