/* jshint esversion: 7 */
'use strict';

let lang = prompt("Какой язык будем использовать?", "ru/en");

const ru = ["Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"];
const en = ["Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday"];

const array = [];
array['ru'] = ru;
array['en'] = en;

const week = {
  ru: ru,
  en: en
};

if (lang === 'ru' || lang === 'en') {

  switch (lang) {
    case 'ru':
      console.log(ru);
      break;
    case 'en':
      console.log(en);
      break;
  }

  console.log(week[lang]);
  console.log(array[lang]);

} else {

  lang = prompt("Такой язык мне не известен. Используй ru или en", "ru/en");

}


const namePerson = prompt("Введите имя");

console.log(namePerson == "Артем" ? "директор" : namePerson == "Александр" ? "преподаватель" : "студент");

