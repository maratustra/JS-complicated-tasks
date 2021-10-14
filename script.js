/* jshint esversion: 7 */
'use strict';

const timerOn = function () {

  let date = new Date();
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let weekDay = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let weekOptions = { weekday: 'long' };
  weekDay = date.toLocaleString('ru-RU', weekOptions);
  let dateResult;

  const hourForms = ["час", "часа", "часов"];


  const dateOptionA = function () {

    let monthOptions = { month: 'long' };
    month = date.toLocaleString('ru-RU', monthOptions);
    month = month.toString().slice(0, -1) + "я";

    dateResult = ("Сегодня " + weekDay + ", " + dayOfMonth + " " + month + " " + year + " года, " + hour + " " + formating() + " " + minutes + " минут " + seconds + " секунд ");
    console.log(dateResult);
    return;
  };

  const dateOptionB = function () {

    let monthOptions = { month: 'numeric' };
    month = date.toLocaleString('ru-RU', monthOptions);

    getZero();

    dateResult = (dayOfMonth + "." + month + "." + year + " - " + hour + ":" + minutes + ":" + seconds);
    console.log(dateResult);
    return;
  };

  const formating = function () {

    if (hour == 1 || hour == 21) {
      return hourForms[0];
    } else if (hour >= 5 && hour <= 20 || hour == 0) {
      return hourForms[2];
    } else {
      return hourForms[1];
    }
  };

  const getZero = function () {

    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    month = month < 10 ? '0' + month : month;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    return;
  };

  dateOptionA();
  dateOptionB();
};

setInterval(timerOn, 1000);



