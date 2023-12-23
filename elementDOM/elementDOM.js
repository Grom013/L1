function createElementWithStyle(tag, styles) {
  const element = document.createElement(tag); // Создаем новый элемент

  Object.assign(element.style, styles); // Устанавливаем стили

  document.body.appendChild(element); // Добавляем элемент в DOM

  return element; // Возвращаем созданный элемент
}

const newElement = createElementWithStyle("div", {
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  textAlign: "center",
  fontSize: "18px",
});
newElement.textContent = "Новый элемент со стилями!";
