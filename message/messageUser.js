const rightEnding = (function () {
  function getMessage(num) {
    const forHandred = num % 100; // простая функция
    const forTen = num % 10;

    if (forHandred >= 11 && forHandred <= 14) {
      return num + " сообщений";
    } else {
      switch (forTen) {
        case 1:
          return num + " сообщение";
        case 2:
        case 3:
        case 4:
          return num + " сообщения";
        default:
          return num + " сообщений";
      }
    }
  }

  function getUser(num) {
    const forHandred = num % 100;
    const forTen = num % 10;

    if (forHandred >= 11 && forHandred <= 14) {
      return num + " пользователей";
    } else {
      switch (forTen) {
        case 1:
          return num + "пользователь";
        case 2:
        case 3:
        case 4:
          return num + " пользователя";
        default:
          return num + " пользователей";
      }
    }
  }
  return { getMessage, getUser };
})();

console.log(rightEnding.getMessage(1026));
