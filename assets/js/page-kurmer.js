
// PAGE SPECIFIC DATA & LOGIC

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySaAB2WT0D59UlLyZcXliWvNURCnHcRrqz5P8C2LCQbVdk0hn3Qkl1glGiLJSql_Wh/exec';
const uniqueCode = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

// Data
const pricing = {
    "SD/MI": 50000,
    "SMP/MTS": 75000,
    "SMA/MAN": 100000,
    "SMK/MAK": { umum: 100000, kejuruan: 125000 }
};

const mapelSD = ["Bahasa Indonesia", "Bahasa Inggris", "Ilmu Pengetahuan Alam dan Sosial", "Koding dan Kecerdasan Artifisial", "Matematika", "Muatan Lokal", "Pendidikan Agama Buddha dan Budi Pekerti", "Pendidikan Agama Hindu dan Budi Pekerti", "Pendidikan Agama Islam dan Budi Pekerti", "Pendidikan Agama Katolik dan Budi Pekerti", "Pendidikan Agama Khonghucu dan Budi Pekerti", "Pendidikan Agama Kristen dan Budi Pekerti", "Pendidikan Jasmani Olahraga dan Kesehatan", "Pendidikan Pancasila", "Seni Musik", "Seni Rupa", "Seni Tari", "Seni Teater"];
const mapelSMP = ["Bahasa Indonesia", "Bahasa Inggris", "Ilmu Pengetahuan Alam", "Ilmu Pengetahuan Sosial", "Informatika", "Koding dan Kecerdasan Artifisial", "Matematika", "Muatan Lokal", "Pendidikan Agama Buddha dan Budi Pekerti", "Pendidikan Agama Hindu dan Budi Pekerti", "Pendidikan Agama Islam dan Budi Pekerti", "Pendidikan Agama Katolik dan Budi Pekerti", "Pendidikan Agama Khonghucu dan Budi Pekerti", "Pendidikan Agama Kristen dan Budi Pekerti", "Pendidikan Jasmani Olahraga dan Kesehatan", "Pendidikan Pancasila", "Prakarya Budi Daya", "Prakarya Kerajinan", "Prakarya Pengolahan", "Prakarya Rekayasa", "Seni Musik", "Seni Rupa", "Seni Tari", "Seni Teater"];
const mapelSMA = ["Antropologi", "Bahasa Indonesia", "Bahasa Indonesia Tingkat Lanjut", "Bahasa Inggris", "Bahasa Inggris Tingkat Lanjut", "Bahasa Jepang", "Bahasa Jerman", "Bahasa Korea", "Bahasa Mandarin", "Bahasa Prancis", "Biologi", "Ekonomi", "Fisika", "Geografi", "Informatika", "Kimia", "Koding dan Kecerdasan Artifisial", "Matematika", "Matematika Tingkat Lanjut", "Muatan Lokal", "Pendidikan Agama Buddha dan Budi Pekerti", "Pendidikan Agama Hindu dan Budi Pekerti", "Pendidikan Agama Islam dan Budi Pekerti", "Pendidikan Agama Katolik dan Budi Pekerti", "Pendidikan Agama Khonghucu dan Budi Pekerti", "Pendidikan Agama Kristen dan Budi Pekerti", "Pendidikan Jasmani Olahraga dan Kesehatan", "Pendidikan Pancasila", "Prakarya dan Kewirausahaan", "Sejarah", "Sejarah Tingkat Lanjut", "Seni Musik", "Seni Rupa", "Seni Tari", "Seni Teater", "Sosiologi"];
const mapelSMKUmum = ["Bahasa Indonesia", "Bahasa Inggris", "Dasar-Dasar Program Keahlian", "Informatika", "Koding dan Kecerdasan Artifisial", "Konsentrasi Keahlian", "Kreativitas Inovasi dan Kewirausahaan", "Matematika", "Muatan Lokal", "Pendidikan Agama Buddha dan Budi Pekerti", "Pendidikan Agama Hindu dan Budi Pekerti", "Pendidikan Agama Islam dan Budi Pekerti", "Pendidikan Agama Katolik dan Budi Pekerti", "Pendidikan Agama Khonghucu dan Budi Pekerti", "Pendidikan Agama Kristen dan Budi Pekerti", "Pendidikan Jasmani Olahraga dan Kesehatan", "Pendidikan Pancasila", "Praktik Kerja Lapangan", "Projek Ilmu Pengetahuan Alam dan Sosial", "Sejarah", "Seni Musik", "Seni Rupa", "Seni Tari", "Seni Teater"];
const mapelAgama = ["Akidah Akhlak", "Sejarah Kebudayaan Islam", "Al-Quran Hadis", "Bahasa Arab", "Fiqih"];

const educationalData = {
    "SD/MI": { "Kelas 1": mapelSD, "Kelas 2": mapelSD, "Kelas 3": mapelSD, "Kelas 4": mapelSD, "Kelas 5": mapelSD, "Kelas 6": mapelSD },
    "SMP/MTS": { "Kelas 7": mapelSMP, "Kelas 8": mapelSMP, "Kelas 9": mapelSMP },
    "SMA/MAN": { "Kelas 10": mapelSMA, "Kelas 11": mapelSMA, "Kelas 12": mapelSMA },
    "SMK/MAK": {
        "Akuntansi dan Keuangan Lembaga (AKL)": { "Kelas 10": [...mapelSMKUmum, ...["Akuntansi Dasar", "Aplikasi Pengolah Angka/Spreadsheet", "Etika Profesi", "Perbankan Dasar"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Administrasi Pajak", "Akuntansi Keuangan", "Komputer Akuntansi", "Praktikum Akuntansi Lembaga/Instansi Pemerintah", "Praktikum Akuntansi Perusahaan Jasa, Dagang, Manufaktur"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Administrasi Pajak", "Akuntansi Keuangan", "Komputer Akuntansi", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Teknik Komputer dan Jaringan (TKJ)": { "Kelas 10": [...mapelSMKUmum, ...["Dasar Desain Grafis", "Komputer dan Jaringan Dasar", "Pemrograman Dasar", "Simulasi dan Komunikasi Digital", "Sistem Komputer"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Administrasi Infrastruktur Jaringan (AIJ)", "Administrasi Sistem Jaringan (ASJ)", "Teknologi Jaringan Berbasis Luas (WAN)", "Teknologi Layanan Jaringan (TLJ)"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Administrasi Infrastruktur Jaringan (AIJ)", "Administrasi Sistem Jaringan (ASJ)", "Keamanan Jaringan", "Produk Kreatif dan Kewirausahaan", "Teknologi Layanan Jaringan (TLJ)"].sort()] },
        "Farmasi Klinis, Komunitas & Industri": { "Kelas 10": [...mapelSMKUmum, ...["Dasar-dasar Farmakognosi", "Dasar-dasar Farmakologi", "Dasar-dasar Kefarmasian", "Dasar-dasar Kerja di Laboratorium", "Perundang-undangan Kesehatan"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Administrasi Farmasi", "Farmakognosi", "Farmakologi Dasar", "Ilmu Kesehatan Masyarakat", "Kimia Farmasi", "Teknik Farmasi & Peracikan Obat"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Manajemen Bahan", "Pelayanan Farmasi", "Pengujian dan Pengendalian Mutu Produk", "Perencanaan Produksi dan Persediaan", "Produk Kreatif dan Kewirausahaan", "Riset dan Pengembangan Farmasi", "Teknik Pembuatan Sediaan Obat", "Teknologi Pengemasan Obat"].sort()] },
        "Perhotelan": { "Kelas 10": [...mapelSMKUmum, ...["Kepariwisataan", "Sanitasi, Hygiene, dan Keselamatan Kerja", "Tata Hidang"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Manajemen Hotel", "Operasi Dapur dan Tata Boga", "Pelayanan Pelanggan", "Room Division (Front Office, Housekeeping, Laundry)"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Administrasi Hotel", "Manajemen Event/Acara", "Manajemen Restoran", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Teknik Mesin/Pemesinan": { "Kelas 10": [...mapelSMKUmum, ...["Dasar Perancangan Teknik Mesin", "Dasar-dasar Teknik Pemesinan", "Teknik Gambar Mesin (manual/CAD)", "Teknologi Mekanik"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Praktikum Pemesinan", "Teknik Pemesinan Bubut", "Teknik Pemesinan Frais", "Teknik Pemesinan Gerinda", "Teknik Pengelasan (OAW, SMAW, MIG/MAG)"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Gambar Teknik Manufaktur", "Kelistrikan Mesin (mesin industri)", "Produk Kreatif dan Kewirausahaan", "Teknik Pemesinan NC/CNC dan CAM"].sort()] },
        "Tata Boga/Kuliner": { "Kelas 10": [...mapelSMKUmum, ...["Boga Dasar", "Ilmu Gizi", "Pengetahuan Bahan Makanan", "Sanitasi, Hygiene dan Keselamatan Kerja"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Pengolahan dan Penyajian Makanan Indonesia dan Kontinental", "Tata Hidang"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Hidangan Kesempatan Khusus & Fusion Food", "Pengelolaan Usaha Boga", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Rekayasa Perangkat Lunak (RPL)": { "Kelas 10": [...mapelSMKUmum, ...["Dasar Desain Grafis", "Komputer dan Jaringan Dasar", "Pemrograman Dasar", "Sistem Komputer"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Basis Data", "Pemodelan Perangkat Lunak", "Pemrograman Berorientasi Objek"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Basis Data", "Pemrograman Web dan Perangkat Bergerak", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Multimedia": { "Kelas 10": [...mapelSMKUmum, ...["Desain Grafis Percetakan", "Desain Interaktif", "Desain Media Interaktif", "Komunikasi Visual"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Pengembangan Game", "Pengembangan Multimedia", "Teknik Animasi 2D dan 3D", "Teknik Pengolahan Audio dan Video"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Editing Audio", "Produk Kreatif dan Kewirausahaan", "Produksi Sinema dan Film"].sort()] },
        "Teknik Otomotif (TKR: Mobil, TSM: Motor)": { "Kelas 10": [...mapelSMKUmum, ...["Chassis dan Sistem Pemindah Tenaga", "Dasar-dasar Mesin Kendaraan", "Kelistrikan Otomotif"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Pemeliharaan dan Tune-up Mesin", "Teknologi Otomotif Terbaru (injeksi, ECU, scanner diagnostik)"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Pemeliharaan Kelistrikan/Mesin/Sasis Kendaraan Ringan", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Teknik Instalasi dan Tenaga Listrik": { "Kelas 10": [...mapelSMKUmum, ...["Dasar-dasar Kelistrikan & Elektronika", "Gambar Teknik Listrik", "Pekerjaan Dasar Elektromekanik"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Instalasi Motor Listrik", "Instalasi Tenaga Listrik (rumah, industri, gedung)", "Perbaikan Peralatan Listrik", "Sistem Kontrol Otomasi Industri"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Keselamatan Kerja Listrik", "Produk Kreatif dan Kewirausahaan", "Proteksi Jaringan Tenaga Listrik", "Teknik Pembangkit/Jaringan Tenaga Listrik"].sort()] },
        "Tata Busana": { "Kelas 10": [...mapelSMKUmum, ...["Dasar Desain", "Pembuatan Pola", "Pengetahuan Bahan Tekstil", "Teknologi Menjahit"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Desain Busana", "Pembuatan Busana Custom Made", "Pembuatan Hiasan Busana"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Pembuatan Busana Industri", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Animasi": { "Kelas 10": [...mapelSMKUmum, ...["Animasi Dasar", "Desain Karakter", "Estetika Animasi", "Storyboard", "Teknik Penggambaran"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Animasi 2D dan 3D", "Digital Processing", "Penggunaan perangkat lunak animasi", "Videografi Animasi"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Produk Kreatif dan Kewirausahaan", "Produksi Animasi (projek nyata)"].sort()] },
        "Otomatisasi dan Tata Kelola Perkantoran (OTKP)": { "Kelas 10": [...mapelSMKUmum, ...["Dasar-dasar Administrasi", "Dasar-dasar Akuntansi", "Ekonomi Bisnis", "Simulasi Digital", "Teknologi Perkantoran"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Kearsipan", "Korespondensi", "Otomatisasi Tata Kelola Kepegawaian", "Otomatisasi Tata Kelola Keuangan", "Pengelolaan Surat Masuk dan Keluar"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Komputer Administrasi Perkantoran", "Otomatisasi Tata Kelola Humas dan Keprotokolan", "Otomatisasi Tata Kelola Sarana dan Prasarana", "Pengelolaan Informasi", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Broadcasting dan Perfilman (Produksi dan Siaran Program Televisi)": { "Kelas 10": [...mapelSMKUmum, ...["Dasar Editing Video", "Dasar-dasar Fotografi, Tata Kamera, Tata Artistik, Tata Suara", "Dasar-dasar Produksi Siaran dan Film", "Pengantar Naskah dan Storyboard", "Pengoperasian Kamera Video dan DSLR", "Teknik Pengambilan Gambar dan Pencahayaan Dasar"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Dasar-dasar Jurnalistik dan Penyiaran", "Estetika Seni Audio Visual", "Komunikasi Visual dan Penyajian Pesan Audio-Visual", "Peralatan Audio Video", "Penulisan Skenario Film dan Televisi", "Produksi Film Pendek", "Produksi Program Televisi"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Media Digital", "Pengelolaan Produksi dan Post-produksi", "Penyutradaraan, Sinematografi, dan Tata Artistik", "Produk Kreatif dan Kewirausahaan", "Proyek Siaran Sekolah/TV Komunitas", "Teknik Editing Lanjut (Video, Audio, Color Grading)", "Teknik Penyiaran (Radio & TV Digital)"].sort()] },
        "Tata Graha (Housekeeping/Perawatan Kamar)": { "Kelas 10": [...mapelSMKUmum, ...["Pembersihan Area Umum Hotel"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Penataan Ruang Serbaguna", "Penyiapan Kamar Tamu"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Housekeeping (Manajemen Tata Graha)", "Praktik Housekeeping", "Produk Kreatif dan Kewirausahaan", "Tata Graha Kamar Hotel"].sort()] },
        "Asisten Keperawatan": { "Kelas 10": [...mapelSMKUmum, ...["Anatomi Fisiologi", "Ilmu Kesehatan Masyarakat", "Komunikasi Keperawatan", "Konsep Dasar Keperawatan"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Dasar Farmakologi", "Dokumentasi Keperawatan", "Keterampilan Dasar Tindakan Keperawatan", "Komunikasi Terapeutik", "Praktik Laboratorium"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Asuhan Keperawatan", "Dokumentasi Tindakan Keperawatan", "Kesehatan Reproduksi", "Pemeriksaan Laboratorium", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Teknik Konstruksi dan Perumahan/Bangunan": { "Kelas 10": [...mapelSMKUmum, ...["Gambar Teknik Bangunan", "Melaksanakan Pekerjaan Pondasi Dangkal", "Mekanika Teknik", "Simulasi Digital", "Ukur Tanah"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Konstruksi Bangunan", "Konstruksi Bangunan Gedung", "Melaksanakan Pekerjaan Beton", "Melaksanakan Pemasangan Bata dan Kusen", "Teknik Konstruksi Baja, Kayu, Batu dan Beton"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Estimasi Biaya Konstruksi, Sanitasi dan Perawatan Gedung", "Melaksanakan Pekerjaan Kuda-kuda", "Melaksanakan Pekerjaan Plester dan Acian", "Melaksanakan Pemasangan Rangka dan Penutup Atap", "Perawatan Gedung", "Produk Kreatif dan Kewirausahaan", "Sistem Utilitas Bangunan Gedung"].sort()] },
        "Desain Grafika (Graphic Design)": { "Kelas 10": [...mapelSMKUmum, ...["Dasar-Dasar Seni Rupa", "Gambar Sketsa", "Pengetahuan Bahan Grafika"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Desain Grafis Percetakan", "Komputer Grafis", "Software Desain (CorelDraw, Adobe Illustrator, Adobe Photoshop)", "Teknik Percetakan"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Desain Media Cetak", "Desain Publikasi", "Pengembangan Multimedia", "Produk Kreatif dan Kewirausahaan", "Videografi"].sort()] },
        "Manajemen Logistik/Teknik Logistik": { "Kelas 10": [...mapelSMKUmum, ...["Logistik dan Rantai Pasokan", "Regulasi Sektor Logistik dan Keselamatan Kerja"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Administrasi Pergudangan", "Manajemen Penanganan Bahan", "Penanganan Transportasi", "Sistem Manajemen Logistik"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Manajemen Distribusi dan Delivery", "Produk Kreatif dan Kewirausahaan", "Teknologi Logistik"].sort()] },
        "Pariwisata/Usaha Perjalanan Wisata (UPW/ULP)": { "Kelas 10": [...mapelSMKUmum, ...["Administrasi Pariwisata", "Komunikasi Pariwisata", "Pengetahuan Destinasi Wisata"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Pemandu Perjalanan Wisata", "Pemesanan Tempat & Ticket Penerbangan", "Penyusunan Itinerary", "Ticketing Penerbangan", "Tour Planning"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Budgeting Wisata", "Event Management/Manajemen Acara", "Pemasaran Pariwisata", "Perencanaan & Pengelolaan Perjalanan Wisata", "Praktik Kerja Lapangan di Industri Pariwisata", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Teknik Pengelasan dan Fabrikasi Logam": { "Kelas 10": [...mapelSMKUmum, ...["Dasar Perancangan Teknik Mesin", "Fabrikasi Logam Dasar", "Gambar Teknik Mesin", "Pekerjaan Dasar Teknik Mesin", "Teknik Gambar dan Simbol Las"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Teknik Pengelasan Busur Manual (SMAW)", "Teknik Pengelasan Gas Metal (MIG/MAG)", "Teknik Pengelasan Gas Tungsten (TIG)", "Teknik Pengelasan Oksi-Asetelin (OAW)"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Penanganan Material dan Keselamatan Kerja", "Produk Kreatif dan Kewirausahaan", "Teknik Pengelasan FCAW"].sort()] },
        "Kebidanan": { "Kelas 10": [...mapelSMKUmum, ...["Anatomi & Fisiologi", "Dasar-Dasar Obstetri & Ginekologi", "Ilmu Gizi", "Konsep dan Pelayanan Kebidanan"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Asuhan Kebidanan pada Anak", "Asuhan Kebidanan pada Ibu", "Farmakologi Dalam Kebidanan", "Komunikasi & Konseling", "Praktik Kebidanan"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Asuhan Kebidanan Persalinan dan Bayi Baru Lahir", "Dokumentasi Kebidanan", "Keluarga Berencana", "Kesehatan Perempuan dan Perencanaan Keluarga", "Penatalaksanaan Kegawatdaruratan", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Teknologi Laboratorium Medik (TLM/Analis Kesehatan)": { "Kelas 10": [...mapelSMKUmum, ...["Anatomo Fisiologi", "Biologi Sel dan Molekuler", "Dasar Manajemen Laboratorium dan Kesehatan Lingkungan", "Fisiologi", "Flebotomi", "Instrumentasi", "Patofisiologi", "Pengantar Laboratorium Medik"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Bakteriologi", "Hematologi", "Histologi", "Imunoserologi", "Kimia Klinik", "Laboratorium Kesehatan Dasar", "Mikrobiologi Kesehatan", "Sitohistoteknologi", "Urinalisa dan Cairan Tubuh"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Kontrol Kualitas Prosedur Laboratorium", "Penanganan Sampel dan Reagen Laboratorium", "Pengendalian Mutu Hasil Pertanian", "Pemeriksaan Laboratorium", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Desain Komunikasi Visual (DKV)": { "Kelas 10": [...mapelSMKUmum, ...["Dasar Desain", "Dasar-Dasar Seni Rupa", "Gambar Sketsa", "Komunikasi Visual"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Desain Grafis Percetakan", "Desain Media Interaktif", "Desain Publikasi", "Komputer Grafis", "Videografi"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Editing Audio", "Editing Video", "Pengembangan Game", "Pengembangan Multimedia", "Produk Kreatif dan Kewirausahaan", "Teknik Animasi 2D dan 3D", "Teknik Pengolahan Audio dan Video"].sort()] },
        "Dental Asisten (Kesehatan Gigi)": { "Kelas 10": [...mapelSMKUmum, ...["Anatomi dan Fisiologi Gigi dan Mulut", "Radiografi Gigi", "Sterilisasi dan Kebersihan"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Etika dan Hukum dalam Praktek Dental", "Instrumen Klinis", "Kesehatan Mulut Anak-Anak", "Prosedur Pencegahan Infeksi", "Prosedur Perawatan Gigi Dasar"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Aspek Bisnis dalam Praktek Dental", "Dokumentasi Pasien Dental", "Farmakologi Dental", "Pelayanan Pasien Dental", "Penggunaan Perangkat Medis", "Produk Kreatif dan Kewirausahaan", "Standar Praktik Dental"].sort()] },
        "Pekerjaan Sosial & Caregiver (Perawatan Sosial)": { "Kelas 10": [...mapelSMKUmum, ...["Dasar-dasar Keperawatan Sosial", "Kesehatan Mental", "Keterampilan Komunikasi"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Dukungan Sosial", "Kesehatan dan Kesejahteraan", "Pengembangan Keterampilan Pribadi", "Perawatan Dasar", "Perawatan Jangka Panjang"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Asuhan Sosial", "Dokumentasi Asuhan Sosial", "Komunikasi Terapeutik", "Manajemen Kesehatan Masyarakat", "Perawatan Lanjut Usia", "Praktik Keperawatan Sosial", "Produk Kreatif dan Kewirausahaan"].sort()] },
        "Agribisnis Pengolahan Hasil Pertanian": { "Kelas 10": [...mapelSMKUmum, ...["Dasar Penanganan Bahan Hasil Pertanian", "Dasar Pengendalian Mutu Hasil Pertanian", "Dasar Proses Pengolahan Hasil Pertanian", "Kesehatan dan Keselamatan Kerja (K3)"].sort()], "Kelas 11": [...mapelSMKUmum, ...["GMP (Good Manufacturing Practice)", "Pengemasan, Penyimpanan dan Penggudangan", "Produksi Pengolahan Hasil Hewani", "Produksi Pengolahan Hasil Nabati", "Produksi Pengolahan Komoditas Perkebunan dan Herbal", "SSOP (Sanitation Standard Operating Procedures)"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Analisa Usaha Pengolahan Hasil Pertanian", "HACCP (Hazard Analysis Critical Control Point)", "Penanganan Limbah Pengolahan Hasil Pertanian", "Produk Kreatif dan Kewirausahaan", "Sistem Manajemen Keamanan Pangan dan Kualitas Produk"].sort()] },
        "Agribisnis Perikanan Air Tawar": { "Kelas 10": [...mapelSMKUmum, ...["Dasar-dasar Budidaya Perikanan", "Kesehatan dan Keselamatan Kerja (K3)", "Pengelolaan Kualitas Air", "Pengendalian Hama dan Penyakit"].sort()], "Kelas 11": [...mapelSMKUmum, ...["Pengelolaan Wadah dan Media Pendederan", "Produksi Pakan Alami dan Pakan Buatan", "Seleksi Benih", "Teknik Pembesaran Komoditas Perikanan", "Teknik Pendederan Komoditas Perikanan"].sort()], "Kelas 12": [...mapelSMKUmum, ...["Analisis Kelayakan Usaha Perikanan", "Inovasi Teknologi Perikanan", "Pemanenan Hasil Produksi", "Pemasaran Hasil Produksi Komoditas Perikanan", "Pemantauan Laju Pertumbuhan", "Produk Kreatif dan Kewirausahaan"].sort()] }
    }
};

const paymentMethods = [
    { id: 'qris', name: 'QRIS', desc: 'Scan & bayar pakai app apapun', logo: 'https://pixvid.org/images/2026/01/16/CmB6A.png', type: 'qr', category: 'qris', number: '00020101021126610016ID.CO.SHOPEE.WWW01189360091800223157700208223157700303UMI51440014ID.CO.QRIS.WWW0215ID10254270621910303UMI5204481453033605802ID5904Epay6013JAKARTA PUSAT61051061062070703A0163042F15' },
    { id: 'bri', name: 'BRI', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/16/CmNqe.png', type: 'bank', category: 'bank', number: '30135085184808548', holder: 'GP-085184808548' },
    { id: 'bca', name: 'BCA', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/16/CmBsX.png', type: 'bank', category: 'bank', number: '70001085184808548', holder: 'GP-085184808548' },
    { id: 'permata', name: 'Bank Permata', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/19/CZuxo.png', type: 'bank', category: 'bank', number: '898085184808548', holder: 'GP-085184808548' },
    { id: 'seabank', name: 'Seabank', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/19/CZuFY.png', type: 'bank', category: 'bank', number: '782085184808548', holder: '6285184808548' },
    { id: 'gopay', name: 'GoPay', desc: 'Bayar langsung dari Gojek', logo: 'https://pixvid.org/images/2026/01/16/CmBl6.png', type: 'ewallet', category: 'ewallet', number: '085184808548', holder: 'Epay' },
    { id: 'ovo', name: 'OVO', desc: 'Transfer ke nomor OVO', logo: 'https://pixvid.org/images/2026/01/16/CmNNQ.png', type: 'ewallet', category: 'ewallet', number: '085184808548', holder: 'Epay' }
];

const kelengkapanList = [
    "Modul Ajar Terintegrasi Deep Learning (2 Semester)",
    "Capaian Pembelajaran (CP)",
    "Alur Tujuan Pembelajaran (ATP)",
    "Lembar Kerja Peserta Didik (LKPD)",
    "Asesmen (Diagnostik, Formatif, Sumatif)",
    "Program Tahunan (PROTA)",
    "Program Semester (PROMES)",
    "Alokasi Waktu Pembelajaran",
    "Administrasi Wali Kelas Lengkap",
    "Daftar Nilai & Jurnal Harian",
    "Analisis Penilaian Kurikulum Nasional",
    "Bonus: Media Ajar & Materi Presentasi"
];

const testimonialImages = [
    "https://pixvid.org/images/2026/01/20/C7Scs.webp",
    "https://pixvid.org/images/2026/01/20/C7aWL.webp",
    "https://pixvid.org/images/2026/01/20/C7aYU.webp",
    "https://pixvid.org/images/2026/01/20/C7aAZ.webp",
    "https://pixvid.org/images/2026/01/20/C7aLr.webp",
    "https://pixvid.org/images/2026/01/20/C7bzw.webp",
    "https://pixvid.org/images/2026/01/20/C7buE.webp",
    "https://pixvid.org/images/2026/01/20/C7bG9.webp",
    "https://pixvid.org/images/2026/01/20/C7bfS.webp",
    "https://pixvid.org/images/2026/01/20/C74H2.webp",
    "https://pixvid.org/images/2026/01/20/C74KV.webp",
    "https://pixvid.org/images/2026/01/20/C74bk.webp",
    "https://pixvid.org/images/2026/01/20/C7Xeg.webp",
    "https://pixvid.org/images/2026/01/20/C7XrO.webp",
    "https://pixvid.org/images/2026/01/20/C7XoF.webp"
];

const faqList = [
    { q: "Apa itu Perangkat Ajar Deep Learning?", a: "Kumpulan lengkap dokumen administrasi mengajar siap pakai (Word/Docx) yang disusun berdasarkan Kurikulum Nasional terbaru." },
    { q: "Apakah sudah sesuai Kurikulum Nasional?", a: "Ya, 100%. Komponen CP, TP, ATP, hingga Asesmen sesuai panduan Kemendikbudristek." },
    { q: "Untuk jenjang apa saja?", a: "Tersedia untuk SD, SMP, SMA, dan SMK. Pilih jenjang dan mapel saat pemesanan." },
    { q: "Bagaimana cara pengirimannya?", a: "Link unduhan Google Drive dikirim otomatis ke WhatsApp & Email Anda setelah pembayaran." },
    { q: "Apakah file bisa diedit?", a: "Tentu saja! Semua dokumen berformat Microsoft Word (.docx) sehingga mudah diedit sesuai kebutuhan sekolah Anda." },
    { q: "Apakah ini pembayaran sekali saja?", a: "Betul. Cukup sekali bayar, Anda mendapatkan akses file selamanya tanpa biaya bulanan atau tahunan." },
    { q: "Berapa lama proses pengiriman file?", a: "Sistem kami bekerja otomatis 24 jam. File akan terkirim dalam hitungan detik setelah pembayaran terverifikasi." },
    { q: "Bagaimana jika file tidak masuk?", a: "Jangan khawatir. Tim support kami siap membantu via WhatsApp jika ada kendala pengiriman. Garansi file pasti sampai." },
    { q: "Apakah bisa dibuka di HP?", a: "Bisa. File tersimpan di Google Drive, jadi bisa diakses dan diunduh lewat HP, Tablet, Laptop, atau Komputer." },
    { q: "Apakah ada bonus pembelian?", a: "Ada! Setiap pembelian paket lengkap akan mendapatkan bonus Modul Projek P5, Aplikasi Rapor, dan materi presentasi (PPT)." },
    { q: "Apakah ada garansi uang kembali?", a: "Kami memberikan garansi uang kembali 100% jika file yang diterima tidak sesuai dengan deskripsi atau tidak bisa dibuka." }
];

const operatorPrefixes = {
    'Telkomsel': ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'], 'by.U': ['0851'], 'Indosat Ooredoo': ['0814', '0815', '0816', '0855', '0856', '0857', '0858'], 'Tri (3)': ['0895', '0896', '0897', '0898', '0899'], 'XL Axiata': ['0817', '0818', '0819', '0859', '0877', '0878', '0879'], 'Live.On': ['0859'], 'Axis': ['0831', '0832', '0833', '0838'], 'Smartfren': ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889']
};
const blacklistedNumbers = ['081234567890'];
const allowedEmailDomains = [
    'gmail.com', 'googlemail.com', 'outlook.com', 'hotmail.com',
    'hotmail.co.uk', 'live.com', 'msn.com', 'yahoo.com', 'yahoo.co.id',
    'yahoo.co.uk', 'ymail.com', 'rocketmail.com', 'icloud.com', 'me.com',
    'mac.com', 'aol.com', 'zoho.com', 'proton.me', 'protonmail.com',
    'tutanota.com', 'gmx.com', 'gmx.de', 'mail.com', 'yandex.ru',
    'yandex.com', 'fastmail.com', 'hey.com'
];

let cart = [];
let currentPayment = 'qris';
let expiryTime;
let countdownInterval;
let currentOrderDetails = {};

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    renderPromoCard();

    // Eager render for Step 1 (visible on load)
    renderTestimonials();
    renderFAQ();

    // Lazy load Step 2 sections
    runWhenVisible('payment-grid', renderPaymentMethods);

    initNotifications();
    renderJenjangOptions();
    initSheetLogic();
    updatePromoQuota();

    const whatsappInput = document.getElementById('whatsapp');
    whatsappInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Widget Event Listeners
    document.getElementById('confirm-add-item').addEventListener('click', handleConfirmAddItem);
    document.getElementById('jurusan-select').addEventListener('change', handleJurusanChange);
    document.getElementById('mapel-select').addEventListener('change', handleMapelChange);
});

// --- RENDER FUNCTIONS ---
function renderPromoCard() {
    const container = document.getElementById('promo-card-container');
    if (!container) return;

    const now = new Date();
    let start = new Date();
    start.setHours(3, 0, 0, 0);
    if (now < start) start.setDate(start.getDate() - 1);
    const elapsed = now - start;
    const duration = 23 * 60 * 60 * 1000;
    let p = 100 - (elapsed / duration) * 98;
    const quota = Math.floor(Math.max(2, Math.min(100, p)));

    container.innerHTML = `
        <article class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm mb-6">
            <div class="bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4 pb-3 border-b border-gray-100">
                <div class="flex items-start justify-between mb-2">
                    <div class="flex items-center gap-2">
                        <span class="inline-flex items-center gap-1 rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-bold text-blue-700">
                            <span class="relative flex h-1.5 w-1.5">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
                            </span>
                            Stok Tersedia
                        </span>
                    </div>
                    <span class="rounded-md bg-black px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">TERLARIS</span>
                </div>

                <h3 class="text-[19px] font-extrabold text-gray-900 leading-tight mb-1">Perangkat Ajar 2026/2027</h3>
                <p class="text-[13px] text-gray-600 font-medium flex items-center gap-1">
                    <i class="fas fa-check-circle text-green-600 text-xs"></i>
                    Update Terbaru (Deep Learning & KBC)
                </p>
            </div>

            <div class="p-4">
                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-3 border border-blue-100">
                    <div class="flex items-center justify-between mb-1">
                        <div>
                            <p class="text-[11px] font-semibold text-gray-500 mb-0.5">Harga Mulai</p>
                            <div class="flex items-baseline gap-2">
                                <span class="text-[28px] font-black text-blue-600 leading-none tracking-tight">Rp 50rb</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] text-gray-500 mb-0.5">Normal</p>
                            <span class="text-[13px] font-bold text-gray-400 line-through">Rp 175rb</span>
                            <p class="text-[11px] font-bold text-green-600 mt-0.5">Hemat 66%</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-4 pb-4">
                <div class="bg-orange-50 rounded-xl p-3 border border-orange-200">
                    <div class="flex items-center justify-between mb-2.5">
                        <div class="flex items-center gap-2">
                            <div class="w-7 h-7 rounded-full bg-orange-100 flex items-center justify-center">
                                <i class="fas fa-fire text-orange-600 text-sm animate-pulse"></i>
                            </div>
                            <div>
                                <p class="text-[11px] font-bold text-orange-700 leading-none mb-0.5">Promo Terbatas!</p>
                                <p class="text-[13px] font-black text-gray-900 leading-none">${quota}% Kuota Tersisa</p>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] text-gray-600 mb-0.5">Berakhir</p>
                            <div class="bg-white px-2 py-1 rounded-md border border-orange-200">
                                <span class="text-[12px] font-bold text-gray-900">23:59</span>
                            </div>
                        </div>
                    </div>

                    <div class="relative h-2 w-full bg-white rounded-full overflow-hidden border border-orange-200/50">
                        <div class="h-full bg-gradient-to-r from-orange-400 via-red-500 to-red-600 rounded-full transition-all duration-1000"
                             style="width: ${quota}%">
                            <div class="absolute inset-0 bg-white/20 animate-[shimmer_1.5s_infinite]"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="px-4 pb-4">
                <div class="flex gap-2">
                    <button type="button" onclick="openAddItemModal()"
                        class="flex-1 h-12 rounded-xl bg-[#1a73e8] text-white shadow-lg shadow-blue-200 active:scale-[0.98] transition-all hover:bg-[#1557b0] group">
                        <div class="flex items-center justify-center gap-2 font-bold text-[15px]">
                            <span>Pilih Jenjang & Mapel</span>
                            <i class="fas fa-arrow-right text-sm opacity-80 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </button>

                    <button id="btnDetail" type="button"
                        class="h-12 px-4 rounded-xl border-2 border-gray-200 bg-white text-gray-600 font-bold text-sm flex items-center justify-center active:scale-[0.95] hover:bg-gray-50 hover:border-blue-200 transition-all"
                        aria-label="Lihat Detail Lengkap">
                        Detail
                    </button>
                </div>

                <p class="mt-2.5 text-center text-[11px] text-gray-500 flex items-center justify-center gap-1">
                    <i class="fas fa-shield-alt text-green-600 text-xs"></i>
                    <span class="font-medium">Garansi 100% uang kembali</span>
                </p>
            </div>
        </article>
    `;
}

function updatePromoQuota() {
    // Logic inside renderPromoCard but also as standalone for intervals if needed
}

// --- WIDGET LOGIC ---

function openAddItemModal() {
    document.getElementById('add-item-modal').classList.add('active');
    resetModalSelection();
}

function closeAddItemModal() {
    document.getElementById('add-item-modal').classList.remove('active');
}

function resetModalSelection() {
    document.querySelectorAll('input[name="modal-jenjang"]').forEach(el => el.checked = false);

    const jurusanContainer = document.getElementById('jurusan-container');
    const kelasContainer = document.getElementById('kelas-container');
    const mapelContainer = document.getElementById('mapel-container');
    const pricePreview = document.getElementById('item-price-preview');
    const confirmBtn = document.getElementById('confirm-add-item');

    jurusanContainer.classList.add('hidden');
    kelasContainer.classList.add('opacity-50', 'pointer-events-none');
    mapelContainer.classList.add('opacity-50', 'pointer-events-none');
    pricePreview.classList.add('hidden');
    confirmBtn.disabled = true;

    document.getElementById('jurusan-select').innerHTML = '<option value="">-- Pilih Jurusan --</option>';
    document.getElementById('kelas-options').innerHTML = '';
    document.getElementById('mapel-select').innerHTML = '<option value="">-- Pilih Kelas Dulu --</option>';
}

function renderJenjangOptions() {
    const container = document.getElementById('jenjang-options');
    if (!container) return;
    let html = '';
    Object.keys(educationalData).forEach(jenjang => {
        html += `
            <label class="cursor-pointer">
                <input type="radio" name="modal-jenjang" value="${jenjang}" class="peer sr-only" onchange="handleJenjangSelect(this.value)">
                <div class="p-3 text-center border border-slate-200 rounded-xl peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-700 transition hover:bg-slate-50 text-sm font-medium">
                    ${jenjang}
                </div>
            </label>
        `;
    });
    container.innerHTML = html;
}

window.handleJenjangSelect = function (jenjang) {
    const jurusanContainer = document.getElementById('jurusan-container');
    const kelasContainer = document.getElementById('kelas-container');
    const kelasOptions = document.getElementById('kelas-options');

    document.getElementById('jurusan-select').value = '';
    kelasOptions.innerHTML = '';
    document.getElementById('mapel-select').innerHTML = '<option value="">-- Pilih Kelas Dulu --</option>';
    document.getElementById('mapel-container').classList.add('opacity-50', 'pointer-events-none');
    document.getElementById('confirm-add-item').disabled = true;
    document.getElementById('item-price-preview').classList.add('hidden');

    if (jenjang === 'SMK/MAK') {
        jurusanContainer.classList.remove('hidden');
        const jurusanSelect = document.getElementById('jurusan-select');
        jurusanSelect.innerHTML = '<option value="">-- Pilih Jurusan --</option>';
        Object.keys(educationalData[jenjang]).forEach(j => {
            const opt = document.createElement('option');
            opt.value = j;
            opt.textContent = j;
            jurusanSelect.appendChild(opt);
        });
        kelasContainer.classList.add('opacity-50', 'pointer-events-none');
    } else {
        jurusanContainer.classList.add('hidden');
        kelasContainer.classList.remove('opacity-50', 'pointer-events-none');

        Object.keys(educationalData[jenjang]).forEach(kelas => {
            kelasOptions.innerHTML += `
                <label class="cursor-pointer">
                    <input type="radio" name="modal-kelas" value="${kelas}" class="peer sr-only" onchange="handleKelasSelect(this.value)">
                    <div class="p-2 text-center border border-slate-200 rounded-lg peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-700 transition text-xs font-medium">
                        ${kelas}
                    </div>
                </label>
            `;
        });
    }
}

function handleJurusanChange(e) {
    const jurusan = e.target.value;
    const jenjang = document.querySelector('input[name="modal-jenjang"]:checked')?.value;
    const kelasContainer = document.getElementById('kelas-container');
    const kelasOptions = document.getElementById('kelas-options');

    kelasOptions.innerHTML = '';
    document.getElementById('mapel-select').innerHTML = '<option value="">-- Pilih Kelas Dulu --</option>';
    document.getElementById('mapel-container').classList.add('opacity-50', 'pointer-events-none');

    if (jurusan && jenjang === 'SMK/MAK') {
        kelasContainer.classList.remove('opacity-50', 'pointer-events-none');
        Object.keys(educationalData[jenjang][jurusan]).forEach(kelas => {
            kelasOptions.innerHTML += `
                <label class="cursor-pointer">
                    <input type="radio" name="modal-kelas" value="${kelas}" class="peer sr-only" onchange="handleKelasSelect(this.value)">
                    <div class="p-2 text-center border border-slate-200 rounded-lg peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-700 transition text-xs font-medium">
                        ${kelas}
                    </div>
                </label>
            `;
        });
    }
}

window.handleKelasSelect = function (kelas) {
    const jenjang = document.querySelector('input[name="modal-jenjang"]:checked').value;
    const jurusan = document.getElementById('jurusan-select').value;
    const mapelSelect = document.getElementById('mapel-select');
    const mapelContainer = document.getElementById('mapel-container');

    mapelContainer.classList.remove('opacity-50', 'pointer-events-none');
    mapelSelect.innerHTML = '<option value="">-- Pilih Mata Pelajaran --</option>';

    const addOption = (val, group) => {
        const opt = document.createElement('option');
        opt.value = val;
        opt.textContent = val;
        group.appendChild(opt);
    };

    if (jenjang === 'SMK/MAK') {
        const agamaGroup = document.createElement('optgroup'); agamaGroup.label = 'Mapel Agama Islam';
        mapelAgama.forEach(m => addOption(m, agamaGroup));
        mapelSelect.appendChild(agamaGroup);

        const umumGroup = document.createElement('optgroup'); umumGroup.label = 'Mapel Umum';
        const classSpecificMapels = educationalData[jenjang][jurusan][kelas] || [];
        mapelSMKUmum.forEach(m => { if (classSpecificMapels.includes(m)) addOption(m, umumGroup); });
        mapelSelect.appendChild(umumGroup);

        const kejuruanGroup = document.createElement('optgroup'); kejuruanGroup.label = 'Mapel Kejuruan';
        let allKejuruan = [];
        const classes = educationalData[jenjang][jurusan];
        for (let c in classes) { allKejuruan.push(...classes[c].filter(m => !mapelSMKUmum.includes(m))); }
        [...new Set(allKejuruan)].sort().forEach(m => addOption(m, kejuruanGroup));
        mapelSelect.appendChild(kejuruanGroup);

    } else {
        const agamaGroup = document.createElement('optgroup'); agamaGroup.label = 'Mapel Agama Islam';
        mapelAgama.forEach(m => addOption(m, agamaGroup));
        mapelSelect.appendChild(agamaGroup);

        const umumGroup = document.createElement('optgroup'); umumGroup.label = 'Mapel Umum';
        educationalData[jenjang][kelas].forEach(m => addOption(m, umumGroup));
        mapelSelect.appendChild(umumGroup);
    }
}

function handleMapelChange(e) {
    const mapel = e.target.value;
    const jenjang = document.querySelector('input[name="modal-jenjang"]:checked').value;
    const confirmBtn = document.getElementById('confirm-add-item');
    const pricePreview = document.getElementById('item-price-preview');
    const priceDisplay = document.getElementById('modal-price-display');

    const formatCurrency = (val) => `Rp ${val.toLocaleString('id-ID')}`;

    if (mapel) {
        confirmBtn.disabled = false;
        let price = 0;
        if (jenjang === 'SMK/MAK') {
            const isUmum = mapelSMKUmum.includes(mapel) || mapelAgama.includes(mapel);
            price = isUmum ? pricing['SMK/MAK'].umum : pricing['SMK/MAK'].kejuruan;
        } else {
            price = pricing[jenjang];
        }
        priceDisplay.textContent = formatCurrency(price);
        pricePreview.classList.remove('hidden');
    } else {
        confirmBtn.disabled = true;
        pricePreview.classList.add('hidden');
    }
}

function handleConfirmAddItem() {
    const jenjang = document.querySelector('input[name="modal-jenjang"]:checked').value;
    const jurusan = document.getElementById('jurusan-select').value;
    const kelas = document.querySelector('input[name="modal-kelas"]:checked').value;
    const mapel = document.getElementById('mapel-select').value;

    cart.push({
        id: Date.now(),
        jenjang,
        jurusan: jurusan || '',
        kelas,
        mapel
    });

    updateCartUI();
    closeAddItemModal();
    showModal('Berhasil', 'Perangkat ajar ditambahkan.');
}

window.removeItem = function (id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const container = document.getElementById('cart-items-container');
    const emptyState = document.getElementById('empty-cart-state');
    const totalContainer = document.getElementById('total-container');
    const bottomBarTotal = document.getElementById('total-price-display');

    const formatCurrency = (val) => `Rp ${val.toLocaleString('id-ID')}`;

    if (cart.length === 0) {
        container.classList.add('hidden');
        emptyState.classList.remove('hidden');
        totalContainer.classList.add('hidden');
        bottomBarTotal.textContent = formatCurrency(0);
    } else {
        container.classList.remove('hidden');
        emptyState.classList.add('hidden');
        totalContainer.classList.remove('hidden');

        let html = '';
        let subtotal = 0;

        cart.forEach(item => {
            let price = 0;
            if (item.jenjang === 'SMK/MAK') {
                const isUmum = mapelSMKUmum.includes(item.mapel) || mapelAgama.includes(item.mapel);
                price = isUmum ? pricing['SMK/MAK'].umum : pricing['SMK/MAK'].kejuruan;
            } else {
                price = pricing[item.jenjang];
            }
            subtotal += price;

            html += `
                <div class="flex items-start justify-between bg-slate-50 p-3 rounded-xl border border-slate-100 animate-[fadeIn_0.3s]">
                    <div>
                        <div class="text-sm font-bold text-slate-800">${item.mapel}</div>
                        <div class="text-xs text-slate-500">${item.jenjang} ${item.jurusan ? `(${item.jurusan})` : ''} &bull; ${item.kelas}</div>
                    </div>
                    <div class="flex flex-col items-end gap-1">
                        <div class="text-sm font-semibold text-blue-600">${formatCurrency(price)}</div>
                        <button type="button" onclick="removeItem(${item.id})" class="text-xs text-red-500 hover:text-red-700 font-medium">Hapus</button>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;

        const total = subtotal + uniqueCode;
        document.getElementById('widget-total-display').textContent = formatCurrency(total);
        bottomBarTotal.textContent = formatCurrency(total);
        const el2 = document.getElementById('total-price-display-2');
        if (el2) el2.textContent = formatCurrency(total);
    }
}

// --- FORM & PAYMENT ---

function isInvalidPattern(nomor) {
    if (typeof blacklistedNumbers !== 'undefined' && blacklistedNumbers.includes(nomor)) return true;
    const numberPart = nomor.substring(2);
    if (/(\d)\1{4,}/.test(numberPart)) return true;
    for (let i = 0; i < numberPart.length - 4; i++) {
        const sub = numberPart.substring(i, i + 5);
        const isAscending = '0123456789'.includes(sub);
        const isDescending = '9876543210'.includes(sub);
        if (isAscending || isDescending) return true;
    }
    const uniqueDigits = new Set(numberPart.split(''));
    if (uniqueDigits.size < 4) return true;
    if (/(..)\1\1/.test(numberPart)) return true;
    return false;
}

function getOperatorFromNumber(nomor) {
    if (typeof operatorPrefixes === 'undefined') return null;
    const prefix = nomor.substring(0, 4);
    for (const operator in operatorPrefixes) {
        if (operatorPrefixes[operator].includes(prefix)) {
            return operator;
        }
    }
    return null;
}

function validatePhoneNumber(nomorHp) {
    const genericError = { isValid: false, message: 'Silahkan isi dengan nomor yang benar' };

    if (nomorHp.length < 10) {
        return genericError;
    }

    const operator = getOperatorFromNumber(nomorHp);
    if (!operator) {
        return genericError;
    }

    const maxLength = operator === 'Tri (3)' ? 13 : 12;
    if (nomorHp.length > maxLength) {
        return genericError;
    }

    if (isInvalidPattern(nomorHp)) {
        return genericError;
    }

    return { isValid: true, message: 'Nomor valid.' };
}

async function handleFormSubmit() {
    const validation = validateForm();
    if (!validation.valid) {
        showModal('Data Belum Lengkap', validation.msg);
        if (validation.element) {
            validation.element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            validation.element.focus();
        }
        return;
    }

    if (cart.length === 0) {
        showModal('Pesanan Kosong', 'Silakan pilih minimal satu perangkat ajar.');
        const emptyState = document.getElementById('empty-cart-state');
        if (emptyState) {
            emptyState.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
    }

    const formData = new FormData(document.getElementById('orderForm'));
    const nama = formData.get('nama').trim();
    const whatsapp = formData.get('whatsapp').trim();
    const email = formData.get('email').trim();
    const paymentMethodKey = formData.get('payment-method');

    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Memproses...';

    // Calculate Totals
    let subtotal = 0;
    cart.forEach(item => {
        let price = 0;
        if (item.jenjang === 'SMK/MAK') {
            const isUmum = mapelSMKUmum.includes(item.mapel) || mapelAgama.includes(item.mapel);
            price = isUmum ? pricing['SMK/MAK'].umum : pricing['SMK/MAK'].kejuruan;
        } else {
            price = pricing[item.jenjang];
        }
        subtotal += price;
    });
    const totalPrice = subtotal + uniqueCode;

    const orderDetailsString = cart.map(item => `\n- ${item.jenjang} ${item.jurusan ? `(${item.jurusan})` : ''} - ${item.kelas} : ${item.mapel}`).join('');

    const paymentAccount = paymentMethods.find(p => p.id === paymentMethodKey);
    const now = new Date();

    const year = String(now.getFullYear()).slice(-2);
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const randomChar = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const randomDigit = () => Math.floor(Math.random() * 10);

    const paymentId = `INV-PA-${year}${month}${day}-${randomChar()}${randomDigit()}${randomChar()}${randomDigit()}`;

    const formatCurrency = (val) => `Rp ${val.toLocaleString('id-ID')}`;

    const dataToSend = {
        nama, whatsapp, email,
        paket: orderDetailsString,
        metodePembayaran: paymentAccount.name,
        totalTransfer: formatCurrency(totalPrice),
        idPembayaran: paymentId,
        nomorRekening: paymentAccount.number || '-',
        sheetName: formData.get('sheetName')
    };

    fetch(SCRIPT_URL, {
        method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend)
    }).catch(error => console.error(error));

    setTimeout(() => {
        showPaymentPage(dataToSend, paymentAccount, totalPrice, subtotal);
        btn.disabled = false;
        btn.innerHTML = 'Pesan Sekarang <i class="fas fa-arrow-right"></i>';
    }, 1500);
}

function showPaymentPage(data, paymentMethod, amount, subtotal) {
    currentOrderDetails = {
        pkg: "Perangkat Ajar",
        totalPrice: amount,
        price: subtotal,
        paymentId: data.idPembayaran,
        nama: data.nama,
        whatsapp: data.whatsapp,
        email: data.email,
        orderDetails: data.paket,
        sheetName: data.sheetName
    };

    // Navigate to Step 3 (Payment)
    goToStep(3);

    expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    startCountdown();

    const formatCurrency = (val) => `Rp ${val.toLocaleString('id-ID')}`;

    document.getElementById('payment-amount').innerText = formatCurrency(amount);
    document.getElementById('payment-logo-result').src = paymentMethod.logo;

    // Raw amount for copy
    const rawAmountInputCheck = document.getElementById('payment-amount-raw');
    if (rawAmountInputCheck) {
        rawAmountInputCheck.value = amount;
    } else {
        const rawAmountInput = document.createElement('input');
        rawAmountInput.type = 'hidden';
        rawAmountInput.id = 'payment-amount-raw';
        rawAmountInput.value = amount;
        document.body.appendChild(rawAmountInput);
    }

    document.getElementById('invoice-details-summary').innerHTML = `
        <span>No. Invoice: <strong>${data.idPembayaran}</strong></span>
        <a href="#" onclick="showDetailsModal(event)" class="font-semibold text-blue-600">Lihat detail</a>
    `;

    // WA Link
    const waMsg = `Halo, saya sudah transfer untuk pesanan Perangkat Ajar:\n` +
        `No Invoice: ${data.idPembayaran}\n` +
        `Total: ${data.totalTransfer}\n\n` +
        `Mohon segera diproses.`;
    document.getElementById('wa-confirm-btn').href = `https://wa.me/6285602152097?text=${encodeURIComponent(waMsg)}`;

    const detailsContainer = document.getElementById('payment-details-content');
    const instructionsContainer = document.getElementById('instruction-steps');

    if (paymentMethod.type === 'qr') {
        try {
            const qrisStatic = paymentMethod.number;
            const qrisDynamic = createDynamicQris(qrisStatic, amount);

            detailsContainer.innerHTML = `
                <div class="flex flex-col items-center">
                    <div id="qrcode-canvas" class="p-2 border rounded-lg mb-4 bg-white"></div>
                    <button id="download-qris-btn" class="btn-checkout w-auto px-6 py-2 text-sm" style="box-shadow: none; background: var(--secondary); color: var(--text-main); font-weight: 500;">
                        <i class="fas fa-download mr-2"></i> Unduh QRIS
                    </button>
                    <p class="text-xs text-center text-gray-500 mt-4">Scan QR Code diatas dengan aplikasi pembayaran apa saja.</p>
                </div>
            `;

            // Lazy Load QRCode
            loadScriptOnce('https://cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.1/qrcode.min.js', 'QRCode')
                .then(() => {
                    const qrContainer = document.getElementById('qrcode-canvas');
                    if (!qrContainer) return;

                    qrContainer.innerHTML = '';
                    const canvas = document.createElement('canvas');
                    QRCode.toCanvas(canvas, qrisDynamic, { width: 200, margin: 1 }, (err) => {
                        if (!err) {
                            qrContainer.appendChild(canvas);
                            const dlBtn = document.getElementById('download-qris-btn');
                            if (dlBtn) {
                                dlBtn.addEventListener('click', () => {
                                    const link = document.createElement('a');
                                    link.download = `QRIS-${data.idPembayaran}.png`;
                                    link.href = canvas.toDataURL('image/png');
                                    link.click();
                                });
                            }
                        }
                    });
                })
                .catch(e => {
                    console.error("Failed to load QRCode library", e);
                    detailsContainer.innerHTML = '<p class="text-red-500 text-sm text-center">Gagal memuat modul QRIS. Silakan refresh halaman.</p>';
                });

            instructionsContainer.innerHTML = `
                <div class="instruction-step"><div class="step-number">1</div><p class="text-sm">Buka aplikasi e-wallet atau m-banking.</p></div>
                <div class="instruction-step"><div class="step-number">2</div><p class="text-sm">Scan QRIS di atas.</p></div>
                <div class="instruction-step"><div class="step-number">3</div><p class="text-sm">Cek nominal <strong>${formatCurrency(amount)}</strong>.</p></div>
                <div class="instruction-step"><div class="step-number">4</div><p class="text-sm">Bayar dan simpan bukti.</p></div>
            `;
        } catch (e) { detailsContainer.innerHTML = '<p class="text-red-500">QRIS Error</p>'; }
    } else {
        detailsContainer.innerHTML = `
            <div class="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                <div>
                    <p class="text-xs text-gray-500">Nomor Rekening / VA</p>
                    <p class="text-lg font-bold text-gray-800 tracking-wide">${paymentMethod.number}</p>
                    <p class="text-xs text-gray-500 mt-1">A.N ${paymentMethod.holder}</p>
                </div>
                <button class="copy-btn" onclick="copyText('${paymentMethod.number}')">
                    <i class="far fa-copy"></i> Salin
                </button>
            </div>
        `;
        instructionsContainer.innerHTML = `
                <div class="instruction-step"><div class="step-number">1</div><p class="text-sm">Buka aplikasi bank Anda.</p></div>
                <div class="instruction-step"><div class="step-number">2</div><p class="text-sm">Transfer ke <strong>${paymentMethod.name}</strong>.</p></div>
                <div class="instruction-step"><div class="step-number">3</div><p class="text-sm">No. Rek: <strong>${paymentMethod.number}</strong></p></div>
                <div class="instruction-step"><div class="step-number">4</div><p class="text-sm">Nominal: <strong>${formatCurrency(amount)}</strong> (Wajib Tepat).</p></div>
        `;
    }
}

function validateForm() {
    const nameInput = document.getElementById('nama');
    const name = nameInput.value.trim();
    const waInput = document.getElementById('whatsapp');
    const wa = waInput.value.trim();
    const emailInput = document.getElementById('email');
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) return { valid: false, msg: 'Nama wajib diisi', element: nameInput };

    const phoneValidationResult = validatePhoneNumber(wa);
    if (!phoneValidationResult.isValid) {
        return { valid: false, msg: phoneValidationResult.message, element: waInput };
    }

    if (!email || !emailRegex.test(email)) {
        return { valid: false, msg: 'Email tidak valid', element: emailInput };
    }

    const domain = email.split('@')[1];
    if (!allowedEmailDomains.includes(domain)) {
        return { valid: false, msg: 'Domain email tidak diizinkan. Harap gunakan email pribadi.', element: emailInput };
    }

    return { valid: true };
}
