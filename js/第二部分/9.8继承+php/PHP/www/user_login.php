<?php
$user=$_GET['user'];
$pass=$_GET['pass'];

if($user=='blue' && $pass=='123456')
{
	echo '{ok: true, msg: "登录成功"}';
}
else if($user=='zhangsan' && $pass=='456789')
{
	echo '{ok: true, msg: "登录成功"}';
}
else if($user=='lisi' && $pass=='987654')
{
	echo '{ok: true, msg: "登录成功"}';
}
else
{
	echo '{ok: false, msg: "用户名或密码错误"}';
}












?>