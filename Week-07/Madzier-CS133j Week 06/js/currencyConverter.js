/**
 * @auth     Douglas Madzier
 * @date     Wed, February 28, 2024
 * @file     CS133J Week 06
 */

window.onload = function () {
    const btn1 = $("#btn1");
    const btn2 = $("#btn2");
    const btn3 = $("#btn3");
    let amt1 = $("#to-amount-1");
    let amt2 = $("#to-amount-2");
    let amt3 = $("#to-amount-3");

    //US Dollar button
    btn1.onclick = function(){
      const from1 = $("#fromAmount1").value;
      const to1 = $("#toCountry1").value;
      let total = calculate(from1, to1);
      console.log("Value btn1", total);
      amt1.innerHTML = "<p>$" + total + "</p>"
    }

    //Japanese yen button
    btn2.onclick = function(){
      const from2 = $("#fromAmount2").value;
      const to2 = $("#toCountry2").value;
      let total = calculate(from2, to2);
      console.log("Value btn2", total);
      amt2.innerHTML = "<p>$" + total + "</p>"
    }

    //Iranian Rial button
    btn3.onclick = function(){
      const from3 = $("#fromAmount3").value;
      const to3 = $("#toCountry3").value;
      let total = calculate(from3, to3);
      console.log("Value btn3", total);
      amt3.innerHTML = "<p>$" + total + "</p>"
    }
    
    /**
     * @file  calculate
     * @param from , to
     * @returns converted
     * Convert the currency.
     */    
    function calculate(from, to) {
        let converted = from * to;
        return parseFloat(converted).toFixed(5);
    }

    /**
     * @file    $
     * @param   getSelector
     * @retrn   elSel
     * Retrieves the element ids from index.html.
     */
    function $(getSelector) {
        elSel = window.document.querySelector(getSelector);
        return elSel;
    }
};
