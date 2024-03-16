

window.onload = function() {
	let btn = window.document.getElementById("btnSearch");
	let output = window.document.getElementById("output");
	
	btn.addEventListener("click", function() {
		let theCountry = window.document.getElementById("txtCountry").value;
		doAjaxStuff(theCountry);
	});
}

/*-----------------------------------------------------------------------
Name: doAjaxStuff
Desc: pass asynchronous HTTPRequest to the getCountry.php file 
      and process results
Para: theCountry
Retn: none
------------------------------------------------------------------------*/
function doAjaxStuff(theCountry) {
	//1. Create an instance of the HTTP Request object
	let myReq = new XMLHttpRequest;   //This is not going to work in IE prior to 9
	
	//2. Use the object's methods to open (initialize) and send the 
	//   connection request
	myReq.open("GET", "getCountry.php?btnSearch=true&txtCountry=" + theCountry, 
				true);
	myReq.send();
	
	//3. Listen for a successful response
	myReq.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			//4. Process the response text as desired
			console.log(this.responseText);
			output.innerHTML = this.responseText;
		}
	}	
}








