var pilihanSuit = ["gajah", "semut", "orang"];
var pilihanUser = prompt("Pilih salah satu: gajah, semut, orang: ");
var pilihanKomputer = pilihanSuit[Math.floor(Math.random() * 3)];
var pemenang;
if (pilihanUser === "") {
  alert("Mohon isi dengan benar");
} else if (pilihanUser !== "gajah" && pilihanUser !== "semut" && pilihanUser !== "orang") {
  alert("Isi yang bener atuh SIRR");
} else {
  if (pilihanUser == pilihanKomputer) {
  pemenang = "seri";
  } else if (pilihanUser == "gajah" && pilihanKomputer == "semut") {
  pemenang = "pemain";
  } else if (pilihanUser == "semut" && pilihanKomputer == "orang") {
  pemenang = "pemain";
  } else {
  pemenang = "komputer";
  }
}

alert("Hasil Permainan: \nPemain memilih: " + pilihanUser + "\nKomputer memilih: " + pilihanKomputer + "\nPemenang: " + pemenang);
