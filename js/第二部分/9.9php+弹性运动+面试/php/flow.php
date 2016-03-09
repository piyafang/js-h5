<?php
$page=$_GET['page'];

$page_size=10;
$start=($page-1)*$page_size;

mysql_connect('localhost', 'root', '');
mysql_select_db('20150908');

$sql="SELECT * FROM flow LIMIT ".$start.", ".$page_size;

$res=mysql_query($sql);

$result='';

$first=true;

$result.='[';

while($row=mysql_fetch_row($res))
{
	if($first)
	{
		$result.="'".$row[0]."'";
	}
	else
	{
		$result.=",'".$row[0]."'";
	}
	
	$first=false;
}

$result.=']';

echo $result;













?>