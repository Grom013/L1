function createAndAppendElement() {
  // Получение шаблона
  const template = document.getElementById("myTemplate");

  // Клонирование содержимого шаблона
  const templateContent = template.content.cloneNode(true);

  // Добавление склонированного содержимого шаблона в DOM
  const container = document.getElementById("container");
  container.appendChild(templateContent);
}

// Вызов функции для создания и добавления элемента
createAndAppendElement();
