/*==================================================
	Akme, Corp Commission Calculator
	Generate paycheck summary based on salary & sales
	
	Author: Debra Carino & CS 133S Students
	Date:	1/11/2021
=====================================================*/

window.onload = function () {
  //variable declarations
  let mySummary = window.document.querySelector('#divPayResults');
  let txtSalary = window.document.querySelector('#txtSalary');
  let selRate = window.document.querySelector('#selRate');
  let btnCalc = window.document.querySelector('#btnCalc');
  let spnSalary = window.document.querySelector('#spnSalary');
  let spnSales = window.document.querySelector('#spnSales');
  let spnRate = window.document.querySelector('#spnRate');
  let spnComm = window.document.querySelector('#spnComm');
  let spnTotal = window.document.querySelector('#spnTotal');

  //hide the summary area
  divPayResults.style.display = 'none';

  //put the insertion point inside of the textbox
  txtSalary.focus();

  //when users click the button
  txtSalary.oninput = function () {
    //get the data from the textboxes (and create other variables)
    let weeklySalary = txtSalary.value * 1;
    let weeklySales = window.document.querySelector('#txtSales').value * 1;
    let commRate = window.document.querySelector('#selRate').value * 1;
    let earnedComm;
    let totalComp;

    //do the math
    earnedComm = (weeklySales * commRate) / 100;
    totalComp = weeklySalary + earnedComm;

    console.log(earnedComm);
    console.log(totalComp);

    //place answers inside of spans
    // Add variables above

    spnSalary.innerText = weeklySalary.toFixed(2);
    spnSales.innerText = weeklySales.toFixed(2);
    spnRate.innerText = commRate;
    spnComm.innerText = earnedComm.toFixed(2);
    spnTotal.innerHTML = '<strong>$' + totalComp.toFixed(2) + '</strong>';

    //show the summary
    mySummary.style.display = 'block';
  };

  txtSales.oninput = function () {
    //get the data from the text boxes (and create other variables)
    let weeklySalary = txtSalary.value * 1;
    let weeklySales = window.document.querySelector('#txtSales').value * 1;
    let commRate = window.document.querySelector('#selRate').value * 1;
    let earnedComm;
    let totalComp;

    //do the math
    earnedComm = (weeklySales * commRate) / 100;
    totalComp = weeklySalary + earnedComm;

    console.log(earnedComm);
    console.log(totalComp);

    //place answers inside of spans
    // Add variables above

    spnSalary.innerText = weeklySalary.toFixed(2);
    spnSales.innerText = weeklySales.toFixed(2);
    spnRate.innerText = commRate;
    spnComm.innerText = earnedComm.toFixed(2);
    spnTotal.innerHTML = '<strong>$' + totalComp.toFixed(2) + '</strong>';

    //show the summary
    mySummary.style.display = 'block';
  };

  selRate.onchange = function () {
    //get the data from the textboxes (and create other variables)
    let weeklySalary = txtSalary.value * 1;
    let weeklySales = window.document.querySelector('#txtSales').value * 1;
    let commRate = window.document.querySelector('#selRate').value * 1;
    let earnedComm;
    let totalComp;

    //do the math
    earnedComm = (weeklySales * commRate) / 100;
    totalComp = weeklySalary + earnedComm;

    console.log(earnedComm);
    console.log(totalComp);

    //place answers inside of spans
    // Add variables above

    spnSalary.innerText = weeklySalary.toFixed(2);
    spnSales.innerText = weeklySales.toFixed(2);
    spnRate.innerText = commRate;
    spnComm.innerText = earnedComm.toFixed(2);
    spnTotal.innerHTML = '<strong>$' + totalComp.toFixed(2) + '</strong>';

    //show the summary
    mySummary.style.display = 'block';
  };
};
