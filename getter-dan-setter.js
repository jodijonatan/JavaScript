// tanpa getter, kita bisa membuat function, tapi fullname tidak dianggap property
const person = {
  firstName: "Jodi",
  lastName: "Jonatan",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());

// dengan getter, fullname dianggap sebagai property
const personGetter = {
  firstName: "Jodi",
  lastName: "Jonatan",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(personGetter.fullName);

const personSetter = {
  firstName: "Jodi",
  lastName: "Jonatan",
  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};
personSetter.fullName = "Diego Nethan";
console.log(personSetter.firstName);
console.log(personSetter.lastName);
