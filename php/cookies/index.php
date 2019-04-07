<?php
  /**
   * Cookie-based visits counter
   * ---------------------------------------------------------------------------
   */
  
  $count = 0;
   
  if(isset($_COOKIE["count"])) {
    $count = $_COOKIE["count"]+1;
  }
  
  setcookie("count", $count, time()+5);   // Duration: 5 secs
  
  /**
   * Array cookie
   * ---------------------------------------------------------------------------
   */
  
  setcookie("environment[background]", "#FFFFFF");
  setcookie("environment[color]", "#0000CC");
  setcookie("environment[font]", "Klavika");
?>

<!DOCTYPE html>
<html>
  <head>
    <title>Cookies</title>
    <meta charset="UTF-8">
  </head>

  <body>
    <div><?php echo "Cookie value Cookie-based visits counter: ".$count; ?></div>
    <div><?php echo "Cookie Array value: ".
            $_COOKIE["environment"]["background"].", ".
            $_COOKIE["environment"]["color"].", ".
            $_COOKIE["environment"]["font"]; ?></div>
  </body>
</html>