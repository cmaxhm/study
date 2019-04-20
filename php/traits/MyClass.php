<?php

require 'MyTrait.php';

class MyClass {
  use MyTrait;
  
  public function HelloWorld() {
    echo 'Hello World!';
  }
}
