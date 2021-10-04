/* jshint esversion: 7 */
'use strict';

/* Переменная lang может принимать 2 значения: 'ru' 'en'.
Написать условия при котором в зависимости от значения lang будут выводится 
дни недели на русском или английском языке. Решите задачу
 a) через if,
 b) через switch-case
 c) через многомерный массив без ифов и switch. */

let lang = prompt("Какой язык будем использовать?", "ru/en");

if (lang == 'ru') {
  console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
} else if (lang == 'en') {
  console.log("Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday");
} else {
  console.log("Такой язык мне не известен");
}

// ---------------------------------

switch (lang) {
  case 'ru':
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
    break;

  case 'en':
    console.log("Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday");
    break;

  default:
    console.log("Такой язык мне не известен");
}

// ---------------------------------

let week = {
  'ru': {
    'days': "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
  },
  'en': {
    'days': "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"
  }
};

console.log(week[lang].days);

// ---------------------------------

let array = [];
array['ru'] = { 'days': "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье" };
array['en'] = { 'days': "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday" };

console.log(array[lang].days);


/* У нас есть переменная namePerson. Если значение этой переменной “Артем”,
то вывести в консоль “директор”, если значение “Александр”, то вывести
в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”.
Решить задачу с помощью нескольких тернарных операторов, без использования if или switch */

let namePerson = prompt("Введите имя");

console.log(namePerson == "Артем" ? "директор" : namePerson == "Александр" ? "преподаватель" : "студент");

