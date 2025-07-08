const buah = ["apel", "jeruk", "mangga"];

const hasil = buah.map((item) => item.toUpperCase());
console.log(hasil);

hasil.forEach((item) => {
  console.log(item);
});

const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const genap = angka.filter((n) => n % 2 === 0);
console.log(genap);

const cari = buah.find((item) => item === "jeruk");
console.log(cari);

console.log(buah.includes("mangga"));
console.log(buah.includes("pisang"));
