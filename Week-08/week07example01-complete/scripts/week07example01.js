/*===========================================
Week 7 Example 1
Working with Arrays

Coded by:	
Date:		
=============================================*/
window.onload = function() {
	//declare the array variable
	let sizeOptions = new Array(5);
	
	//populate the array variable
	sizeOptions[0] = "S";
	sizeOptions[1] = "M";
	sizeOptions[2] = "L";
	sizeOptions[3] = "XL";
	sizeOptions[4] = "2X";
		
	//short form for declaring & populating an array all at once
	let colorOptions = ["red", "orange", "yellow", "green", "blue", "purple"];

	/*SELF-CHECK: use either creation method to build an array, named whatever seems
	reasonable, that stores the following items:
	text string: "tonkatsu ramen"
	numerical value: 12.99
	boolean value: true
	array value: ["broth", "noodle", "egg", "chashu pork", "sweet corn"] */
	let food = new Array(4);
	food[0] = "tonkatsu ramen";
	food[1] = 12.99;
	food[2] = true;
	food[3] = ["broth", "noodle", "egg", "chashu pork", "sweet corn"];
	
	//test what's inside the array variables
	console.log(sizeOptions);
	console.log(colorOptions);
	console.log(food);
	
	//event wire-ups
	$("btnArray").onclick = function() {
		//print out each value inside of an array with different types of loops
		//arrays have a length property that stores the number of items in the array
		for(let i=0; i < sizeOptions.length; i++) {
			$("divOutput").innerHTML += "<p>Size: " + sizeOptions[i] + "</p>";
		}

		//do it again, but using the createElement method instead
		//1. Create the unordered list element
		let myUl = window.document.createElement("ul");

		//2. use a loop to create a list item + text for each color and append to the list
		for(let i=0; i < colorOptions.length; i++) {
			let myLi = window.document.createElement("li");
			let myText = window.document.createTextNode(colorOptions[i]);
			myLi.append(myText);
			myUl.append(myLi);
		}

		//3. append the completed list to the output area
		$("divOutput").append(myUl);

		/* SELF-CHECK: Use the sizeOptions array + the createElement technique to build a 
		               select list of the available sizes.
					   <select>
					      <option>S</option>
						  <option>M</option>
						  ...
						</select>
		*/
		//1. Create the outside element
		let mySelectList = window.document.createElement("select");

		//2. Use the loop to create the inside elements
		//    a. create the option elements
		//    b. create the text for the option elements
		//    c. append the text to the option
		//    d. append the option to the select list
		for(let j=0; j < sizeOptions.length; j++) {
			let myOption = window.document.createElement("option");
			let myOptionText = window.document.createTextNode(sizeOptions[j]);
			myOption.append(myOptionText);
			mySelectList.append(myOption);
		}

		//3. Append the select list to the divOutput area
		$("divOutput").append(mySelectList);

		//print out my array info using the printArrayToString function
		$("divOutput").innerHTML += printArrayToString(colorOptions);
		$("divOutput").innerHTML += printArrayToString(sizeOptions);
		$("divOutput").innerHTML += printArrayToString(food);

		//TODO - FIX THE FUNCTION
		//print out nested stuff using the printArrayToNestedObject function
		$("divOutput").append(printArrayToNestedObject(colorOptions, "ol", "li"));

		//Using other FOR loop types to access array data
		//FOR...IN - use when you want to interact directly with the index AND the data
		for(index in food) {
			console.log("index is: " + index);
			console.log("data is: " + food[index]);

			//make the current item number start at 1 instead of 0
			let currentItem = index*1 + 1;
			$("divOutput").innerHTML += "<p>#" + currentItem + ") " + food[index] + "</p>";
		}

		//FOR...OF - use when you just want direct access to the data
		for(foodFact of food) {
			$("divOutput").innerHTML += "<div class='foodFact' style='width:100px;height:200px;background-color:silver;padding:1em;margin:1em'>" +
			   foodFact + "</div>";
		}

		//Other interesting array methods
		//JOIN - combine all array values using (optional) join text
		
		//INDEXOF - returns the index of the first element in the array that contains the spec value
		
		//PUSH - adds new element to the end of the array
		
		//SORT - sorts array items into ascending alpha order
		
		//Find more interesting methods at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
	}
}

/*-------------------------------------------------
Name: $
Desc: returns an object reference given an id
Args: theId
Retn: theObject
-------------------------------------------------*/
function $(theId) {
	let theObject;
	theObject = window.document.getElementById(theId);
	return theObject;
}

/*-------------------------------------------------
Name: printArrayToString
Desc: converts arrays into a formatted string
Args: theArray
Retn: theString
-------------------------------------------------*/
function printArrayToString(theArray) {
	let theString = "";

	for(let m = 0; m < theArray.length; m++) {
		theString += "<div>Item #" + m + ": " + theArray[m] + "</div>";
	}
	theString += "<br><hr><br>";
	return theString;
}

/*-------------------------------------------------
Name: printArrayToNestedObject
Desc: converts array data into text inside of nested objects
	  -note that this function wasnt working in lecture due to incorrect
	   use of theInnerObj (the parameter) rather than myInnerObj (the variable) - oops
Args: theArray
	  theOuterObj
	  theInnerObj
Retn: theOuterObj
-------------------------------------------------*/
function printArrayToNestedObject (theArray, theOuterObj, theInnerObj) {
	//create the variable to store the outer object
	let myOuterObj = window.document.createElement(theOuterObj);
	myOuterObj.style.border="3px solid green";

	//loop through the array to build inner object and append to the outer object
	for(let i=0; i < theArray.length; i++) {
		let myInnerObj = window.document.createElement(theInnerObj);
		console.log(myInnerObj);
		let myInnerText = window.document.createTextNode(theArray[i]);
		myInnerObj.append(myInnerText);
		myOuterObj.append(myInnerObj);
	}
	
	//return the completed outer object
	return myOuterObj;
}