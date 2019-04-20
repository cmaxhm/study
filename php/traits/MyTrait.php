<?php

trait MyTrait {
  public function HelloTraitWorld() {
    $this->HelloWorld(); // $this refers to the class wherever MyTrait is imported
  }
}
