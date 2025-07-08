let today = new Date();
let day = today.getDay();

switch (day) {
  case 0:
  case 6:
    console.log("Weekend!");
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log("Weeday...");
}
