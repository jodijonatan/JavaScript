const firstName = "John";
const middleName = "Doe";
const lastName = "Alex";

function hello() {
  console.log("Hello from module object");
}

class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }
}

export { firstName, middleName, lastName, hello, Person };
