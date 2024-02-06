/*
Auth:   Douglas Madzier
Doc:    CS-133J Week 2-3 - Homework 1
Date:   Tuesday, January 23, 2024
*/

window.onload = function () {
  // Inserts the date under the greeting on page load.
  let myDate = new Date();
  let localDate = myDate.toLocaleDateString();
  // Trying to increase font-size programmatically.
  document.getElementById('theDate').innerHTML = "Today's date is " + localDate;

  // Changes the greeting on the page when the button is clicked.
  let btnGreetMe = document.getElementById('btnGreetMe');
  btnGreetMe.onclick = function () {
    document.getElementById('theGreeting').innerHTML = 'Good Day!';
  }

  // Changes the image when the button is clicked.
  let btnChangePic = document.getElementById('btnChangePic');
  btnChangePic.onclick = function () {
    document.getElementById('image_dio').src = 'images/dio.jpg';
    document.getElementById('image_dio').alt = 'Second image of my dog Dio.';
  }
}
