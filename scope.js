// global scope
let counter = 0;

function hitMe() {
  // scope local
  counter++;
}

function first() {
  let firstVariable = "First";

  function second() {
    console.log(firstVariable);
  }

  second();
}

// data di global scope bisa diaksese di local scope
// tapi data di local scope hanya bisa diakses oleh local scope tersebut atau scope local di bawahnya

hitMe();
hitMe();
first();

console.log(counter);
