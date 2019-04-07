<?php

$cache_folder = 'cache/';
$cache_ext = '.html';
$dynamic_uri = $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'].$_SERVER['QUERY_STRING'];
$cache_uri = $cache_folder.md5($dynamic_uri).$cache_ext;
$cache_time = 5;

if(file_exists($cache_uri) && time() - filemtime($cache_uri) < $cache_time) {
  ob_start();
  readfile($cache_uri);
  echo '<!-- cached page - '.date('F d Y H:i:s A ', filemtime($cache_uri)).' -->';
  ob_end_flush();
  
  exit();
}

ob_start();

include 'test.php';

$file = fopen($cache_uri, 'w');
fwrite($file, ob_get_contents());
fclose($file);

ob_end_flush();
