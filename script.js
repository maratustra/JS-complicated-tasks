/* jshint esversion: 7 */
'use strict';

let lang = prompt("Какой язык будем использовать?", "ru/en");

const ru = ["Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"];
const en = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];


if (lang !== 'ru' && lang !== 'en') {
  lang = prompt("Такой язык мне не известен. Используй ru или en", "ru/en");
}

if (lang == 'ru') {
  console.log(ru);
} else if (lang == 'en') {
  console.log(en);
}

switch (lang) {
  case 'ru':
    console.log(ru);
    break;

  case 'en':
    console.log(en);
    break;
}

const week = {
  ru: ru,
  en: en
};

const array = [];
array['ru'] = ru;
array['en'] = en;


console.log(week[lang]);
console.log(array[lang]);



const namePerson = prompt("Введите имя");

console.log(namePerson == "Артем" ? "директор" : namePerson == "Александр" ? "преподаватель" : "студент");

