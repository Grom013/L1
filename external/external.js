const externalFn = () => {
  // создаем внешнюю функцию
  let a = "доступ"; // переменная которая должга быть доступна во внутренней функции
  const internalFn = () => {
    // внутренняя функция
    console.log(a);
  };

  return internalFn; // возвращаем просто внутреннюю без вызова
};
console.log(externalFn()());
