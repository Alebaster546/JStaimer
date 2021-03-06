let timer_show = document.getElementById("timer");

function diffSubtract(date1, date2) {
  return date2 - date1;
}

let end_date = {
  full_year: "2022",
  month: "01",
  day: "01",
  hours: "00",
  minutes: "00",
  seconds: "00",
};

let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

// Запуск интервала таймера
timer = setInterval(function () {
  // Получение времени сейчас
  let now = new Date();
  // Получение заданного времени
  let date = new Date(end_date_str);
  // Вычисление разницы времени
  let ms_left = diffSubtract(now, date);
  // Если разница времени меньше или равна нулю
  if (ms_left <= 0) {
    // То
    // Выключаем интервал
    clearInterval(timer);
    // Выводим сообщение об окончание
    alert("Время закончилось");
  } else {
    // Иначе
    // Получаем время зависимую от разницы
    let res = new Date(ms_left);
    // Делаем строку для вывода
    let str_timer = ` ${
      res.getUTCFullYear() - 1970
    } год/лет. ${res.getUTCMonth()} месяцев/месяц .${
      res.getUTCDate() - 1
    } дней/день. ${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
    // Выводим время
    timer_show.innerHTML = "До Нового Года осталось " + ":" + str_timer;
  }
}, 1000);
