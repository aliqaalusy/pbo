class Mahasiswa {
  constructor(nama, kelas, prodi, nim, nilai) {
    this.nama = nama; // Atribut publik
    this.kelas = kelas; // Atribut publik
    this.prodi = prodi; // Atribut publik
    let _nim = nim; // Atribut privat menggunakan closure
    this.nilai = nilai; // Atribut publik

    // Getter untuk mengakses nilai
    this.getNim = function() {
      return _nim;
    };
    // Setter untuk mengubah nilai dengan validasi
    this.setNim = function(nimBaru) {
      if (/^\d{4}$/.test(nimBaru)) { 
        _nim = nimBaru;
      }else { console.log("Nim harus terdiri dari 4 digit angka"); }
    };
  }
}
let mhs1 = new Mahasiswa("Tiara", "ip241", "informatika", "0064", 85);
let mhs2 = new Mahasiswa("widya", "mp241", "informasi", "0457", 70);

console.log(mhs1.nama, "-", mhs1.kelas,"-", mhs1.prodi, mhs1.getNim(), "-", mhs1.nilai);
console.log(mhs2.nama, "-", mhs2.kelas,"-", mhs2.prodi, mhs2.getNim(), "-", mhs2.nilai);
            
mhs1.setNim("0055");
mhs2.setNim("0234");

console.log(mhs1.nama, "-", mhs1.kelas,"-", mhs1.prodi, mhs1.getNim(), "-", mhs1.nilai);
console.log(mhs2.nama, "-", mhs2.kelas,"-", mhs2.prodi, mhs2.getNim(), "-", mhs2.nilai);
