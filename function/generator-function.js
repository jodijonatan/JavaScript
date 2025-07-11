function* createNames() {
  yield "Jodi";
  yield "Jonatan";
  yield "Karo karo";
}

const names = createNames();
for (const name of names) {
  console.log(name);
}
