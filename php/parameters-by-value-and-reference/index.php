<?php

$value = "text";

/*
 * PARAMETER BY VALUE
 * This way, if the value is modified inside the function, it will NOT be modified outside
*/

echo "<p><h3>Parameter by value</h3></p>";
echo "Value: " . $value . " (Value outside the function)<br />";    // Value outside the function

function pValue($parameter) {   // The parameter was passed by value
  $parameter .= "+";    // Modifies the parameter value
  echo "Value modified!<br />";
  echo "Value: " . $parameter . " (Value inside the function)";    // Shows the value inside the function
}

pValue($value);
echo "<br />";
echo "Value: " . $value . " (Value outside the function)";    // Value outside the function

/*--------------------------------------------------------------------------*/

/*
 * PARAMETER BY REFERENCE
 * This way, if the parameter is modified inside the function, it will ALSO be modified outside
 */

echo "<p><h3>Paramenter by reference</h3></p>";
echo "Value: " . $value . " (Value outside the function)<br />";    // Value outside the function

function pReference(&$parameter) {     // The parameter was passed by reference (note the "&")
  $parameter .= "+";    // Modifies the parameter value
  echo "Value modified!<br />";
  echo "Value: " . $parameter . " (Value inside the function)";    // Shows the value inside the function
}

pReference($value);
echo "<br />";
echo "Value: " . $value . " (Value outside the function)";    // Value outside the function
