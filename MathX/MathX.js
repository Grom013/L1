const MathX = (function () {
  function fibonachi(num) {
    if (num <= 1) {
      return num;
    } else {
      let a = 0;
      let b = 1;
      let c;
      for (let i = 2; i <= num; i++) {
        c = a + b;
        a = b;
        b = c;
      }
      return b;
    }
  }
  function fibonachiAll(num) {
    let arr = [0, 1];
    let n = 0;
    while ((n = arr[arr.length - 1] + arr[arr.length - 2]) <= num) {
      arr.push(n);
    }
    return arr;
  }

  function allSimple(num) {
    let nums = []; // массив чтобы складывать простые числа
    for (let i = 2; i <= num; i++) {
      // перебираем числа
      if (nums.every((num) => i % num !== 0)) {
        //число не делится нацело ни на одно из простых чисел
        nums.push(i); // добавляем в массив
      }
    }
    return nums;
  }
  function simple(num) {
    let nums = [2]; // массив с первым простым числом
    let n = 3; // с этого числа начинаем проверку
    while (nums.length < num) {
      // цикл будет продолжаться пока не достигнет num простых чисел
      if (nums.every((num) => n % num !== 0)) {
        // если число не делится ни на одно из простых чисел без остатка, оно считается простым и добавляется в массив
        nums.push(n);
      }
      n += 2; // проверяем только нечетные числв
    }

    return nums[num - 1];
  }

  return { fibonachi, fibonachiAll, allSimple, simple };
})();

console.log(MathX.allSimple(9));
