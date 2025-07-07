const person = {};

//   let country;
// cara manual dengan if statement
//   if (person.address !== undefined && person.address !== null) {
//     country = person.address.country;
//   }

// cara dengan optional chaining
let country = person?.address?.country;

console.log(`${country}`);
