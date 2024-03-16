<?php

 /* Retrieves data about a country from the world database */
	//Create variable to store returned text
	$myMsg = '';
	
	//create constants to hold general DB info
    $myDsn = 'mysql:host=localhost;dbname=worlddb';
    $myDbUser = 'root';
    $myDbPass = '';

    $myError = 'Fill out form';	
	  
	//create a local instance of the PHP data object
	try {
      $myPDO = new PDO($myDsn, $myDbUser, $myDbPass);	
	}
	catch (PDOException $e) {
	  //db connection fails for some reason
	  $myError = $e->getMessage();
	}
	
	//check if form has been submitted. If so, get 
	//data from textboxes
	if (isset($_GET['btnSearch'])) {
	  $myCountry = $_GET['txtCountry'];
	  
	  //compose SQL statement that does what you want
	  $myQuery = "SELECT * FROM country WHERE name='$myCountry'";
	  
	  //use the PDO methods to execute the query over the database connection
	  $myResults = $myPDO->query($myQuery);
	  $myCountryInfo = $myResults->fetch();
	  
	  //use the array of values returned by fetch() method to get specific pieces of data from one record IF the $myUserInfo array has at least one record
	if(count($myCountryInfo) >= 1 && $myCountryInfo[0] != '')
	    {
			$myPop = $myCountryInfo['Population'];
			$myContinent = $myCountryInfo['Continent'];
			$myGdp = $myCountryInfo['GNP'];
			$myMsg = "$myCountry is in $myContinent. It has a population of $myPop and a gross domestic 
			           product of $myGdp million dollars";

		}
	  else
	    {
			$myMsg  = 'Sorry, that country was not found. Please try again';
		}
	}
	else {
	  $myMsg = 'Submit the form!';
	}
	
	echo $myMsg;
?>