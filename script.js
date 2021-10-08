/* jshint esversion: 7 */
'use strict';

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
let weekArea = document.getElementById('area');

let today = new Date;
let todayWeekday = today.getDay() - 1;
console.log(todayWeekday);

const getWeekDays = function () {

  week.forEach(function (day, index) {

    let dayArea = document.createElement('div');

    if (day === "Суббота" || day === "Воскресенье") {
      dayArea.textContent = day;
      dayArea.classList.add('italic');
    } if (index === todayWeekday) {
      dayArea.textContent = week[index];
      dayArea.classList.add('bold');
    } else {
      dayArea.textContent = week[index];
    }
    weekArea.appendChild(dayArea);
  });
};

getWeekDays(week);
