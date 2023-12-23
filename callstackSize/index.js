function measureStackSize() {
  try {
    // Рекурсивная функция вызова самой себя до переполнения стека
    return 1 + measureStackSize();
  } catch (error) {
    return 1; // Перехватываем исключение, когда стек переполнен
  }
}

const stackSize = measureStackSize();
console.log(`Размер коллстека: ${stackSize}`);
