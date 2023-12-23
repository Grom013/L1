function traverseDOM(node, action) {
  action(node); // Выполняем заданное действие с текущим узлом

  node = node.firstChild; // Получаем первый дочерний элемент текущего узла

  while (node) {
    traverseDOM(node, action); // Рекурсивно вызываем функцию для каждого дочернего элемента
    node = node.nextSibling; // Получаем следующий дочерний элемент
  }
}

// Пример использования функции для вывода информации о тегах в консоль
const rootElement = document.body; // Указываем корневой элемент (может быть любой другой элемент)

function logTagInfo(node) {
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log("Тег:", node.tagName); // Выводим информацию о теге в консоль
  }
}

traverseDOM(rootElement, logTagInfo); // Вызываем функцию обхода дерева DOM, начиная с корневого элемента
