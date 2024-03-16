<?php
//create variables
$myOption = 0;
$mySelectedColor;

//create an array of data
$myColors = array('red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet', 'ultramarine');

if(isset($_GET['mnuColor']))
{
	$myOption = $_GET['mnuColor'];
}
	$mySelectedColor = $myColors[$myOption];
echo $mySelectedColor;
?>