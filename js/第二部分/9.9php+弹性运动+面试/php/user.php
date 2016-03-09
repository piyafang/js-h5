<?php
$act=$_GET['act'];
$user=$_GET['user'];
$pass=$_GET['pass'];

switch($act)
{
	case 'login':
		mysql_connect('localhost', 'root', '');
		mysql_select_db('20150908');
		
		$res=mysql_query("SELECT * FROM user_table WHERE username='".$user."'");
		
		$row=mysql_fetch_row($res);
		
		if(!$row)	//没有这个用户
		{
			echo '{ok: false, msg: "此用户名不存在"}';
		}
		else
		{
			if($row[1]==$pass)
			{
				echo '{ok: true, msg: "登录成功"}';
			}
			else
			{
				echo '{ok: false, msg: "密码有错"}';
			}
		}
		break;
	case 'add':
		mysql_connect('localhost', 'root', '');
		mysql_select_db('20150908');
		
		$res=mysql_query("SELECT * FROM user_table WHERE username='".$user."'");
		
		$row=mysql_fetch_row($res);
		
		if($row)	//有了
		{
			echo '{ok: false, msg: "用户名已存在"}';
		}
		else		//没有——能注册
		{
			mysql_query("INSERT INTO user_table VALUES('".$user."', '".$pass."')");
			echo '{ok: true, msg: "注册成功"}';
		}
		break;
}














?>