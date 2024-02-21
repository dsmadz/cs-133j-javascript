/*======================================================
Prog:	JavaScript Function Examples
Auth:	Debra Carino & CS 133S Students
Date:	1/28/2021
========================================================*/

window.onload = function() {
	let mySales = 1485620;
	let myRate = 0.0175;
	let myC = 100;
	
	//invoking the getComm function
	console.log(getComm(1000, 0.075));
	console.log(getComm(12987, 0.0325));
	console.log(getComm(mySales, myRate));
	
	//SELF CHECK: invoking the getTempInF function
	// - in order to see what 37 degrees C in FUNCTION
	// - print your result to the console log
	console.log(getTempInF(37).toFixed(1));
	console.log(getTempInF(myC));
	
	//SELF CHECK: invoking the getOrderTotal function
	//			  for someone with the following purchase:
	//				-item1: 99.95
	//				-item2: 27.50
	//				-item3:  4.99
	//				-sales tax rate: 7%
	console.log(getOrderTotal(99.95, 27.50, 4.99, .07));
	
	$("selRate").onchange = function() {
		let myFormSales = $("txtSales").value;
		let myFormRate = $("selRate").value;
		
		$("pCommTotal").innerText = getComm(myFormSales, myFormRate);
	}
	
	$("txtSales").oninput = function() {
		let myFormSales = $("txtSales").value;
		let myFormRate = $("selRate").value;
		
		$("pCommTotal").innerText = getComm(myFormSales, myFormRate);
	}
	
}

//-----------------FUNCTION DEFINITIONS---------------------

/*----------------------------------------------------------
Name:	$
Desc:	get an object reference to the object with the matching id
Para:	theId
Retn:	theObject
------------------------------------------------------------*/
function $(theId) {
	let theObject;
	
	theObject = window.document.getElementById(theId);
	
	return theObject;
}

/*----------------------------------------------------------
Name:	getComm
Desc:	calculate commissions based on sales and comm rate
Para:	theSales, theRate
Retn:	theComm
------------------------------------------------------------*/
function getComm(theSales, theRate) {
	//variable declaration - theComm is local to our function (can't use it outside
	//						 the container braces)
	//					   - we don't need variables for theSales or theRate, since putting
	//						 parameter names in the parenthese is like creating local f'n var
	let theComm;
	
	//calculations
	theComm = theSales * theRate;
	theComm = theComm.toFixed(2);
	
	//output data from function	
	return theComm;
}

/*----------------------------------------------------------
Name:	getTempInF
Desc:	convert temp in Celsius to temp in Fahrenheit
Para:	tempInC
Retn:	tempInF
------------------------------------------------------------*/
function getTempInF(tempInC) {
	//variable declarations
	let tempInF;
	
	//calculations
	tempInF = (9/5 * tempInC) + 32;
	
	//output data from function
	return tempInF;
}

/*----------------------------------------------------------
Name: getOrderTotal
Desc: calculate the order total (add 3 line item totals, plus sales tax on that subtotal)
Para: lineItem1, lineItem2, lineItem3, taxRate (must be decimal, not %)
Retn: orderTotal
------------------------------------------------------------*/
function getOrderTotal(lineItem1, lineItem2, lineItem3, taxRate) {
	let orderTotal;
	let subTotal;
	let salesTax;
	
	//calculate the subtotal of lineItems
	subTotal = lineItem1 + lineItem2 + lineItem3;
	
	//calculate the sales tax
	salesTax = subTotal * taxRate;
	
	//calculate the order total
	orderTotal = (subTotal + salesTax).toFixed(2);
	
	return orderTotal;
}




