const person = {
  firstName: "Jodi",
  middleName: "Jonatan",
  lastName: "Karo karo",
};

for (const property in person) {
  console.log(`${property} : ${person[property]}`);
}
