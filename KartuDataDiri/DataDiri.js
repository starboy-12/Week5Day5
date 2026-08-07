const namaLengkap = "Muhammad Fadhil";

const asalPondok = "Pondok IT";

let umur = 20;
let sudahSelesaiTugas = false; // mulai dari false
let skorProgres = 0; // mulai dari 0

skorProgres = skorProgres + 5; // aktivitas 1 (+5)
skorProgres = skorProgres + 7; // aktivitas 2 (+7)
skorProgres = skorProgres + 3; // aktivitas 3 (+3)

let dataDariServer = null;

let belumDiberiNilai;

const materiDipelajari = ["HTML", "CSS", "JavaScript"];

const profilSantri = {
  nama: namaLengkap,
  asal: asalPondok,
  umur: umur,
  sudahSelesaiTugas: sudahSelesaiTugas,
  materiDipelajari: materiDipelajari,
  dataDariServer: dataDariServer,
  skorProgres: skorProgres,
};

// Bagian 3 — Pemeriksaan Tipe Data
console.log("--- Tipe Data (Bagian 1 & 2) ---");
console.log("namaLengkap :", typeof namaLengkap);
console.log("asalPondok :", typeof asalPondok);
console.log("umur :", typeof umur);
console.log("sudahSelesaiTugas :", typeof sudahSelesaiTugas);
console.log("skorProgres :", typeof skorProgres);
console.log("dataDariServer :", typeof dataDariServer);
console.log("belumDiberiNilai :", typeof belumDiberiNilai);
console.log("materiDipelajari :", typeof materiDipelajari);
console.log("profilSantri :", typeof profilSantri);

console.log(
  "\nprofilSantri (contoh isi 1-2 properti):",
  profilSantri.nama,
  ",",
  profilSantri.umur,
);

let tahunMasuk = "2023";
console.log("\n--- Studi Kasus: Penjumlahan String vs Number ---");

console.log("tahunMasuk + 2 =", tahunMasuk + 2); // hasil: "20232" (concatenation)

// Perbaikan: konversi ke Number sebelum operasi aritmatika
let tahunMasukNumber = Number(tahunMasuk);
console.log("Number(tahunMasuk) + 2 =", tahunMasukNumber + 2); // hasil: 2025

// back end
console.log("\n--- Ringkasan ---");
console.log("Skor progres akhir:", skorProgres);
console.log("Profil lengkap:", profilSantri);
