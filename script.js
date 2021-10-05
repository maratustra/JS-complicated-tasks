/* jshint esversion: 7 */
'use strict';

const optimizingFunction = function (arg) {

  if (typeof arg !== 'string') {
    return console.log("Это не строка!");
  } else if (isNaN(arg) == false) {
    return console.log("Это не строка!");
  }

  arg = arg.trim();

  if (arg.length > 30) {
    return arg.substring(0, 30) + '...';
  } else {
    return arg;
  }
};

console.log(optimizingFunction('123'));
