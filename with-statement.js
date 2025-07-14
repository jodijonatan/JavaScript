// with statement sebenarnya tidak direkomendasikan
const person = {
  firstName: "Jodi",
  middleName: "Jonatan",
  lastName: "Karo karo",
};

// without with statement
console.log(person.firstName);
console.log(person.middleName);
console.log(person.lastName);

// with with statement
with (person) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}
