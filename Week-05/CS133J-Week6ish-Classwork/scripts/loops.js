/***********************************
 * @file: loops.js
 * @date: 2/15/2024
 * @auth: Debra & CS 133J Students
 *
 * practice working with for and while loops as well as looping through collections
 */

window.onload = function () {
  let btnList = window.document.querySelector('#btnList');

  //#1 Create a loop to count down from 100 to 1 in the secPractice1 section's innerText
  for (let i = 100; i >= 1; i--) {
    window.document.querySelector('#secPractice1').innerHTML += '<p>' + i + '...<p>';
  }

  //#2 Create a loop that displays the powers of 2 from 2^0 to 2^10 in the secPractice2 section's innerText
  for (let i = 0; i <= 10; i++) {
    window.document.querySelector('#secPractice2').innerHTML += '<p>2<sup>' + i + '</sup> = ' + Math.pow(2, i) + '...</p>';
    console.log;
  }

  //#3 Create a loop that prints the numbers from 1 - 50 in the secPractice2 section's innerText. Each multiple
  //   of 5 should print the word splat instead of the number.
  for (let j = 1; j <= 50; j++) {
    if (j % 5 == 0) {
      window.document.querySelector('#secPractice3').innerHTML += '<p>splat</p>';
    } else {
      window.document.querySelector('#secPractice3').innerHTML += '<p>' + j + '</p>';
    }
  }

  //#4 Create a loop that prompts users to enter grocery items until they type the word END. Grocery items (not
  //   the word END should print in the divPractice4Output area.
  btnList.onclick = function () {
    let myItem = window.prompt('Please enter grocery item.');

    while (myItem != 'END') {
      //   window.document.querySelector('#divPractice4Output').innerHTML += '<p>' + myItem + '</p>';
      let myListItem = document.createElement('li');
      let myItemText = document.createTextNode(myItem);
      myListItem.append(myListItem);

      myItem = window.prompt('Please enter next item or END to quit.');
    }
  };

  //#5 Use nested loops to create 7 rows of asterisks inside the divPractice5Output area.
  //   Each row should have the same number of asterisks as its row number. (Row 1 has 1 asterisk,
  //   row 2 has 2 asterisks, etc.)

  for (let k = 1; k <= 7; k++) {
    document.querySelector('#divPractice5Output').innerHTML += '<p>';

    for (let m = 1; m <= k; m++) {
      document.querySelector('#divPractice5Output').innerHTML += '* ';
    }

    document.querySelector('#divPractice5Output').innerHTML += '</p>';
  }

  //#6 Working with collections

  document.querySelector('#btnColors').onclick = function () {
    let myCheckboxes = document.querySelectorAll('input[type=checkbox]');
    console.log(myCheckboxes);
    for (let i = 0; i < myCheckboxes.length; i++) {
      //   myCheckboxes[i].style.borderColor = 'red';
      if (myCheckboxes[i].checked) {
        document.querySelector('#output').innerHTML += myCheckboxes.value;
      }
    }
  };
};
