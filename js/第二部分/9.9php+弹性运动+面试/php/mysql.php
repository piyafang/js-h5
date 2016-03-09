<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="author" content="智能社 - zhinengshe.com" />
<meta name="copyright" content="智能社 - zhinengshe.com" />
<title>智能社 - www.zhinengshe.com</title>
</head>

<body>
<?php
//1.连接
mysql_connect('localhost', 'root', '');

//2.选择库
mysql_select_db('20150908');

//3.发送
$res=mysql_query('SELECT * FROM user_table');

//4.接收
while($row=mysql_fetch_row($res))
{
	echo '用户名：'.$row[0].'，密码：'.$row[1].'<br/>';
}
?>
</body>
</html>











