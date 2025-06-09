const absen = 90;
const nilai = 90;

let hasil = null;

if (absen >= 90 && nilai >= 90) {
  hasil = "A";
} else if (absen >= 80 && nilai >= 80) {
  hasil = "B";
} else if (absen >= 70 && nilai >= 70) {
  hasil = "C";
} else if (absen >= 60 && nilai >= 60) {
  hasil = "D";
} else {
  hasil = "E";
}

switch (hasil) {
  case "A":
    console.log("Lulus dengan sangat baik");
    break;
  case "B":
    console.log("Lulus dengan baik");
    break;
  case "C":
    console.log("Lulus dengan cukup baik");
    break;
  case "D":
    console.log("Lulus dengan kurang baik");
    break;
  case "E":
    console.log("Tidak lulus");
  default:
    console.log("Input tidak valid");
}

// function hasil(nilai, absen) {
//   if (nilai >= 90 && absen >= 90) return "A";
//   else if (nilai >= 80 && absen >= 80) return "B";
//   else if (nilai >= 70 && absen >= 70) return "C";
//   else if (nilai >= 60 && absen >= 60) return "D";
//   else if (nilai >= 50 && absen >= 50) return "E";
//   else return null;
// }

// const huruf = hasil();

// switch (huruf) {
//   case "A":
//     console.log("Lulus dengan sangat baik");
//     break;
//   case "B":
//     console.log("Lulus dengan baik");
//     break;
//   case "C":
//     console.log("Lulus dengan cukup baik");
//     break;
//   case "D":
//     console.log("Lulus dengan kurang baik");
//     break;
//   case "E":
//     console.log("Tidak lulus");
//     break;
//   default:
//     console.log("Input tidak valid");
// }
