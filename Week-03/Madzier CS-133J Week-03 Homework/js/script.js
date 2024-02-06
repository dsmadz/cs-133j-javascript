//  Auth: 	Douglas Madzier
//	Date: 	Friday, February 02, 2024
//	Class: 	CS-133J Week-03 Classwork

window.onload = function () {
  // Variable declarations for form data.
  let txtQty1 = window.document.querySelector('#txtQty1');
  let txtQty2 = window.document.querySelector('#txtQty2');
  let txtQty3 = window.document.querySelector('#txtQty3');
  let spnBeef = window.document.querySelector('#spnBeef');
  let spnChicken = window.document.querySelector('#spnChicken');
  let spnLamb = window.document.querySelector('#spnLamb');
  let spnSalesTax = window.document.querySelector('#spnSalesTax');
  let spnItemQty = window.document.querySelector('#spnItemQty');
  let spnSubTotal = window.document.querySelector('#spnSubTotal');
  let spnFinalTotal = window.document.querySelector('#spnFinalTotal');

  // Places focus inside of the first input.
  txtQty1.focus();

  // Triggers when the user enters a value.
  txtQty1.oninput = function () {
    // Variables for calculations.
    let itemQty;
    let subTotal;
    let salesTax;
    let finalTotal;

    //Calculations.
    itemQty = txtQty1.value * 1 + txtQty2.value * 1 + txtQty3.value * 1;
    subTotal = itemQty * 19.99;
    salesTax = subTotal * 0.06;
    finalTotal = subTotal + salesTax;
    // Console.log for debugging.
    console.log(itemQty);
    console.log(subTotal);
    console.log(finalTotal);

    // Answers placed inside of spans.
    spnBeef.innerHTML = '<strong>' + txtQty1.value + '</strong>';
    spnChicken.innerHTML = '<strong>' + txtQty2.value + '</strong>';
    spnLamb.innerHTML = '<strong>' + txtQty3.value + '</strong>';
    spnItemQty.innerHTML = '<strong>' + itemQty + '</strong>';
    spnSubTotal.innerHTML = '<strong>$' + subTotal.toFixed(2) + '</strong>';
    spnSalesTax.innerHTML = '<strong>$' + salesTax.toFixed(2) + '</strong>';
    spnFinalTotal.innerHTML = '<strong>$' + finalTotal.toFixed(2) + '</strong>';
  };

  txtQty2.oninput = function () {
    // Variables for calculations.
    let itemQty;
    let subTotal;
    let salesTax;
    let finalTotal;

    //Calculations.
    itemQty = txtQty1.value * 1 + txtQty2.value * 1 + txtQty3.value * 1;
    subTotal = itemQty * 19.99;
    salesTax = subTotal * 0.06;
    finalTotal = subTotal + salesTax;
    // Console.log for debugging.
    console.log(itemQty);
    console.log(subTotal);
    console.log(finalTotal);

    // Answers placed inside of spans.
    spnBeef.innerHTML = '<strong>' + txtQty1.value + '</strong>';
    spnChicken.innerHTML = '<strong>' + txtQty2.value + '</strong>';
    spnLamb.innerHTML = '<strong>' + txtQty3.value + '</strong>';
    spnItemQty.innerHTML = '<strong>' + itemQty + '</strong>';
    spnSubTotal.innerHTML = '<strong>$' + subTotal.toFixed(2) + '</strong>';
    spnSalesTax.innerHTML = '<strong>$' + salesTax.toFixed(2) + '</strong>';
    spnFinalTotal.innerHTML = '<strong>$' + finalTotal.toFixed(2) + '</strong>';
  };

  txtQty3.oninput = function () {
    // Variables for calculations.
    let itemQty;
    let subTotal;
    let salesTax;
    let finalTotal;

    //Calculations.
    itemQty = txtQty1.value * 1 + txtQty2.value * 1 + txtQty3.value * 1;
    subTotal = itemQty * 19.99;
    salesTax = subTotal * 0.06;
    finalTotal = subTotal + salesTax;
    // Console.log for debugging.
    console.log(itemQty);
    console.log(subTotal);
    console.log(finalTotal);

    // Answers placed inside of spans.
    spnBeef.innerHTML = '<strong>' + txtQty1.value + '</strong>';
    spnChicken.innerHTML = '<strong>' + txtQty2.value + '</strong>';
    spnLamb.innerHTML = '<strong>' + txtQty3.value + '</strong>';
    spnItemQty.innerHTML = '<strong>' + itemQty + '</strong>';
    spnSubTotal.innerHTML = '<strong>$' + subTotal.toFixed(2) + '</strong>';
    spnSalesTax.innerHTML = '<strong>$' + salesTax.toFixed(2) + '</strong>';
    spnFinalTotal.innerHTML = '<strong>$' + finalTotal.toFixed(2) + '</strong>';
  };
};
