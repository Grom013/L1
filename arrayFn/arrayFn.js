function finFn(fns) {
  // создаем функцию которвя принимает массив функций
  return function () {
    // возвращаем функцию
    return fns.map((func) => func()); // которая пробегает по массиву и возвращает каждую
  };
}

const arr = [
  () => "первая функция",
  () => "вторая функция",
  () => "третья функция",
  () => "четвертая функция",
];

console.log(finFn(arr)());
