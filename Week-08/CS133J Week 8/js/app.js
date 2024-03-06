/**
 * Auth:        Douglas Madzier
 * Date:        Thu, February 29, 2024
 * Class:       CS-133J Week 08 Objects & Arrays
 */

window.onload = function(){
    let flavors = ["chocolate", "mint chip", "strawberry", "rainbow sherbet"];
    let divOb1 = $("divOb1");
    
    for (let i=0; i < flavors.length; i++){
        let flavor = flavors[i];
        console.log("Flavors are: ", flavor);
        $("divOb1").innerHTML += "<p>" + flavor + "</p>";
    }
    
    let myList = document.createElement("ul");
    for (let i=0; i<flavors.length; i++){
        let flavor = flavors[i];
        let myItem = document.createElement("li");
        let myText = document.createTextNode(flavor);
        myItem.append(myText);
        myList.append(myItem);
    }

        const flavor1 = {
            name: "chocolate",
            price: 1.99,
            ingredientList: ["cream","sugar","sweetened cocoa","salt"],
            allergens: ["milk"]	
        }

        console.log(flavor1);
        $("divOb2").innerHTML = "<p>The first flavor is " + flavor1.name + "," + "It costs: $" + flavor1.price + "</p>";
        for (let j=0; j < flavor1.ingredientList.length; j++) {
            $("divOb3").innerHTML += flavor1.ingredientList[j] + "<br>";
        }

        function $(theID) {
            let theId = theID
            return window.document.getElementById(theId)
        }
    
    }




