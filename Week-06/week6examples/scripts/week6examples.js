/*
JavaScript Function Examples
Coded by:	Debra Carino & CS 133S Students
Date:		2/20/2024
*/

window.onload = function () {};

/**************************************
 * @file    celsiusToFahrenheight
 * @auth    Douglas Madzier
 * @retn    fahrenheiht
 *
 * Celsius (°C) * 9/5) + 32.
 */
function celsiusToFahrenheit(celsius) {
  farhrenheit = (celsius * 9) / 5 + 32;
  return farhrenheit;
}
console.log(celsiusToFahrenheit(100));
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(15));
