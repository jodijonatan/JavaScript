function outer() {
  function inner() {
    console.log("Inner");
  }

  inner();
  inner();
}

outer();
// inner(); error, karena inner function tidak bisa diakses dari function parent nya
