export default class {
  constructor(name) {
    this.name = name;
  }

  hello(name) {
    console.log(`Hello, ${name} my name is ${this.name}!`);
  }
}
