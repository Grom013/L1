async function asFn() {
  // объяв ассинх функцию
  const fn = await asFn1(); // останавливаем выпол функ
  return fn; // результат возвращаем
}

async function asFn1() {
  // объяв ассинх функ
  return new Promise((resolve) => {
    // возвращаем промис
    setTimeout(() => {
      // для задержки используем сетТайм
      resolve("asFn1"); // разрешаем промис
    }, 1000);
  });
}

asFn()
  .then((res) => {
    console.log("успешно", res);
  })
  .catch((error) => {
    console.error("Ошибка:", error);
  });
