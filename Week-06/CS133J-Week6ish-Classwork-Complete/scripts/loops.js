/***********************************
* @file: loops.js
* @date: 2/15/2024
* @auth: Debra & CS 133J Students
*
* practice working with for and while loops as well as looping through collections
*/

window.onload = function() {
	let btnList = window.document.querySelector("#btnList");

	//#1 Create a loop to count down from 100 to 1 in the secPractice1 section's innerText
	//for (starting value, conditional statement, change statement) {}
	for (let i=100; i >= 1; i--) {
		window.document.querySelector("#secPractice1").innerHTML += 
			"<p>" + i  + "...</p>";
	}

	//#2 Create a loop that displays the powers of 2 from 2^0 to 2^10 in the secPractice2 section's innerText
	// HINT: the Math object in JavaScript has a pow function that raises a number to
	//       a provided power  Math.pow(5, 2) -> 5^2 = 25
	// Change code so output looks like 2^0 = 1  2^1 = 2   2^2 = 4
	for (let i=0; i <= 10; i++) {
		
		window.document.querySelector("#secPractice2").innerHTML +=
			"<p>2<sup>" + i + "</sup> = " + Math.pow(2, i) + "...</p>";
	}

	//#3 Create a loop that prints the numbers from 1 - 50 in the secPractice3 section's innerText. Each multiple
	//   of 5 should print the word splat instead of the number.
	//   We can use the idea of the modulus to test for divisibility. The modulus is the "remainder"
	//   that is left over after doing the integer part. If a number is evenly divisible, the remainder
	//   and thus the modulus is 0
	for (let j=1; j <= 50; j++) {
		if(j % 5 == 0) {
			window.document.querySelector("#secPractice3").innerHTML += "<p>splat</p>";
		}
		else {
			window.document.querySelector("#secPractice3").innerHTML += "<p>" + j + "</p>";
		}
	}
	
	//#4 Create a loop that prompts users to enter grocery items until they type the word END. Grocery items (not
	//   the word END should print in the divPractice4Output area.
	//   This is better suited to the while loop - where we know an end condition, but not a specific
	//   number of attempts needed to get to the end condition
	//   while (conditional statement) {}

	//   Look at an upgraded way of adding elements into the DOM
	//   using window.document.createElement()  -  dynamically create an HTML element
	//         window.document.createTextNode() - dynamically generate text content
	//         window.document.object.append()  - insert dynamically generated text/elements inside
	//											  of the object
	btnList.onclick = function() {
		let myList = window.document.createElement("ul");

		let myItem = window.prompt("Please enter grocery item.");
		while(myItem != "END") {
			//print the previous item
			//Adding content with innerHTML is okay if you are adding non-child elements
			//or your page complexity is pretty simple
			//window.document.querySelector("#divPractice4Output").innerHTML += "<p>" + myItem + "</p>";
			
			//create a list item element, create a text node containing the myItem value, append
			//the list item to the myList unordered list
			let myListItem = window.document.createElement("li");
			let myItemText = window.document.createTextNode(myItem);
			myListItem.append(myItemText);
			myList.append(myListItem);
			
			//get the next item
			myItem = window.prompt("Enter next item, or END if your list is complete");
		}

		//Add the completed list to the output area
		window.document.querySelector("#divPractice4Output").append(myList);

	}
	
	//#5 Use nested loops to create 7 rows of asterisks inside the divPractice5Output area. 
	//   Each row should have the same number of asterisks as its row number. (Row 1 has 1 asterisk, 
	//   row 2 has 2 asterisks, etc.)
	//outer loop is the number of rows that we want
	for (let k = 1; k <= 7; k++) {
		window.document.querySelector("#divPractice5Output").innerHTML += "<p>";
		
		for(let m=1; m <= k; m++) {
			console.log("K is " + k);
			console.log("M is " + m);
			window.document.querySelector("#divPractice5Output").innerHTML += "* ";
		}
		
		window.document.querySelector("#divPractice5Output").innerHTML += "</p>";
	}
	
	//#6 Working with collections
	// Iterate over all the checkboxes on the page and create a list of favorite colors from
	//the checked ones that appears in the output division.
	window.document.querySelector("#btnColors").onclick = function() {
		//get a collection of all the checkboxes
		let myCheckboxes = window.document.querySelectorAll("input[type=checkbox]");
		console.log(myCheckboxes);

		

		//set up a for loop to iterate over each checkbox in the myCheckboxes collection
		for(let i=0; i < myCheckboxes.length; i++) {
			console.log("loop active - i is" + i);
			
			//double check why styles were not rendering
			//checkboxes are resistant to most non-user-agent styles (https://blog.logrocket.com/styling-checkboxes-css-properties/)
			//which is why our border and background color styling seemed to have no effect. Two styles
			//that can be altered for checkboxes are their outline and accentColor. Note that
			//accentColor changes the inside color only of checked checkboxes. Try checking all
			//seven checkboxes, then clicking the button. oooh...rainbow!
			myCheckboxes[i].style.accentColor = myCheckboxes[i].value;
			myCheckboxes[i].style.outline = "3px solid purple";

			console.log(myCheckboxes[i]);
			//check to see if the current checkbox is checked, and add its value
			// to a printed list of colors
			if (myCheckboxes[i].checked) {
				window.document.querySelector("#output").innerHTML += myCheckboxes[i].value; 
			}
		}
	}

}