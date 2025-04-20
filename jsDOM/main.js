document.title = "Jodi Jonatan";

const btn1 = document.getElementById("toggle1");
const btn2 = document.getElementById("toggle2");
const container = document.getElementById("container");

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.marginTop = "200px";

btn1.style.background = "blue";
btn1.style.marginRight = "15px";
btn1.style.border = "none";
btn1.style.padding = "10px 20px";
btn1.style.borderRadius = "100px";

btn2.style.background = "red";
btn2.style.border = "none";
btn2.style.padding = "10px 20px";
btn2.style.borderRadius = "100px";

function klik() {
  alert("BERHASIL DIKLIK");
}

function masuk() {
  btn1.style.background = "aqua";
  btn1.style.cursor = "pointer";
}

function keluar() {
  btn1.style.background = "blue";
}

const body = document.body;
let nama = null;

function masuk2() {
  nama = document.createElement("h3");
  nama.textContent = "JODI JONATAN";
  body.append(nama);
}

function keluar2() {
  nama.style.color = "blue";
  body.append(nama);
}
