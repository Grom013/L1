function create(data) {
  return { data, next: null }; // data это данные в списке, next указатель
}

function jsonList(json) {
  if (!json || !Array.isArray(json) || json.length === 0) {
    // проверяет на то что json не пустой содержит элеменииы и является ли массивом
    return null;
  }

  const head = create(json[0]); // функция, создающая узел  списка с данными  и пустым указателем на следующий узел
  let current = head;

  for (let i = 1; i < json.length; i++) {
    current.next = create(json[i]); // Создает новый узел содержащий данные из элемента ,присваивается полю  предыдущего узла
    current = current.next; //перемещается на новый узел,
  }

  return head;
}

console.log(jsonList([{ value: 1 }, { value: 2 }, { value: 3 }]));
