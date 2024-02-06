/*
@File:      object.js
@Desc:      First javascript file
@Author:    Douglas Madzier
@Date:      Thursday, January 25, 2024
*/

window.onload = function () {
  //window.alert('Yet another pop-up!');

  //window.document.querySelector('#output').innerText = 'Something different.';

  let output = window.document.querySelector('#output');
  let btnClick = window.document.querySelector('#btnClick');
  let changeLink = window.document.querySelector('#changeLink');

  output.innerText = 'Something different from Doug.';
  btnClick.value = "Don't Click!";
  btnClick.onclick = function () {
    output.style.color = 'green';
  }

  changeLink.onmouseover = function(){
    changeLink.style.backgroundColor = "yellow";
    output.innerText = "View news headlines now";
    changeLink.style.border = "4px solid orange";
  }

  changeLink.onmouseout = function(){
    changeLink.style.backgroundColor = "white";
    output.innerText = "Some output could go here";
    changeLink.style.border = "none";
  }
}
