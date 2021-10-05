/* jshint esversion: 7 */
'use strict';

const optimizingFunction = function (arg) {

  (typeof arg !== 'string') ? console.log("Это не строка!") : null;

  arg = arg.trim();

  if (arg.length > 30) {
    return arg.substring(0, 30) + '...';
  } else {
    return arg;
  }
};

optimizingFunction();
