function createAdder(value) {
  const owner = "Jodi";

  function add(param) {
    console.log(owner);
    return value + param;
  }

  return add;
}

const addTwo = createAdder(2);
console.log(addTwo(10));

const addTen = createAdder(10);
console.log(addTen(10));
