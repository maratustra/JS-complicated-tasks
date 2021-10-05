/* jshint esversion: 7 */
'use strict';

let lang = prompt("Какой язык будем использовать?", "ru/en");

const ru = ["Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"];
const en = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];

if (lang == 'ru') {
  console.log(ru);
} else if (lang == 'en') {
  console.log(en);
} else {
  console.log("Такой язык мне не известен");
}

// ---------------------------------

switch (lang) {
  case 'ru':
    console.log(ru);
    break;

  case 'en':
    console.log(en);
    break;

  default:
    console.log("Такой язык мне не известен");
}

// ---------------------------------

// const week = {
//   ru: ru,
//   en: en
// };

// if (week[lang] === undefined) console.log("Такой язык мне не известен");
// else console.log(week[lang]);

// ---------------------------------

const array = [];
array['ru'] = ru;
array['en'] = en;

if (array[lang] === undefined) console.log("Такой язык мне не известен");
else console.log(array[lang]);



const namePerson = prompt("Введите имя");

console.log(namePerson == "Артем" ? "директор" : namePerson == "Александр" ? "преподаватель" : "студент");

