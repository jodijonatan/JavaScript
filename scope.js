// global scope
let counter = 0;

function hitMe() {
  // scope local
  counter++;
}

// data di global scope bisa diaksese di local scope
// tapi data di local scope hanya bisa diakses oleh local scope tersebut atau scope local di bawahnya

hitMe();
hitMe();

console.log(counter);
