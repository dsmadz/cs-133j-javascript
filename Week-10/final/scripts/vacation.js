/*====================================================================== 
   
   CS 133S Final - Winter 2024
   Auth:	YOUR NAME SHOULD REPLACE THIS TEXT
   Date:	PUT THE DATE HERE, PLEASE
   
=========================================================================*/

window.onload = function() {
	//destination JSON object, including an array of possible city objects
	const myDests = {	
		"totalVotes": 0,
		"cities": [
			  { "name": "Athens",	"votes": 0 },
			  { "name": "Madrid",	"votes": 0 },
			  { "name": "Tokyo",	"votes": 0 },
			  { "name": "Honolulu",	"votes": 0 },
			  { "name": "Sydney",	"votes": 0 },
			  { "name": "London",	"votes": 0 },
			  { "name": "Oslo",		"votes": 0 },
			  { "name": "Moscow",	"votes": 0 },
			  { "name": "Kingston",	"votes": 0 },
			  { "name": "Acapulco",	"votes": 0 },
			  { "name": "Brasilia", "votes": 0 },
			  { "name": "Lima",		"votes": 0 },
			  { "name": "Chicago",	"votes": 0 },
			  { "name": "Toronto",	"votes": 0 },
			  { "name": "Cairo",	"votes": 0 },
			  { "name": "Capetown",	"votes": 0 }
		]

	};

	console.log(myDests);
	
	/*================ REPLACE WITH YOUR CODE, DELETE COMMENT ===============
		+ Create code that:
		  A) Hides the "entries" heading from the bottom of the page
		  B) calls a doNewPoll function that populates the radio buttons with two new vacation destinations
		  C) associates the click event for EACH radio button with an anonymous function that:
				i]   shows the "entries" heading from the bottom of the page
				ii]  calls a doVoteTotal function that increments an accumulating total for each vacation destination & the total # of votes
				iii] calls a doNewPoll function to show two new vacation destinations
				
	======================================================================*/
}

/*--------------------------------------------------------------------------
Name:	$
Desc:	returns an object reference for the HTML element with the supplied id
Para:	theId
Retn:	the object
---------------------------------------------------------------------------*/
function $(theId) {
	return window.document.getElementById(theId);
}

/*--------------------------------------------------------------------------
Name:	getRandomNum
Desc:	returns an integer value between the min (inclusive) and max (inclusive)
		to get values between 10 and 20, you'd call myNum = getRandomNum(10, 20)
Para:	min
        max
Retn:	the random number
---------------------------------------------------------------------------*/
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*================ REPLACE WITH YOUR CODE, DELETE COMMENT =================
	+ Create a doNewPoll function to populate the radio buttons with two different vacation destinations
	    A) Use a randomly generated integer to pull two values out of the array of cities in myDests
		B) Repeat as many times as needed until the values are different
		C) Use the random vacation city names to populate the optSpan1 & optSpan2 areas of the page
		D) Use the random vacation city name indexes to populate the value attribute of each radio button
		E) Ensure that neither of the two radio buttons are selected
		
	+ Create a doVoteTotal function that:
		A) accepts two input parameters (the id of the radio button that was clicked and the array of cities)
		B) determines if the radio button in question was selected and
		    i] if so, increments the vote for the appropriate city and updates the displayed totals
				a) increment the votes property for the selected city
				b) increment the total number of votes
				c) update the appropriate <span> inside the results division
				d) update the appropriate <span> inside the entries heading
			    
==========================================================================*/



