const person = {
  name: "Jodi",
  sayHello: (name) => console.log(`Hello ${name}, my name is ${person.name}`),
};
// ingat, keyword this tidak bisa digunakan di arrow function

person.sayHello("Jonatan");
