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

const testimonialData = [
    { name: "Bu Rina", text: "Sangat membantu untuk persiapan mengajar. Formatnya rapi dan mudah diedit.", rating: 5, img: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: "Pak Budi", text: "Admin fast respon, file langsung dikirim setelah transfer. Recommended!", rating: 5, img: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: "Bu Siti", text: "Lengkap banget, dari ATP sampai modul ajar ada semua. Terima kasih.", rating: 5, img: "https://randomuser.me/api/portraits/women/3.jpg" }
];

const paymentMethods = [
    { id: 'qris', name: 'QRIS', desc: 'Scan & bayar pakai app apapun', logo: 'https://pixvid.org/images/2026/01/16/CmB6A.png', type: 'qr', category: 'qris', number: '00020101021126610016ID.CO.SHOPEE.WWW01189360091800223157700208223157700303UMI51440014ID.CO.QRIS.WWW0215ID10254270621910303UMI5204481453033605802ID5904Epay6013JAKARTA PUSAT61051061062070703A0163042F15' },
    { id: 'bri', name: 'BRI', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/16/CmNqe.png', type: 'bank', category: 'bank', number: '30135085184808548', holder: 'GP-085184808548' },
    { id: 'bca', name: 'BCA', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/16/CmBsX.png', type: 'bank', category: 'bank', number: '70001085184808548', holder: 'GP-085184808548' },
    { id: 'permata', name: 'Bank Permata', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/19/CZuxo.png', type: 'bank', category: 'bank', number: '898085184808548', holder: 'GP-085184808548' },
    { id: 'seabank', name: 'Seabank', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/19/CZuFY.png', type: 'bank', category: 'bank', number: '782085184808548', holder: '6285184808548' },
    { id: 'gopay', name: 'GoPay', desc: 'Bayar langsung dari Gojek', logo: 'https://pixvid.org/images/2026/01/16/CmBl6.png', type: 'ewallet', category: 'ewallet', number: '085184808548', holder: 'Epay' },
    { id: 'ovo', name: 'OVO', desc: 'Transfer ke nomor OVO', logo: 'https://pixvid.org/images/2026/01/16/CmNNQ.png', type: 'ewallet', category: 'ewallet', number: '085184808548', holder: 'Epay' }
];

const faqList = [
    { q: "Apa itu Perangkat Ajar Deep Learning?", a: "Kumpulan lengkap dokumen administrasi mengajar siap pakai (Word/Docx) yang disusun berdasarkan Kurikulum Nasional terbaru." },
    { q: "Apakah sudah sesuai Kurikulum Nasional?", a: "Ya, 100%. Komponen CP, TP, ATP, hingga Asesmen sesuai panduan Kemendikbudristek." },
    { q: "Untuk jenjang apa saja?", a: "Tersedia untuk SD, SMP, SMA, dan SMK. Pilih jenjang dan mapel saat pemesanan." },
    { q: "Bagaimana cara pengirimannya?", a: "Link unduhan Google Drive dikirim otomatis ke WhatsApp & Email Anda setelah pembayaran." }
];

const allowedEmailDomains = [
    'gmail.com', 'googlemail.com', 'outlook.com', 'hotmail.com',
    'hotmail.co.uk', 'live.com', 'msn.com', 'yahoo.com', 'yahoo.co.id',
    'yahoo.co.uk', 'ymail.com', 'rocketmail.com', 'icloud.com', 'me.com',
    'mac.com', 'aol.com', 'zoho.com', 'proton.me', 'protonmail.com',
    'tutanota.com', 'gmx.com', 'gmx.de', 'mail.com', 'yandex.ru',
    'yandex.com', 'fastmail.com', 'hey.com', 'belajar.id', 'guru.belajar.id'
];

let cart = [];
let currentPayment = 'qris';
let expiryTime;
let countdownInterval;
let currentOrderDetails = {};

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
    renderPackageCards();

    // Lazy load non-critical sections
    runWhenVisible('payment-grid', renderPaymentMethods);
    runWhenVisible('testimonial-container', renderTestimonials);
    runWhenVisible('faq-container', renderFAQ);

    initNotifications();

    const whatsappInput = document.getElementById('whatsapp');
    whatsappInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
});

// --- RENDER FUNCTIONS (Page Specific) ---
function renderPackageCards() {
    const container = document.getElementById('package-list');
    if (!container) return;

    const jenjangList = ["SD/MI", "SMP/MTS", "SMA/MAN", "SMK/MAK"];

    container.innerHTML = jenjangList.map(jenjang => {
        let price = (typeof pricing[jenjang] === 'object') ? pricing[jenjang].umum : pricing[jenjang];
        let normalPrice = price * 2;
        let discount = 50;

        return `
        <article class="relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden cursor-pointer hover:border-blue-300 transition-colors" onclick="openSelectionSheet('${jenjang}')">
            <div class="p-4 flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                        <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div>
                        <h3 class="font-bold text-gray-900">${jenjang}</h3>
                        <p class="text-xs text-gray-500">Mulai Rp ${price.toLocaleString('id-ID')}</p>
                    </div>
                </div>
                <div class="bg-blue-600 text-white rounded-lg px-3 py-1.5 text-xs font-bold">
                    Pilih <i class="fas fa-chevron-right ml-1"></i>
                </div>
            </div>
        </article>
        `;
    }).join('');

    // Cart Container (Injected)
    if (!document.getElementById('cart-container')) {
        const cartHtml = `
            <div id="cart-container" class="mt-4 hidden animate-fade-in">
                <h3 class="font-bold text-gray-800 text-sm mb-2">Keranjang Belanja</h3>
                <div id="cart-items" class="space-y-2 mb-3"></div>
                <div class="bg-blue-50 p-3 rounded-lg flex justify-between items-center">
                    <span class="text-sm text-blue-800 font-semibold">Total</span>
                    <span class="text-lg font-bold text-blue-600" id="cart-total-display">Rp 0</span>
                </div>
            </div>
        `;
        document.getElementById('package-list').insertAdjacentHTML('afterend', cartHtml);
    }
}

function openSelectionSheet(jenjang) {
    const sheet = document.getElementById('sheet');
    const sheetTitle = document.getElementById('sheetTitle');
    const sheetContent = document.getElementById('sheet-features-list'); // Reusing this container
    const btnOk = document.getElementById('btnOk'); // Reusing this button

    // Reset Sheet Content Structure for Selection
    sheetTitle.innerText = `Pilih Mapel ${jenjang}`;

    // Create Selection UI inside Sheet
    let html = `
        <div class="space-y-4 pt-2">
            <!-- Jurusan (Only for SMK) -->
            ${jenjang === 'SMK/MAK' ? `
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Jurusan</label>
                <select id="sheet-jurusan" class="w-full p-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" onchange="handleSheetJurusanChange('${jenjang}')">
                    <option value="">-- Pilih Jurusan --</option>
                    ${Object.keys(educationalData['SMK/MAK']).map(j => `<option value="${j}">${j}</option>`).join('')}
                </select>
            </div>
            ` : ''}

            <!-- Kelas -->
            <div id="sheet-kelas-container" class="${jenjang === 'SMK/MAK' ? 'opacity-50 pointer-events-none' : ''}">
                <label class="block text-sm font-medium text-gray-700 mb-1">Kelas</label>
                <div class="grid grid-cols-3 gap-2" id="sheet-kelas-options">
                    ${jenjang !== 'SMK/MAK' ? Object.keys(educationalData[jenjang]).map(kelas => `
                        <label class="cursor-pointer">
                            <input type="radio" name="sheet-kelas" value="${kelas}" class="peer sr-only" onchange="handleSheetKelasChange('${jenjang}')">
                            <div class="py-2 px-1 text-center border border-gray-200 rounded-lg peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-700 text-xs font-medium transition">
                                ${kelas}
                            </div>
                        </label>
                    `).join('') : '<p class="text-xs text-gray-400 col-span-3">Pilih Jurusan dulu</p>'}
                </div>
            </div>

            <!-- Mapel -->
            <div id="sheet-mapel-container" class="opacity-50 pointer-events-none">
                <label class="block text-sm font-medium text-gray-700 mb-1">Mata Pelajaran</label>
                <select id="sheet-mapel" class="w-full p-2.5 rounded-xl border border-gray-300 bg-white text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" onchange="handleSheetMapelChange('${jenjang}')">
                    <option value="">-- Pilih Kelas Dulu --</option>
                </select>
            </div>

            <!-- Price Preview -->
            <div id="sheet-price-preview" class="hidden bg-gray-50 p-3 rounded-lg flex justify-between items-center">
                <span class="text-xs text-gray-500">Harga per Mapel</span>
                <span class="text-base font-bold text-blue-600" id="sheet-price-display">Rp 0</span>
            </div>
        </div>
    `;

    sheetContent.innerHTML = html; // Inject UI
    sheetContent.classList.remove('space-y-2', 'text-slate-700'); // Remove list styles if any

    // Configure Button
    btnOk.innerText = "Tambahkan ke Keranjang";
    btnOk.className = "mt-4 h-12 w-full rounded-xl bg-gray-300 text-sm font-bold text-white cursor-not-allowed";
    btnOk.onclick = null; // Reset click handler

    openSheet();
}

// Global functions for Sheet Logic
window.handleSheetJurusanChange = function(jenjang) {
    const jurusan = document.getElementById('sheet-jurusan').value;
    const kelasContainer = document.getElementById('sheet-kelas-container');
    const kelasOptions = document.getElementById('sheet-kelas-options');

    // Reset lower fields
    kelasOptions.innerHTML = '';
    document.getElementById('sheet-mapel').innerHTML = '<option value="">-- Pilih Kelas Dulu --</option>';
    document.getElementById('sheet-mapel-container').classList.add('opacity-50', 'pointer-events-none');

    if (jurusan) {
        kelasContainer.classList.remove('opacity-50', 'pointer-events-none');
        const classes = Object.keys(educationalData[jenjang][jurusan]);

        kelasOptions.innerHTML = classes.map(kelas => `
            <label class="cursor-pointer">
                <input type="radio" name="sheet-kelas" value="${kelas}" class="peer sr-only" onchange="handleSheetKelasChange('${jenjang}')">
                <div class="py-2 px-1 text-center border border-gray-200 rounded-lg peer-checked:bg-blue-50 peer-checked:border-blue-500 peer-checked:text-blue-700 text-xs font-medium transition">
                    ${kelas}
                </div>
            </label>
        `).join('');
    } else {
        kelasContainer.classList.add('opacity-50', 'pointer-events-none');
        kelasOptions.innerHTML = '<p class="text-xs text-gray-400 col-span-3">Pilih Jurusan dulu</p>';
    }
}

window.handleSheetKelasChange = function(jenjang) {
    const kelas = document.querySelector('input[name="sheet-kelas"]:checked').value;
    const jurusan = document.getElementById('sheet-jurusan') ? document.getElementById('sheet-jurusan').value : null;
    const mapelSelect = document.getElementById('sheet-mapel');
    const mapelContainer = document.getElementById('sheet-mapel-container');

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
        // We only want kejuruan mapels that are NOT in umum
        for (let c in classes) { allKejuruan.push(...classes[c].filter(m => !mapelSMKUmum.includes(m))); }
        // Filter unique and sort
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

window.handleSheetMapelChange = function(jenjang) {
    const mapel = document.getElementById('sheet-mapel').value;
    const btnOk = document.getElementById('btnOk');
    const pricePreview = document.getElementById('sheet-price-preview');
    const priceDisplay = document.getElementById('sheet-price-display');

    if (mapel) {
        let price = 0;
        if (jenjang === 'SMK/MAK') {
            const isUmum = mapelSMKUmum.includes(mapel) || mapelAgama.includes(mapel);
            price = isUmum ? pricing['SMK/MAK'].umum : pricing['SMK/MAK'].kejuruan;
        } else {
            price = pricing[jenjang];
        }

        priceDisplay.textContent = `Rp ${price.toLocaleString('id-ID')}`;
        pricePreview.classList.remove('hidden');

        btnOk.className = "mt-4 h-12 w-full rounded-xl bg-blue-600 hover:bg-blue-700 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all";
        btnOk.style.cursor = "pointer";
        btnOk.onclick = () => addToCart(jenjang, price);
    } else {
        pricePreview.classList.add('hidden');
        btnOk.className = "mt-4 h-12 w-full rounded-xl bg-gray-300 text-sm font-bold text-white cursor-not-allowed";
        btnOk.onclick = null;
    }
}

function addToCart(jenjang, price) {
    const jurusan = document.getElementById('sheet-jurusan') ? document.getElementById('sheet-jurusan').value : '';
    const kelas = document.querySelector('input[name="sheet-kelas"]:checked').value;
    const mapel = document.getElementById('sheet-mapel').value;

    const item = {
        id: Date.now(),
        jenjang,
        jurusan,
        kelas,
        mapel,
        price
    };

    cart.push(item);
    renderCart();
    closeSheet();
    showToast(`${mapel} ditambahkan`);
}

function renderCart() {
    const container = document.getElementById('cart-container');
    const itemsContainer = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total-display');
    const bottomBarTotal = document.getElementById('total-price-display');

    if (cart.length === 0) {
        container.classList.add('hidden');
        bottomBarTotal.textContent = `Rp 0`;
        return;
    }

    container.classList.remove('hidden');
    let total = 0;

    itemsContainer.innerHTML = cart.map(item => {
        total += item.price;
        return `
            <div class="flex items-start justify-between bg-white p-2 rounded-lg border border-gray-100 shadow-sm text-sm">
                <div>
                    <div class="font-bold text-gray-800">${item.mapel}</div>
                    <div class="text-xs text-gray-500">${item.jenjang} ${item.jurusan ? `(${item.jurusan})` : ''} - ${item.kelas}</div>
                </div>
                <div class="flex flex-col items-end gap-1">
                    <span class="font-semibold text-blue-600 text-xs">Rp ${item.price.toLocaleString('id-ID')}</span>
                    <button type="button" onclick="removeFromCart(${item.id})" class="text-red-500 text-[10px] hover:text-red-700">Hapus</button>
                </div>
            </div>
        `;
    }).join('');

    const finalTotal = total + uniqueCode;
    totalDisplay.textContent = `Rp ${total.toLocaleString('id-ID')}`;
    bottomBarTotal.textContent = `Rp ${finalTotal.toLocaleString('id-ID')}`;
}

window.removeFromCart = function(id) {
    cart = cart.filter(i => i.id !== id);
    renderCart();
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

    if (!wa || wa.length < 10) {
        return { valid: false, msg: 'Nomor WhatsApp tidak valid', element: waInput };
    }

    if (!email || !emailRegex.test(email)) {
        return { valid: false, msg: 'Email tidak valid', element: emailInput };
    }

    const domain = email.split('@')[1];
    if (!allowedEmailDomains.includes(domain)) {
        return { valid: false, msg: 'Gunakan email pribadi (Gmail/Yahoo)', element: emailInput };
    }

    return { valid: true };
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
        showModal('Keranjang Kosong', 'Silakan pilih minimal satu mata pelajaran.');
        document.getElementById('package-list').scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Memproses...';

    // Prepare Data
    const formData = new FormData(document.getElementById('orderForm'));
    const payment = paymentMethods.find(p => p.id === currentPayment);

    let subtotal = 0;
    cart.forEach(i => subtotal += i.price);
    const totalPrice = subtotal + uniqueCode;

    const now = new Date();
    const dateStr = `${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const paymentId = `INV-PA-${dateStr}-${randomSuffix}`;

    const orderDetailsString = cart.map(item => `\n- ${item.jenjang} ${item.jurusan ? `(${item.jurusan})` : ''} - ${item.kelas} : ${item.mapel}`).join('');

    const dataToSend = {
        nama: formData.get('nama'),
        whatsapp: formData.get('whatsapp'),
        email: formData.get('email'),
        paket: orderDetailsString,
        metodePembayaran: payment.name,
        totalTransfer: `Rp${totalPrice.toLocaleString('id-ID')}`,
        idPembayaran: paymentId,
        nomorRekening: payment.number || '-',
        sheetName: formData.get('sheetName')
    };

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        });

        // Show Payment Page
        showPaymentPage(dataToSend, payment, totalPrice);

    } catch (error) {
        console.error('Error:', error);
        showModal('Error', 'Gagal memproses pesanan. Silakan coba lagi.');
    } finally {
        btn.disabled = false;
        btn.innerHTML = 'Beli Sekarang <i class="fas fa-arrow-right"></i>';
    }
}

function showPaymentPage(data, paymentMethod, amount) {
    // Hide Form, Show Payment
    document.getElementById('view-form').classList.add('hidden');
    document.getElementById('view-payment').classList.remove('hidden');
    window.scrollTo(0, 0);

    // Set Timer (24 hours)
    expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
    startCountdown();

    // Populate Data
    document.getElementById('payment-amount').innerText = `Rp ${amount.toLocaleString('id-ID')}`;
    document.getElementById('payment-logo-result').src = paymentMethod.logo;

    // Populate invoice summary
    document.getElementById('invoice-details-summary').innerHTML = `
        <span>No. Invoice: <strong>${data.idPembayaran}</strong></span>
        <a href="#" onclick="showDetailsModal(event)" class="font-semibold text-blue-600">Lihat detail</a>
    `;

    // Generate WA Link
    const waMsg = `Halo, saya sudah transfer untuk pesanan Perangkat Ajar:\n` +
        `No Invoice: ${data.idPembayaran}\n` +
        `Total: ${data.totalTransfer}\n\n` +
        `Mohon segera diproses.`;
    document.getElementById('wa-confirm-btn').href = `https://wa.me/6285602152097?text=${encodeURIComponent(waMsg)}`;

    // Render Payment Details
    const detailsContainer = document.getElementById('payment-details-content');
    const instructionsContainer = document.getElementById('instruction-steps');

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

    if (paymentMethod.type === 'qr') {
        // Generate QRIS
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
                                if (err) {
                                    console.error(err);
                                    return;
                                }
                                qrContainer.appendChild(canvas);

                                const dlBtn = document.getElementById('download-qris-btn');
                                if (dlBtn) {
                                    dlBtn.addEventListener('click', () => {
                                        const link = document.createElement('a');
                                        link.download = `QRIS-Pembayaran-${data.idPembayaran}.png`;
                                        link.href = canvas.toDataURL('image/png');
                                        link.click();
                                    });
                                }
                    });
                        })
                        .catch(e => {
                            console.error("Failed to load QRCode library", e);
                            detailsContainer.innerHTML = '<p class="text-red-500 text-sm text-center">Gagal memuat modul QRIS. Silakan refresh halaman.</p>';
                });

            instructionsContainer.innerHTML = `
                <div class="instruction-step"><div class="step-number">1</div><p class="text-sm">Buka aplikasi e-wallet (GoPay/OVO/Dana) atau Mobile Banking.</p></div>
                <div class="instruction-step"><div class="step-number">2</div><p class="text-sm">Pilih menu Scan / Bayar.</p></div>
                <div class="instruction-step"><div class="step-number">3</div><p class="text-sm">Scan QR Code yang muncul di layar.</p></div>
                <div class="instruction-step"><div class="step-number">4</div><p class="text-sm">Cek nominal (pastikan sama) dan selesaikan pembayaran.</p></div>
            `;

        } catch (e) {
            detailsContainer.innerHTML = '<p class="text-red-500">Gagal memuat QRIS.</p>';
        }

    } else {
        // Bank / E-Wallet Number
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
                <div class="instruction-step"><div class="step-number">1</div><p class="text-sm">Buka aplikasi bank atau e-wallet Anda.</p></div>
                <div class="instruction-step"><div class="step-number">2</div><p class="text-sm">Pilih menu Transfer ke ${paymentMethod.name}.</p></div>
                <div class="instruction-step"><div class="step-number">3</div><p class="text-sm">Masukkan nomor rekening: <strong>${paymentMethod.number}</strong></p></div>
                <div class="instruction-step"><div class="step-number">4</div><p class="text-sm">Masukkan nominal <strong>Rp ${amount.toLocaleString('id-ID')}</strong> (harus tepat).</p></div>
            `;
    }
}
