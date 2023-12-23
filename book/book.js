const book = {
  // простое решение
  name: "темная книга переговоров", // самая база JS
  author: "Jake Sullivan", // поэтому комментарии излишни
  year: 1999,
  getName: function () {
    return this.name;
  },
  getAuthor: function () {
    return this.author;
  },
  getYear: function () {
    return this.year;
  },
  setName: function (newName) {
    return (this.name = newName);
  },
  setAuthor: function (newAuthor) {
    return (this.author = newAuthor);
  },
  setYear: function (newYear) {
    return (this.year = newYear);
  },
};

console.log(book.setName("asas"));
console.log(book);
