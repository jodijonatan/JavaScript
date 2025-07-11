// cara factorial dengan perulangan for
function factorial(value) {
  let result = 1;
  for (i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}

// cara factorial dengan recursive / function yang memanggil dirinya sendiri
function factorialRecursive(value) {
  if (value === 1) {
    return 1;
  } else {
    return value * factorialRecursive(value - 1);
  }
}

console.log(factorial(9));
console.log(factorialRecursive(9));
console.log(1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9);
