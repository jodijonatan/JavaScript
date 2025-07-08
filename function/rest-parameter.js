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
