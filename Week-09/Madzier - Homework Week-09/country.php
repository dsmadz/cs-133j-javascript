<?php
#This is for use on a local installation of XAMPP with the
#the world database installed on the MySQL database engine
#To use in the Streeter Annex you'll need to save this file in
#c:\XAMPP\htdocs and start the XAMPP Apache & MySQL services

#To test at home, you'll need to XAMPP or MAMP or WAMP or similar
# and then install the world database (linked from homework) - adjust
# the $myUser, $myPass, $myDsn data below

//initialize variables
$myContinent = '';
$myOutput = array("error" => "no continent specified");

$myUser = 'root';
$myPass = '';
$myDsn = 'mysql:host=localhost; dbname=worlddb; charset=utf8';

//create connection to the database
$myPDO = new PDO($myDsn, $myUser, $myPass, array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));

//verify required data has been sent
if(isset($_GET['selContinent'])) {
	//create SELECT statement using a parameter
	$myQuery = 'SELECT name, population, gnp, surfaceArea, lifeExpectancy FROM country WHERE continent LIKE :theName';
	
	//create the prepared SQL statement
    $myPrepSql = $myPDO->prepare($myQuery);
	
	//execute the statement using the sent data as the parameter value
    $myPrepSql->execute(array('theName' => $_GET['selContinent']));
	
	//retrieve all the records as an associative array
    $myOutput = $myPrepSql->fetchAll(PDO::FETCH_ASSOC);
}

//convert the associative array into JSON format
echo json_encode($myOutput);

?>