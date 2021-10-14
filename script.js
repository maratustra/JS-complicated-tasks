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
  const area = document.getElementById('area');
  const hourForms = ["час", "часа", "часов"];
  let clockArea1 = document.createElement('div');
  let clockArea2 = document.createElement('div');

  const dateOptionA = function () {

    let monthOptions = { month: 'long' };
    month = date.toLocaleString('ru-RU', monthOptions);
    month = month.toString().slice(0, -1) + "я";

    dateResult = `Сегодня ${weekDay}, ${dayOfMonth} ${month} ${year} года, ${hour} ${formating()} ${minutes} минут ${seconds} секунд`;

    clockArea1.textContent = dateResult;
    area.append(clockArea1);

    return;
  };

  const dateOptionB = function () {

    let monthOptions = { month: 'numeric' };
    month = date.toLocaleString('ru-RU', monthOptions);

    dateResult = `${getZero(dayOfMonth)}.${getZero(month)}.${year} - ${getZero(hour)}:${getZero(minutes)}:${getZero(seconds)}`;

    clockArea2.textContent = dateResult;
    area.append(clockArea2);

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

  const getZero = function (num) {

    num = num < 10 ? '0' + num : num;
    return num;
  };

  dateOptionA();
  dateOptionB();
};

setInterval(timerOn, 1000);



