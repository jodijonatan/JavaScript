function sayHello(name = "UNKNOWN", gender = "UNKNOWN") {
  console.log(`name : ${name}`);
  console.log(`gender : ${gender}`);
}

sayHello("Jodi");
sayHello("Jodi", undefined);
