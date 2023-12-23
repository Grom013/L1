//palindrom

const palindrom = (str) => {
  str = str.toLowerCase().replace(/[^a-zA-Zа-яА-Я]/g, "");
  return str === str.split("").reverse().join("") // свмвя простая функция
    ? "palindrom"
    : "not palindrom";
};

console.log(palindrom("аргентина манит негра"));
