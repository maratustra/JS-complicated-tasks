/* jshint esversion: 7 */
'use strict';

// 1.

let arr = ["12345", "28", "499", "5", "327896", "2076", "0"];
let newArr = [];

arr.forEach(function (item, index) {

  let eachNum = arr[index];

  if (+eachNum[0] === 2 || +eachNum[0] === 4) {
    console.log(eachNum);
  }
});

// 2.

let maxNumber = 100;

nextPrime:
for (let i = 2; i <= maxNumber; i++) {

  for (let k = 2; k < i; k++) {
    if (i % k == 0) {
      continue nextPrime;
    }
  }
  console.log(i + " Делители этого числа: 1 и " + i);
}