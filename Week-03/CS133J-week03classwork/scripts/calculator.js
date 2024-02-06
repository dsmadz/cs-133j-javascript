window.onload = function () {
  // Multiplication variables
  let mulNum1 = window.document.querySelector('#txtMul1');
  let mulNum2 = window.document.querySelector('#txtMul2');
  let btnMul = window.document.querySelector('#btnMul');
  let spnMul = window.document.querySelector('#mulAnswer');
  // Division variables
  let divNum1 = window.document.querySelector('#txtDiv1');
  let divNum2 = window.document.querySelector('#txtDiv2');
  let btnDiv = window.document.querySelector('#btnDiv');
  let spnDiv = window.document.querySelector('#divAnswer');
  // Addition variables
  let addNum1 = window.document.querySelector('#txtAdd1');
  let addNum2 = window.document.querySelector('#txtAdd2');
  let btnAdd = window.document.querySelector('##btnAdd');
  let spnAdd = window.document.querySelector('#addAnswer');
  // Subtraction variables
  let subNum1 = window.document.querySelector('#txtSub1');
  let subNum2 = window.document.querySelector('#txtSub2');
  let btnSub = window.document.querySelector('#btnSub');
  let spnSub = window.document.querySelector('#subAnswer');

  btnMul.onclick = function () {
    let num1 = mulNum1.value;
    let num2 = mulNum2.value;
    let product;

    product = num1 * num2;
    console.log(num1, num2, product);
    spnMul.innerText = product;
  };

  btnDiv.onclick = function () {
    let num1 = divNum1.value;
    let num2 = divNum2.value;
    let quotient;

    quotient = num1 / num2;
    console.log(num1, num2, quotient);
    spnDiv.innerText = quotient;
  };

  btnAdd.onclick = function () {
    let num1 = addNum1.value;
    let num2 = addNum2.value;
    let sum;

    sum = num1 + num2;

    console.log(num1, num2, sum);
    spnAdd.innerText = sum;
  };

  btnSub.onclick = function () {
    let num1 = subNum1.value;
    let num2 = subNum2.value;
    let difference;

    difference = num1 - num2;

    console.log(num1, num2, difference);
    spnSub.innerText = difference;
  };
};
