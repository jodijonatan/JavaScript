function* createNames() {
  yield "Jodi";
  yield "Jonatan";
  yield "Karo karo";
}

const names = createNames();
for (const name of names) {
  console.log(name);
}

function* buatGanjil(value) {
  for (i = 0; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}

const numbers = buatGanjil(100);
for (const number of numbers) {
  console.log(number);
}
