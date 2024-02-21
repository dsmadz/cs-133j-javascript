/**************************
 *  @file  script.js
 *  @date  2/8/2024
 *  @auth  Debra & CS 133J students
 * 
 *  continuing to work with logical structures
 *  create area/perimeter calculator for 3 shapes
 */

window.onload = function() {
    //variables used inside multiple nested functions
    let myMeasurementForm = window.document.querySelector("#frmMeasurement");
    let myOutput = window.document.querySelector("section:last-of-type");
    let selShape = window.document.querySelector("#selShape");
    let spnArea = window.document.querySelector("#spnArea");
    let spnPerimeter = window.document.querySelector("#spnPerimeter");
    let myImg = window.document.querySelector("#imgShape");

    let lblRadius = window.document.querySelector("#lblRadius");
    let lblWidth = window.document.querySelector("#lblWidth");
    let lblBase = window.document.querySelector("#lblBase");
    let lblHeight = window.document.querySelector("#lblHeight");
    
    let txtRadius = window.document.querySelector("#txtRadius");
    let txtWidth = window.document.querySelector("#txtWidth");
    let txtBase = window.document.querySelector("#txtBase");
    let txtHeight = window.document.querySelector("#txtHeight");
            

    //initial hide
    myMeasurementForm.style.visibility = "hidden";
    myOutput.style.visibility = "hidden";

    //event listener for users choosing a different list option
    selShape.onchange = function() {
        //detect the choice
        let myChoice = selShape.value;
        console.log(myChoice);

        //manage the individual cases
        if (myChoice == "circle") {
            //change the picture to show a circle.jpg graphic instead
            myImg.src = "images/circle.jpg";
            myImg.alt = "A beautifully round circle";

            //show the form, but hide all the unneeded textboxes
            myMeasurementForm.style.visibility = "visible";
            lblWidth.style.display = "none";
            lblBase.style.display = "none";
            lblHeight.style.display = "none";
            txtWidth.style.display = "none";
            txtBase.style.display = "none";
            txtHeight.style.display = "none";

            //make sure that if the radius lable/textbox is hidden it re-shows
            lblRadius.style.display = "inline";
            txtRadius.style.display = "inline";

            //rehide the output area, if needed
            myOutput.style.visibility = "hidden";

            //collect the information needed to do the calculation
            txtRadius.oninput = function() {
                let myRadius = txtRadius.value;
                let area = myRadius * myRadius * 3.14;
                let perimeter = 2 * myRadius * 3.14;

                //do the output
                spnArea.innerText = area.toFixed(1);
                spnPerimeter.innerText = perimeter.toFixed(1);

                //make the output visible again
                myOutput.style.visibility = "visible";
            }
        }
        else if (myChoice == "rectangle") {
            //change the picture to show a rectangle.jpg graphic instead
            myImg.src = "images/rectangle.jpg";

            //show the form, but hide all the unneeded textboxes
            myMeasurementForm.style.visibility = "visible";
            
            lblBase.style.display = "none";
            lblRadius.style.display = "none";
           
            txtBase.style.display = "none";
            txtRadius.style.display = "none";

            //empty the height textbox, just in case an old value is stuck there
            txtHeight.value = "";

            //rehide the output area, if needed
            myOutput.style.visibility = "hidden";

            //make sure that if the width & height label/textbox is hidden it re-shows
            lblWidth.style.display = "inline";
            lblHeight.style.display = "inline";
            txtWidth.style.display = "inline";
            txtHeight.style.display = "inline";

            //collect the information needed to do the calculation
            let myWidth = 0;
            let myHeight = 0;

            txtWidth.oninput = function() {
                myWidth = txtWidth.value;
                let area = myWidth * myHeight;
                let perimeter = 2 * myWidth + 2 * myHeight;

                //do the output
                spnArea.innerText = area.toFixed(1);
                spnPerimeter.innerText = perimeter.toFixed(1);

                //make the output visible again
                myOutput.style.visibility = "visible";
            }

            txtHeight.oninput = function() {
                myHeight = txtHeight.value;
                let area = myWidth * myHeight;
                let perimeter = 2 * myWidth + 2 * myHeight;

                //do the output
                spnArea.innerText = area.toFixed(1);
                spnPerimeter.innerText = perimeter.toFixed(1);

                //make the output visible again
                myOutput.style.visibility = "visible";
            }
        }

        else if (myChoice == "right triangle") {
            //change the picture to show a triangle.jpg graphic instead
            myImg.src = "images/triangle.jpg";

            //show the form, but hide all the unneeded textboxes
            myMeasurementForm.style.visibility = "visible";
            
            lblRadius.style.display = "none";
            lblWidth.style.display = "none";
            txtWidth.style.display = "none";
            txtRadius.style.display = "none";

            //empty the height textbox, just in case an old value is stuck there
            txtHeight.value = "";

            //rehide the output area, if needed
            myOutput.style.visibility = "hidden";

            //make sure that if the base & height label/textbox is hidden it re-shows
            lblBase.style.display = "inline";
            txtBase.style.display = "inline";
            lblHeight.style.display = "inline";
            txtHeight.style.display = "inline";
            
            //collect the information needed to do the calculation
            let myBase = 0;
            let myHeight = 0;

            txtBase.oninput = function() {
                myBase = txtBase.value * 1;  //you need the * 1 for the perimeter to add rather than concatenate
                let area = myBase * myHeight / 2;
                let perimeter = myBase + myHeight + Math.sqrt(myBase * myBase + myHeight * myHeight);
                
                //do the output
                spnArea.innerText = area.toFixed(1);
                spnPerimeter.innerText = perimeter.toFixed(1);

                //make the output visible again
                myOutput.style.visibility = "visible";
            }

            txtHeight.oninput = function() {
                myHeight = txtHeight.value * 1;
                let area = myBase * myHeight / 2;
                let perimeter = myBase + myHeight + Math.sqrt(myBase * myBase + myHeight * myHeight);

                //do the output
                spnArea.innerText = area.toFixed(1);
                spnPerimeter.innerText = perimeter.toFixed(1);

                //make the output visible again
                myOutput.style.visibility = "visible";
            }
        }
        else {
            //users accidentally chose the default non-shape options
            imgShape.src = "images/shape.jpg";
            imgShape.alt = "please choose one of the specific shapes";
            myOutput.innerHTML = "<h2>Oops!</h2><p>You must select a shape from the drop-down list.</p>";
            myOutput.style.visibility = "visible";
        }
    }
}