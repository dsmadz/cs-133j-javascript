/************************************************************
@Auth   Douglas Madzier
@Date   Monday, February 19, 2024  
@file   CS-133J Week 04
-------------------------------------------------------------
This is a simple choose your own coffee game.
It ends if you make coffee at home or go to Starbucks.
-------------------------------------------------------------
I tried adding a nested loop in the Hear coffee condition, but
it was a little to complicated for now.
*************************************************************/

// Loads when the browser loads.
window.onload = function () {
  let btn1 = document.querySelector('#btn1');
  let btn2 = document.querySelector('#btn2');
  let btn3 = document.querySelector('#btn3');
  let btn4 = document.querySelector('#btn4');
  let btn5 = document.querySelector('#btn5');
  let imgId = document.querySelector('#imgId');
  let secBtn = document.querySelector('#secBtn');
  let secImage = document.querySelector('#secImage');
  let divOutcome = document.querySelector('#divOutcome');
  let divEnd = document.querySelector('#divEnd');

  // Event listener for the three buttons.
  btn1.addEventListener('click', myFunction, false);
  btn2.addEventListener('click', myFunction, false);
  btn3.addEventListener('click', myFunction, false);

  // Set The END to not display on load.
  divEnd.style.display = 'none';

  // Function with if if else conditional to test which button was clicked.
  function myFunction(e) {
    if (e.target.id == 'btn1') {
      secImage.innerHTML = '<img id="imgId" src="/img/end-unsplash.png" alt="Image of sign saying the end.">';
      divEnd.style.display = 'flex';
      secBtn.style.display = 'none';
      divOutcome.innerHTML = "<h2>You chose Home.</h2>&nbsp;<h2>Not a bad choice. It's made the way you like it.</h2>&nbsp;";
    } else if (e.target.id == 'btn3') {
      secImage.innerHTML = '<img id="imgId" src="/img/end-unsplash.png" alt="Image of sign saying the end.">';
      divEnd.style.display = 'flex';
      secBtn.style.display = 'none';
      divOutcome.innerHTML = '<h2>Could have done better. At least they have a drive-thru.</h2>&nbsp;';
    } else {
      divOutcome.innerHTML = '<h2>Great choice! My favorite coffee.</h2>&nbsp;';
      secBtn.style.display = 'none';
      divEnd.style.display = 'flex';
      divEnd.innerHTML = '<h2>What drink are you going to choose?</h2>&nbsp;<h2>End of game for now.</h2>';
    }
  }
};
