function sum(fruit, ...data) {
  let total = 0;
  for (const item of data) {
    total += item;
  }
  console.log(`Total ${fruit} is ${total}`);
}

sum("Orange", 54, 54, 5, 4545, 4, 5, 4, 4);
sum("Mango", 43, 2423, 4234, 324, 45, 32);
sum("Watermelon", 34, 234, 3232, 432, 32);

// spread syntax
const total = [123, 12, 321, 34, 24, 32, 234, 23, 42, 43, 42, 23, 234, 2342];
sum("Banana", ...total);

// argument parameter, fitur lama sebelum ada rest parameter. tidak direkomendasikan karena kita hanya bisa makai satu parameter saja,
// yaitu rest parameter itu sendiri
function oldSum() {
  let total = 0;
  for (const argument of arguments) {
    total += argument;
  }
  console.log(`total is ${total}`);
}

oldSum(21, 312, 312, 3123, 132);
