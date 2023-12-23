const tableBody = document.getElementById("table-body");
const pagination = document.getElementById("pagination"); // получаем ид элемента
let data = []; //  данные
let currentPage = 1; // актуальная странца
const pageSize = 50;

window.onload = function () {
  // фугкция для загрузки
  fetch(
    "http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true"
  )
    .then((response) => response.json())
    .then((fetchedData) => {
      data = fetchedData; // Сохраняем полученные данные
      renderTable(data, currentPage); // Отрисовываем таблицу с данными
    })
    .catch((error) => {
      console.error("Ошибка загрузки данных:", error);
    });
};

function renderTable(data, page) {
  tableBody.innerHTML = "";

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const currentPageData = data.slice(start, end);
  currentPage = page;

  currentPageData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.fname}</td><td>${item.lname}</td><td>${item.tel}</td><td>${item.address}</td><td>${item.city}</td><td>${item.state}</td><td>${item.zip}</td>`;
    tableBody.appendChild(row);
  });

  renderPagination(data);
}

function renderPagination(data) {
  pagination.innerHTML = "";

  const totalPages = Math.ceil(data.length / pageSize);

  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("a");
    pageLink.href = "#";
    pageLink.textContent = i;
    pageLink.onclick = function () {
      renderTable(data, i);
    };
    pagination.appendChild(pageLink);
  }
}

document.querySelectorAll("#data-table th").forEach((header) => {
  header.addEventListener("click", function () {
    const key = this.getAttribute("data-sort");
    if (typeof data[0][key] === "string") {
      data.sort((a, b) => a[key].localeCompare(b[key]));
    } else {
      data.sort((a, b) => a[key] - b[key]);
    }
    renderTable(data, currentPage);
  });
});
