/* jshint esversion: 7 */

// 1) Создать переменную num со значением 266219 (тип данных число).

let num = 266219;

/* 2) Вывести в консоль произведение (умножение) цифр этого числа.
Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) 
и перемножить их. Правильно использовать цикл или методы перебора. */

num = String(num).split('');

let multiply = (previousValue, currentValue) => previousValue * currentValue;

num = num.reduce(multiply);

console.log(num);

// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)

num = num ** 3;

// 4) Вывести в консоль первые 2 цифры полученного числа

console.log(String(num).substr(0, 2));