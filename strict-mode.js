const person = {
  firstName: "Jodi",
};

with (person) {
  console.log(firstName);
}

function useStrictMode() {
  "use strict";
  const person = {
    lastName: "Jonatan",
  };

  // error, karena with statement tidak direkomendasikan untuk dipakai di ECMAScript
  with (person) {
    console.log(lastName);
  }
}

useStrictMode();
