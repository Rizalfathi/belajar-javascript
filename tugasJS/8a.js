var nilai = prompt("Masukkan nilai: ");

nilai = Number(nilai);

var grade;
if (nilai < 40) {
  grade = "E";
} else if (nilai < 65) {
  grade = "D";
} else if (nilai < 75) {
  grade = "C";
} else if (nilai < 85) {
  grade = "B";
} else {
  grade = "A";
}

alert("nilai : " + nilai + " Grade Anda Adalah : " + grade);
