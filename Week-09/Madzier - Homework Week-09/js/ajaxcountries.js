/**********************************
@auth:   Doug Madzier
@date:   Thu, March 14, 2024
@class:  CS133J Week-09 Homework 08
***********************************/

window.onload = function () {
    const liElements = document.querySelectorAll("#selContinents li a");
    for (liElement of liElements) {
        liElement.addEventListener("click", evtFunc);
        // console.log(liElement);
    }

}

const evtFunc = evt => {
    const liElement = evt.currentTarget.innerText;
    console.log(liElement);
    evt.preventDefault();
}

const getContinentInfo = function(){
    let myReq = new XMLHttpRequest;   //This is not going to work in IE prior to 9

	myReq.open("GET", apodUrl + "api_key=" + apiKey, true);
	myReq.send();

    myReq.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			//4. Process the response text as desired
            const apodImg = JSON.parse(this.responseText);
			console.log(this.responseText);
			output.innerHTML = '<img src=' + apodImg.url + '>';
            output.innerHTML += '<p>' + apodImg.explanation + '</p>';
            console.log(apodImg);
		}
    }
}


const $ = (getId) => {
    return window.document.getElementById(getId);
}