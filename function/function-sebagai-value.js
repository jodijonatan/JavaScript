function sayHello(name) {
  console.log(`Hello, ${name}`);
}

const say = sayHello;

sayHello("Jodi");
say("Jodi");

function giveMeName(callback) {
  callback("Jonatan");
}

giveMeName(sayHello);
giveMeName(say);
