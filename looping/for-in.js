const person = {
  firstName: "Jodi",
  middleName: "Jonatan",
  lastName: "Karo karo",
};

for (const key in person) {
  console.log(`${key} : ${person[key]}`);
}
