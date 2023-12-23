const maxStorage = (type) => {
  // Объявление функции maxStorage, которая принимает аргумент type
  try {
    // Начало блока try-catch для обработки исключений
    const key = "__storage_test__"; // Создание переменной key для хранения тестового ключа
    const storage = window[type]; // Получение ссылки на localStorage или sessionStorage в зависимости от аргумента type
    storage.setItem(key, key); // Попытка установить элемент с ключом key и значением key в хранилище
    storage.removeItem(key); // Удаление элемента с ключом key из хранилища
    return storage.length; // Возвращение длины хранилища (проверка размера)
  } catch (e) {
    // Обработка исключений, если что-то пошло не так
    return 0; // В случае ошибки возвращается 0, предполагая, что хранилище недоступно или возникла ошибка
  }
};

const localStorageSize = maxStorage("localStorage"); // Вызов функции maxStorage для localStorage
console.log(`Максимальный объем localStorage: ${localStorageSize} байт`); // Вывод информации о максимальном объеме localStorage в консоль
