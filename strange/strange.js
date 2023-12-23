//strange
const strange = (num) => {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  console.log(arr);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum === num ? true : false);
};

strange(28);
