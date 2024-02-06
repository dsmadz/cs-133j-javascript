/*==========================================
Name: 	Week 2 Example - simple calculator
Auth:	Debra & CS 133S Students
Date:	1/11/2021
============================================*/

//add of our JS waits until HTML finishes loading
window.onload = function() {
	let petCount;	//identify a memory block and assign the "nicer" name I've picked
	var firstName;
	let firstName1;
	let _thisIsCamelCased;
	
	//loosely typed languages do not explicitly determine which datatype is allowed
	//inside of each variable. In fact, each variable can store multiple datatypes
	//during program execution
	petCount = 3;
	console.log(petCount);
	
	petCount = "five";
	console.log(petCount);
	
	petCount = false;
	console.log(petCount);
	
	petCount = new Date();
	console.log(petCount);
	
	//window.alert(petCount); <-- ok for checking values, but console.log is nicer 
	
	//1. get object references to each textbox and button and span
	let myAddBtn = window.document.querySelector("#btnAdd");
	let mySubBtn = window.document.querySelector("#btnSub");
	let myMulBtn = window.document.querySelector("#btnMul");
	let myDivBtn = window.document.querySelector("#btnDiv");
	
	
	//2. listen for when users click any of the buttons
	//		a. get the **info** for the textboxes assoc. w/ button
	//		b. do the math (add, subtract, mult, dividing)
	//		c. show the result in the span assoc. w/ button
	myAddBtn.onclick = function() {
		let num1 = window.document.querySelector("#txtAdd1").value;
		let num2 = window.document.querySelector("#txtAdd2").value;
		let sum;
		let result = window.document.querySelector("#addAnswer");
		
		sum = parseInt(num1) + parseInt(num2); 
		
		result.innerText = sum;
	}
	
	
	mySubBtn.onclick = function() {
		let num1 = window.document.querySelector("#txtSub1").value;
		let num2 = window.document.querySelector("#txtSub2").value;
		let diff;
		let result = window.document.querySelector("#subAnswer");
		
		diff = num1 - num2;
		
		result.innerText = diff;
	}
	
	//----------------SELF CHECK-------------------------------------
	//Create the event functions for the myMulBtn and the myDivBtn
	//---------------------------------------------------------------
	
}

