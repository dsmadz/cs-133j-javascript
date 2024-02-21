/*
Program:	Week 4 Example 1
Author:		Debra & CS 133S Students
Date:		Tuesday, February 06, 2024
Desc:		Demonstrating use of logical Stuctures
*/

window.onload = function () {
  let myMain = document.querySelector('main');
  let myCheck = document.querySelector('input[type=checkbox]');
  let myCatRadio = document.querySelector('#radCat');
  let myDogRadio = document.querySelector('#radDog');
  let myBirdRadio = document.querySelector('#radBird');
  let myAge = document.querySelector('#txtAge');
  let mypAge = document.getElementById('pAge');

  myMain.style.display = 'none';

  let myPic = document.querySelector('#imgPet');

  myCheck.onclick = function () {
    if (myCheck.checked) {
      myMain.style.display = 'block';
    } else {
      myMain.style.display = 'none';
    }
  };

  myCatRadio.onclick = function () {
    if (myCatRadio.checked) {
      myPic.src = 'images/cat.jpg';
      myPic.alt = "You're a cat person";
    }
  };

  myDogRadio.onclick = function () {
    if (myDogRadio.checked) {
      myPic.src = 'images/dog.jpg';
      myPic.alt = "You're a dog person";
    }
  };

  myBirdRadio.onclick = function () {
    if (myBirdRadio.checked) {
      myPic.src = 'images/bird.jpg';
      myPic.alt = "You're a bird person";
    }
  };

  let myDate = new Date();
  console.log(myDate);
  let myDay = myDate.getDay();
  console.log('The day value is ' + myDay);

  switch (myDay) {
    case 0:
      myDay = 'Sunday';
      break;
    case 1:
      myDay = 'Monday';
      break;
    case 2:
      myDay = 'Tuesday';
      break;
    case 3:
      myDay = 'Wednesday';
      break;
    case 4:
      myDay = 'Thursday';
      break;
    case 5:
      myDay = 'Friday';
      break;
    case 6:
      myDay = 'Saturday';
  }
  document.getElementById('dailyMsg').innerHTML = 'Today is ' + myDay;

  myAge.oninput = function () {
    if (myAge.value < 18) {
      mypAge.innerText = "Can't vote";
    } else if (myAge.value < 25) {
      mypAge.innerText = 'Can vote';
    } else if (myAge.value < 45) {
      mypAge.innerText = "Can't be President";
    } else {
      mypAge.innerText = 'President';
    }
  };
};
