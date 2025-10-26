const company = "JO DEV";

function sayCompany() {
  console.log(`Company: ${company}`);
}

class Employee {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I work at ${company}.`);
  }
}
export { company, sayCompany, Employee };
