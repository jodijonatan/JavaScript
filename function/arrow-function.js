const arrow = (firstName, lastName) => {
  console.log(`Hello ${firstName} ${lastName}`);
};
arrow("Jodi", "Jonatan");

// arrow function tanpa block
const withoutBlock = (a, b) => console.log(`${a} + ${b} = ${a + b}`);
withoutBlock(10, 10);

// arrow function dengan block, perlu gunakan keyword return
const sum1 = (first, second) => {
  return first + second;
};
console.log(sum1(10, 10));

// arrow function tanpa block, tidak perlu gunakan keyword return
const sum2 = (first, second) => first + second;
console.log(sum2(10, 10));

// jika parameter pada arrow function hanya satu, kita bisa tidak menggunakan kurung pada parameter
const sayHello = (name) => console.log(`Hello ${name}`);
sayHello("Jonatan");

// arrow function sebagai parameter
function giveMeName(callback) {
  callback("Jodi");
}
giveMeName((name) => console.log(`Hello ${name}`));
