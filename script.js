/* jshint esversion: 7 */
'use strict';

const optimizingFunction = function (arg) {

  if (typeof arg !== 'string') {
    return console.log("Это не строка!");
  }

  arg = arg.trim();

  if (arg.length > 30) {
    return arg.substring(0, 30) + '...';
  } else {
    return arg;
  }
};

console.log(optimizingFunction(' 123456789112675840275638292757438484930303'));
