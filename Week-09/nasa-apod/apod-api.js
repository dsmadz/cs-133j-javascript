window.onload = () => {
    let output = window.document.getElementById("output");

    getApod();
}

/*----------------------------
    @name:  getApod
    @desc:  Parses NASA's APOD api and displays the picture of the day.
    @para:  none
    @retn:  none
------------------------------*/
function getApod() {
    const apiKey = `3BdSkVtGe6G2YT8UKUcXe5Wf7Wn89aYWWDUjXfdw`;
    const apodUrl = `https://api.nasa.gov/planetary/apod?`;
    console.log(apiKey)

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



/*----------------------------
    @name:  $
    @desc:  returns an object reference matching the supplied id
    @para:  theId
    @retn:  the object with that id
------------------------------*/
function $(getId) {
    return window.document.getElementById(getId);
}