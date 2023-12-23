const JSONtoString = (json) => {
  return JSON.stringify(json);
};

//простая функция

console.log(
  JSONtoString({
    name: "John",
    age: 30,
    city: "New York",
    isStudent: false,
    address: {
      street: "123 Main St",
    },
  })
);
