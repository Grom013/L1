// npm i moment

import moment from "moment";
export function date() {
  const nowtDate = moment().format("YYYY-MM-DD HH:mm:ss"); // получение текущей даты
  return nowtDate;
}

//import date from 'folder/file.js'

console.log(date());
// простая функция нечего объяснять
