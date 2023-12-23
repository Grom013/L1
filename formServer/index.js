function handleSubmit(event) {
  event.preventDefault(); // Предотвращяем отправку формы по умолчанию

  const name = document.getElementById("nameInput").value;
  const email = document.getElementById("emailInput").value; // Получаем данные из полей

  console.log(`Имя: ${name}, Email: ${email}`); // выводим полученные данные в консоль

  Например: fetch("url_сервера", {
    method: "POST", // отправляем на сервер
    body: JSON.stringify({ name, email }), // преобразуем в JSON формвт
    headers: {
      "Content-Type": "application/json", // задаем содержимое запроса http
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Ошибка:", error));
}

const form = document.getElementById("myForm");
form.addEventListener("submit", handleSubmit);
