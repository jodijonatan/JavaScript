// destructuring array
{
  // pengambilan data array manual
  // const person = ["Jodi", "Jonatan", "Karo karo"];

  // const firstName = person[0];
  // const middleName = person[1];
  // const lastName = person[2];

  // console.log(firstName);
  // console.log(middleName);
  // console.log(lastName);

  // pengambilan data array destructuring
  const personDestructuring = [
    "Jodi",
    "Jonatan",
    "Karo karo",
    "Diego",
    "Nethan",
  ];

  const [firstName, middleName, lastName, ...other] = personDestructuring;

  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
  console.log(other);
}

// destructuring object
{
  const person = {
    firstName: "Jodi",
    lastName: "Jonatan",
    address: {
      street: "Jalan Paya Bundung",
      city: "Medan",
      country: "Indonesia",
    },
    hobby: "Game",
    channel: "cold.joo",
  };

  const {
    firstName,
    lastName,
    address: { street, city, country },
    ...other
  } = person;

  console.log(firstName);
  console.log(lastName);
  console.log(street);
  console.log(city);
  console.log(country);
  console.log(other);
}

// destructuring di function parameter
{
  function displayParameter({ firstName, middleName, lastName }) {
    console.log(firstName);
    console.log(middleName);
    console.log(lastName);
  }

  const person = {
    firstName: "Jodi",
    middleName: "Jonatan",
    lastName: "Karo karo",
  };

  displayParameter(person);

  function sum([first, second]) {
    return first + second;
  }

  console.info(sum([10, 10]));
  console.info(sum([20, 20]));
}

// destructuring default value
{
  const person = {
    firsName: "Jodi",
    middleName: "Jonatan",
    // lastName: "Karo karo",
  };

  const {
    firsName = "unknown",
    middleName = "unknown",
    lastName = "unknown",
  } = person;

  console.log(firsName);
  console.log(middleName);
  console.log(lastName); // unknown, karena lastName pada person diblock
}

// menggunakan nama variable lain saat destructuring object
{
  const person = {
    firsName: "Jodi",
    middleName: "Jonatan",
    // lastName: "Karo karo",
  };

  const {
    firsName: namaDepan = "unknown",
    middleName: namaTengah = "unknown",
    lastName: namaBelakang = "unknown",
  } = person;

  console.log(namaDepan);
  console.log(namaTengah);
  console.log(namaBelakang); // unknown, karena lastName pada person diblock
}
