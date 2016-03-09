<?php
$data=$_POST['data'];

$fp=fopen('upload/'.time().'.png', 'w');

fwrite($fp, $data);
?>