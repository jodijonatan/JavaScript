const sayHello = function (name) {
  console.log(`Hello, ${name}`);
};

sayHello("Jodi");

function giveMeName(callback) {
  callback("Jonatan");
}

giveMeName(function (name) {
  console.log(`Hello, ${name}`);
});
