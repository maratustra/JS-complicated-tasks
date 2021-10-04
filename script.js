/* jshint esversion: 7 */
'use strict';

const lang = prompt("Какой язык будем использовать?", "ru/en");

const ru = "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";
const en = "Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday";


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

const week = {
  'ru': {
    'days': ru
  },
  'en': {
    'days': en
  }
};

console.log(week[lang].days);

// ---------------------------------

const array = [];
array['ru'] = ru;
array['en'] = en;

console.log(array[lang]);



// const namePerson = prompt("Введите имя");

// console.log(namePerson == "Артем" ? "директор" : namePerson == "Александр" ? "преподаватель" : "студент");

