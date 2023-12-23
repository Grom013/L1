const sortNameAge = (people) => {
  return people.sort((a, b) => {
    // возвращаем функцию сортировки
    if (a.age !== b.age) {
      // если возрасты не равны
      return a.age - b.age; // возвращаем от меньшего
    } else {
      return a.name.localeCompare(b.name); // иначе сортируем по алфавиту
    }
  });
};

console.log(
  sortNameAge([
    { name: "John", age: 25 },
    { name: "Alice", age: 30 },
    { name: "Liam", age: 20 },
    { name: "Alice", age: 25 },
  ])
);
