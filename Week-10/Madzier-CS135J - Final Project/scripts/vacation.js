/*====================================================================== 
   
    Name:   Douglas Madzier
    Date:   Wednesday, March 20, 2024
    Proj:   CS133J - Final Project
   
=========================================================================*/

window.onload = function () {
	let totalVotes = 0;
	let cityVote = 0;
	//destination JSON object, including an array of possible city objects
	const myDests = {
		"totalVotes": 0,
		"cities": [{
				"name": "Athens",
				"votes": 0
			},
			{
				"name": "Madrid",
				"votes": 0
			},
			{
				"name": "Tokyo",
				"votes": 0
			},
			{
				"name": "Honolulu",
				"votes": 0
			},
			{
				"name": "Sydney",
				"votes": 0
			},
			{
				"name": "London",
				"votes": 0
			},
			{
				"name": "Oslo",
				"votes": 0
			},
			{
				"name": "Moscow",
				"votes": 0
			},
			{
				"name": "Kingston",
				"votes": 0
			},
			{
				"name": "Acapulco",
				"votes": 0
			},
			{
				"name": "Brasilia",
				"votes": 0
			},
			{
				"name": "Lima",
				"votes": 0
			},
			{
				"name": "Chicago",
				"votes": 0
			},
			{
				"name": "Toronto",
				"votes": 0
			},
			{
				"name": "Cairo",
				"votes": 0
			},
			{
				"name": "Capetown",
				"votes": 0
			}
		]

	};
	// const myCities = JSON.parse(myDests);
	// myDests = JSON.parse(JSON.stringify(myDests));
	// console.log('My myDests' + myDests)
	
	//experiments interacting with myDests
	console.log(myDests);
	console.log(myDests.totalVotes);
	console.log(myDests.cities);
	console.log(myDests.cities[3].name);

	console.log("Dests ", myDests.cities[4].name);


	// Hides the entries heading 2 element at the bottom of the page.
	$("entries").style.display = "none";
	// doNewPoll();

	const opRad1 = $("optRadio1");
	const opRad2 = $("optRadio2");

	doNewPoll(myDests);

	console.log('doNewPoll ', myDests);

	opRad1.addEventListener("change", () => {
		if (opRad1.checked) {
			$("entries").style.display = "block";
			console.log("Radio1 checked");

			doVoteTotal(opRad1.value, myDests);
			console.log("My data ", myDests);

		}
	})
	opRad2.addEventListener("change", () => {
		if (opRad2.checked) {
			$("entries").style.display = "block";
			console.log("Radio2 checked");

			doVoteTotal(opRad2.value, myDests);
			console.log("My data ", myDests);


		}
	})




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

	/**--------------------------------------------------------------------------
	Name:	doNewPoll
	Desc:	Uses a randomly generated integer to pull two values out of the array of cities in myDests
			and checks for duplicates. Then populates the optSpans.
	Para:	None.	        
	Retn:	None
	---------------------------------------------------------------------------*/
	function doNewPoll() {

		myNum1 = getRandomNum(0, 15);
		myNum2 = getRandomNum(0, 15);
		if (myNum1 == myNum2) {
			doNewPoll();
		}

		$("optSpan1").innerHTML = myDests.cities[myNum1].name;
		$("optSpan2").innerHTML = myDests.cities[myNum2].name;

		opRad1.value = myNum1
		opRad2.value = myNum2
		console.log("opRad Values: ", opRad1.value, opRad2.value);

		opRad1.checked = false;
		opRad2.checked = false;

	}


	/*--------------------------------------------------------------------------
	Name:	doVoteTotal
	Desc:	accepts two input parameters (the id of the radio button that was clicked and the array of cities)
			Then increments the vote for the city and total votes.
	Para:	None.	        
	Retn:	None
	-----------------------------------------------------------------------*/

	function doVoteTotal(radId, myDests) {
		// console.log("Console doVote " + data["cities"][radId].name);
		// console.log("Votes " + data["cities"][radId].votes);
		// cityVote = myDests.cities.votes;
		myDests.cities[radId].votes = myDests.cities[radId].votes + 1;
		// cityVote = myDests.cities[radId].votes + 1;
		$(myDests["cities"][radId].name).innerText = 'Votes: ' + myDests.cities[radId].votes;
		totalVotes = totalVotes + 1;
		$("count").innerText = totalVotes;
		console.log("Votes " + cityVote);
		doNewPoll();
	}


}