/**
 * @auth    Doug Madzier
 * @date    Wed, March 06, 2024
 * @class   CS133J Weeks 07-08
 */

window.onload = function () {
    const btnArray = $("#btnArray");
    const btnObject = $("#btnObject");

    btnArray.onclick = function () {
        const olList = $("#list");
        olList.innerHTML = "";
        let petNames = ["Dio", "Jack", "Jordan", "Joanne", "Chance", "Ty"];
        for (let i = 0; i < petNames.length; i++) {
            olList.innerHTML += "<li>" + petNames[i] + "</li>";
        }
    };

    btnObject.onclick = function () {
        const pObj = $("#obj");
        pObj.innerHTML = "";
        let petInfo = [{ name: "Dio", age: 4, gender: "Male", }];
        pObj.innerHTML += "My pets name is <b>" + petInfo[0].name + "</b>. His age is <b>" + petInfo[0].age + "</b> and his gender is <b>" + petInfo[0].gender + "</b>.";
    }


    /**
     * @file    $
     * @param   getSelector
     * @retrn   elSel
     * Retrieves the elements by selector from index.html.
     */
    function $(getSelector) {
        elSel = window.document.querySelector(getSelector);
        return elSel;
    };

};