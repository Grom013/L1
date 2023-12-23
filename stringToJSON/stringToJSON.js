function stringToJSON(json) {
  // параметр строка
  try {
    if (typeof JSON.parse(json) === "object" && JSON.parse(json) !== null) {
      // если преобразонная строка равна объект и не равна null
      return JSON.parse(json); // преобразует в JSON
    } else {
      throw new Error("Некорректный JSON"); // иначе выкинкт ощибку
    }
  } catch (error) {
    console.error("Ошибка при парсинге JSON:", error.message); // если произошла ошибка при преобразовании
    return null;
  }
}
('{"name": "John", "age": 30, "city": "New York"}');

console.log(stringToJSON('{"name": "John", "age": 30, "city": "New York"}'));
