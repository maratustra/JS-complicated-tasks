/* jshint esversion: 7 */
'use strict';

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const optimizingFunction = function (arg) {
  if (typeof arg === 'string' && !isNumber(arg)) {

    arg = arg.trim();

    if (arg.length > 30) {
      console.log(arg.substring(0, 30) + "...");
    } else {
      console.log(arg);
    }
  } else {
    console.log("Это не строка!");
    return;
  }
};

console.log(optimizingFunction('123s'));
