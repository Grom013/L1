function passwordHard(password) {
  const hard = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password), // по булевую значение мы определяем сложность
    lowercase: /[a-z]/.test(password),
    numbers: /[0-9]/.test(password),
    specialChars: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password),
  };

  const total = Object.values(hard).filter(Boolean).length; // смотрим какая сложность применилась т.е сколько раз true

  if (total === 5) {
    return "Отличный пароль!";
  } else if (total >= 4) {
    // тут определяем сложность
    return "Хороший пароль, но можно улучшить.";
  } else if (total >= 3) {
    return "Средний пароль, рекомендуется улучшить.";
  } else {
    return "Слабый пароль, рекомендуется использовать более сложный пароль.";
  }
}

console.log(passwordHard("Grom@1213"));
