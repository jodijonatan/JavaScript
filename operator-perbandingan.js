let nilaiAkhir;

function getNilaiAkhit(ujian, absensi) {
  if (ujian >= 90 && absensi >= 90) {
    return (nilaiAkhir = "A");
  } else if (ujian >= 80 && absensi >= 80) {
    return (nilaiAkhir = "B");
  } else if (ujian >= 70 && absensi >= 70) {
    return (nilaiAkhir = "C");
  } else if (ujian >= 60 && absensi >= 60) {
    return (nilaiAkhir = "D");
  } else if (ujian >= 50 && absensi >= 50) {
    return (nilaiAkhir = "E");
  } else {
    console.log("Maukkan input yang valid!");
  }
}

getNilaiAkhit((ujian = 91), (absensi = 100));
let message = `Nilai ujian : ${ujian} \nNilai absensi : ${absensi}`;

switch (nilaiAkhir) {
  case "A":
    console.log(message);
    console.log("Lulus dengan sangat baik");
    break;
  case "B":
    console.log(message);
    console.log("Lulus dengan baik");
    break;
  case "C":
    console.log(message);
    console.log("Lulus dengan cukup baik");
    break;
  case "D":
    console.log(message);
    console.log("Lulus dengan kurang baik");
    break;
  case "E":
    console.log(message);
    console.log("Tidak lulus");
    break;
}
