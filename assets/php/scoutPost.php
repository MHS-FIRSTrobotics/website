<?php
$json=$_POST["json"];
//$decoded = base64_decode($json);
$jsonFile = fopen("../json/scouting.json","w+");
fwrite($jsonFile,$json);
fclose($jsonFile);
echo $json;
?>