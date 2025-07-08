function sayHello(firstName, lastName) {
  const say = `Hello ${firstName} ${lastName}`;
  return say;
}

const result = sayHello("Jodi", "Jonatan");
console.log(result);

function getFinalValue(value) {
  if (value >= 90) {
    return "A";
  } else if (value >= 80) {
    return "B";
  } else if (value >= 70) {
    return "C";
  } else {
    return "D";
  }
}

const finalValue = getFinalValue(90);
console.log(finalValue);

function isContains(array, searchValue) {
  for (const element of array) {
    // console.log(`iterasi element ${element}`);
    if (element == searchValue) {
      return true;
    }
  }
  return false;
}

const array = [1, 2, 3, 2, 452, 4, 52, 52, 523];
const search = 3;
const found = isContains(array, search);
console.log(found);
