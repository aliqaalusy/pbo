const mahasiswa = [
{ nama: "Andi", umur: 21, jurusan: "Informatika" },
{ nama: "Budi", umur: 22, jurusan: "Sistem Informasi" }
];
// Simpan ke localStorage
localStorage.setItem("mahasiswa",
JSON.stringify(mahasiswa));
console.log("Data mahasiswa disimpan di localStorage!");
// Ambil kembali dari localStorage
const jsonString = localStorage.getItem("mahasiswa");
const mahasiswaList = JSON.parse(jsonString);
console.log("Daftar Mahasiswa:");
mahasiswaList.forEach(mhs =>
console.log(`${mhs.nama} - ${mhs.jurusan}`)
);

// Form Pendaftaran ( Bisa Tambah Data Baru)

// Ambil data lama
let data = JSON.parse(localStorage.getItem("pendaftar")) || [];

// Pendaftar baru
const baru = { 
    nama: "Aliqa", 
    email: "aliqa@ipwija.ac.id", 
    gender: "Perempuan",
    jurusan: "Informatika"
};

// Push lalu simpan ulang
data.push(baru);
localStorage.setItem("pendaftar", JSON.stringify(data));

// Tampilkan
console.log("Pendaftaran Mahasiswa");
console.log("Daftar Pendaftar:");
data.forEach(p => console.log(`${p.nama} | ${p.email} | ${p.gender} | ${p.jurusan}`));
