class Mahasiswa {
  // Konstruktor untuk inisialisasi objek
  constructor(nama, nim, jurusan) {
    this.nama = nama;   // Properti objek
    this.nim = nim;
    this.jurusan = jurusan;
  }

  // Metode untuk menampilkan informasi mahasiswa
  displayInfo() {
    console.log(`Mahasiswa: ${this.nama} (${this.nim}) ${this.jurusan}`);
  }
  // Metode 2
  updateJurusan(jurusanBaru) {
    this.jurusan = jurusanBaru;
    console.log(`${this.nama} pindah jurusan ke ${this.jurusan}`);
  }
}
class Organisasi extends Mahasiswa {
  constructor(nama, nim, jurusan, namaOrganisasi, jabatan) {
    super(nama, nim, jurusan);
    this.namaOrganisasi = namaOrganisasi;
    this.jabatan = jabatan;
  }

  displayOrganisasi() {
    console.log(
      `Mahasiswa: ${this.nama} (${this.nim}) ${this.jurusan}, Organisasi: ${this.namaOrganisasi}, Jabatan: ${this.jabatan}`
    );
  }
}
class Alumni extends Mahasiswa {
  constructor(nama, nim, jurusan, tahunLulus, pekerjaan) {
    super (nama, nim, jurusan);
    this. tahunLulus = tahunLulus;
    this.pekerjaan = pekerjaan;
  }
  displayAlumni(){
    console.log(
      `Alumni: ${this.nama} (${this.nim}) ${this.jurusan}, Lulus: ${this.tahunLulus}, Pekerjaan: ${this.pekerjaan}`
    );
  }
}

// Instansiasi objek dari kelas Mahasiswa
const mhs1 = new Mahasiswa(`Tiara`, 202401110056, `Informatika`); // Membuat objek mahasiswa1
mhs1.displayInfo();
mhs1.updateJurusan("Informasi");

const mhsOrganisasi = new Organisasi(`Aliqa`, 202401110046, `DKV`, `BEM`, `Ketua`);
mhsOrganisasi.displayOrganisasi();

const alumni1 = new Alumni(`Widya`, 202401110055, `Teknik Industri`, 2024, `UI/UX Designer`);
alumni1.displayAlumni();

