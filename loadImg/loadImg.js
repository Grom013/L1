function loadImgFn(url) {
  // принимаем url
  return new Promise((resolve, reject) => {
    // функ для успешной загр и Ошибки
    const img = new Image(); // в ДОМ созд <img>

    img.onload = function () {
      // устанавливаем обработчик для успешной загр
      resolve({
        width: img.width, // получаем данные картинки
        height: img.height,
      });
    };

    img.onerror = function () {
      // для Ошибки
      reject(new Error("Ошибка"));
    };

    img.src = url; // для new Image()
  });
}

loadImgFn(
  "https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/odwpxb1ij4jddf2wkuvz.webp"
)
  //передаем в параметры url
  .then((data) => {
    console.log("yспешно", data);
  })
  .catch((error) => {
    console.error("Ошибка", error);
  });
