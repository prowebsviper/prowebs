// PAGE SPECIFIC DATA & LOGIC

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySaAB2WT0D59UlLyZcXliWvNURCnHcRrqz5P8C2LCQbVdk0hn3Qkl1glGiLJSql_Wh/exec';
const uniqueCode = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

// RESTORED DATA
const FIRST_NAMES = ["Budi Santoso", "Ayu", "Rahmat", "Citra Dewi Kusuma", "Bayu Pratama", "Lina", "Wulan", "Adi", "Farhan Syahputra", "Hendra Wijaya", "Nana Puspita Dewi", "Joko", "Mega Sari", "Gilang Pramana Putra", "Sari", "Dedi", "Eka Suryani", "Teguh", "Putri Lestari Ayu", "Andi", "Bagus Wijaya", "Ilham Saputra Nugraha", "Rizal", "Mira Astuti", "Puspita", "Hari", "Tri Saputra", "Cahya Pratama", "Surya Darmawan Putra", "Wahyu Ramadhan", "Agus", "Indra Permana", "Linda", "Fajar Mahendra Saputra", "Yusuf", "Pramono Adi Nugroho", "Sinta Dewi", "Bima Pratama", "Dian", "Hasan Basri", "Nurul Aini", "Arif Budiman", "Feri", "Lukman Hakim", "Rangga", "Rini Anggraini Putri", "Tono", "Hadi Prasetyo", "Elisa Purnama", "Anisa Rahma"];

const testimonialData = [
    { name: "Budi Santoso", text: "Proses upgrade sat set, 5 menit langsung jadi 2TB. Gokil! Harga murah tapi kualitas original.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmekN.webp" },
    { name: "Rina Amelia", text: "Awalnya ngeri-ngeri sedap, tapi ternyata amanah. Storage legaaaa banget sekarang. Thanks min!", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmeTv.webp" },
    { name: "Dedi Kurniawan", text: "Buat backup foto anak istri paling pas. Gak pusing notif penuh lagi. Langsung aktif di akun sendiri.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cmey5.webp" },
    { name: "Sinta Pratiwi", text: "Recommended seller! Admin ramah, dipandu sampe sukses. Garansi juga jelas.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmeB7.webp" },
    { name: "Agung Wijaya", text: "Harga kaki lima, kualitas bintang lima. Legal dan aman. Udah cek di Google One beneran 2TB.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm08T.webp" },
    { name: "Putri Lestari", text: "Bye-bye langganan bulanan. Sekali bayar buat selamanya. Hemat bgt buat mahasiswa.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm0ti.webp" },
    { name: "Bayu Pratama", text: "Udah upgrade akun ke-2 disini. Gapernah mengecewakan. Proses cepet dan anti ribet.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm0M1.webp" },
    { name: "Eko Saputra", text: "Mantap jiwa! Google Photos jadi unlimited rasanya. Upload video 4K gas terus.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm0cx.webp" },
    { name: "Fajar Nugraha", text: "Solusi terbaik buat freelancer kek saya. Kirim file gede ga masalah lagi. Sukses terus gan.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmUW4.webp" },
    { name: "Maya Dewi", text: "Fast response, proses mudah, garansi jelas. Top banget pelayanannya.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmUFc.webp" },
    { name: "Rudi Hartono", text: "Sempet skeptis tapi bukti bicara. Storage beneran nambah permanen. Mantul!", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmUAP.webp" },
    { name: "Wulan Sari", text: "Gak nyesel beli disini. Data aman, privasi terjaga. Bakal rekomendasiin ke temen kantor.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmUL8.webp" },
    { name: "Tono Jaya", text: "Thank you min! Akhirnya email gak merah lagi. Bisa terima email kerjaan dengan tenang.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmkzH.webp" }
];

const fullFeaturesList = [
    "<strong>Kapasitas 2TB:</strong> Nikmati penyimpanan raksasa 2TB yang terbagi untuk Google Drive, Google Photos, dan Gmail.",
    "<strong>Akses File Di Mana Saja:</strong> Buka dan edit file Anda dari komputer, tablet, atau smartphone.",
    "<strong>Satu Solusi Terintegrasi:</strong> Semua kebutuhan penyimpanan Anda dalam satu paket hemat.",
    "<strong>Keamanan Kelas Dunia:</strong> File Anda dilindungi oleh infrastruktur keamanan canggih dari Google.",
    "<strong>Berbagi & Kolaborasi Mudah:</strong> Bagikan file dan folder dengan mudah, serta bekerja bersama secara real-time.",
    "<strong>Sekali Bayar Seumur Hidup:</strong> Tanpa biaya langganan bulanan atau tahunan.",
    "<strong>Gunakan Akun Pribadi Anda:</strong> Upgrade dilakukan langsung pada akun Google yang sudah Anda miliki.",
    "<strong>100% Aman & Bergaransi:</strong> Produk asli dengan jaminan privasi penuh."
];

const faqList = [
    { q: "Apakah ini benar-benar 2TB dan seumur hidup?", a: "Ya, benar. Anda akan mendapatkan penyimpanan 2TB untuk Google Drive dengan sistem pembayaran sekali untuk selamanya. Tidak ada biaya bulanan atau tahunan tersembunyi." },
    { q: "Bagaimana proses upgrade untuk Google Drive?", a: "Prosesnya otomatis dan terintegrasi dengan akun Google Anda. Setelah pembayaran, penyimpanan pada Google Drive Anda akan langsung ter-upgrade menjadi 2TB. Anda tidak perlu melakukan apa-apa lagi dan bisa langsung menikmati kapasitas 2TB di akun pribadi Anda." },
    { q: "Apakah ini aman dan legal?", a: "Tentu saja. Metode yang kami gunakan adalah sah melalui fitur Google Workspace. Kami tidak pernah meminta password Anda (untuk upgrade Drive) dan privasi file Anda 100% terjamin. Anda memiliki kontrol penuh atas data Anda." },
    { q: "Apa bedanya dengan langganan Google One?", a: "Google One adalah layanan langganan resmi dari Google dengan kuota terbatas (misal 2TB) dan biaya bulanan/tahunan. Produk kami memberikan Anda penyimpanan 2TB dengan sistem sekali bayar untuk selamanya, melalui metode upgrade langsung pada akun Anda." },
    { q: "Bisakah saya memindahkan file lama saya?", a: "Tentu bisa. Karena upgrade ini langsung diterapkan pada akun Google Drive pribadi Anda, semua file lama Anda akan tetap ada di tempatnya dan secara otomatis menjadi bagian dari penyimpanan 2TB yang baru. Anda tidak perlu memindahkan file atau folder apa pun." },
    { q: "Berapa lama proses aktivasinya?", a: "Prosesnya sangat cepat. Setelah Anda melakukan konfirmasi pembayaran, aktivasi biasanya selesai dalam waktu 5-15 menit, maksimal 1x24 jam." },
    { q: "Apakah ada garansi?", a: "Kami memberikan garansi uang kembali penuh jika proses upgrade gagal karena kesalahan dari pihak kami. Kami juga memberikan garansi layanan seumur hidup." },
    { q: "Apakah kapasitas ini mencakup Google Photos dan Gmail?", a: "Ya, penyimpanan 2TB ini bersifat shared storage yang digunakan bersama untuk Google Drive, Google Photos (kualitas asli/original), dan Gmail. Jadi Anda bisa mencadangkan ribuan foto dan video serta ribuan email tanpa khawatir penuh." },
    { q: "Apakah file saya aman dari intipan admin?", a: "100% Aman. Privasi adalah prioritas utama. Sistem kami hanya menambahkan lisensi/kapasitas ke akun Anda. Kami tidak memiliki akses sama sekali ke file, foto, atau email Anda. Hanya Anda yang bisa mengaksesnya." },
    { q: "Apakah ini Shared Drive / Team Drive yang bisa hilang sewaktu-waktu?", a: "Bukan. Ini adalah upgrade pada My Drive (Penyimpanan Utama) akun Anda, bukan sekadar Shared Drive yang seringkali rawan hilang. Karena ini lisensi resmi, maka keamanannya terjamin setara dengan akun Google biasa." },
    { q: "Apakah akun saya berisiko di-banned oleh Google?", a: "Tidak akan. Kami menggunakan metode resmi (Official License) yang mematuhi kebijakan Google. Akun Anda aman dari risiko banned yang biasanya terjadi pada produk ilegal/suntikan." },
    { q: "Apakah bisa digunakan di banyak perangkat?", a: "Sangat bisa. Anda bisa mengakses penyimpanan 2TB ini dari HP (Android/iOS), Tablet/iPad, Laptop (Windows/Mac), maupun PC. Cukup login dengan akun Google yang sama." },
    { q: "Bagaimana jika kapasitas 2TB saya penuh?", a: "Jika 2TB penuh, Anda tidak bisa mengupload file baru atau menerima email masuk (jika Gmail penuh). Namun, Anda bisa menghapus file lama atau menghubungi kami jika ada opsi upgrade lebih lanjut di masa depan." },
    { q: "Apakah saya perlu mengganti akun Google lama saya?", a: "Tidak perlu. Anda cukup mencantumkan alamat email akun Google lama Anda saat pemesanan. Kami akan memproses upgrade langsung di akun tersebut tanpa Anda perlu membuat akun baru." },
    { q: "Apakah ada biaya perpanjangan di tahun berikutnya?", a: "TIDAK ADA. Sesuai janji kami, ini adalah paket Lifetime (Sekali Bayar). Anda cukup membayar satu kali di awal, dan nikmati fitur premium selamanya tanpa tagihan bulanan/tahunan." },
    { q: "Bagaimana cara klaim garansi jika terjadi kendala?", a: "Kami menyediakan support via WhatsApp yang siap membantu. Jika terjadi kendala teknis dari sisi kami yang tidak bisa diselesaikan, kami akan mengembalikan uang Anda 100% atau memberikan unit pengganti." },
    { q: "Berapa lama waktu pengerjaan setelah saya transfer?", a: "Sistem kami bekerja semi-otomatis. Biasanya diproses dalam 5-10 menit saat jam kerja. Paling lambat 1x24 jam jika antrian sedang padat. Pastikan bukti transfer jelas agar verifikasi lebih cepat." }
];

const packages = {
    lifetime: {
        id: 'lifetime',
        name: "Google Drive 2TB (Lifetime)",
        price: 250000,
        normalPrice: 1579000
    }
};

const paymentMethods = [
    // QRIS
    { id: 'qris', name: 'QRIS', desc: 'Scan & bayar pakai app apapun', logo: 'https://pixvid.org/images/2026/01/16/CmB6A.png', type: 'qr', category: 'qris', number: '00020101021126610016ID.CO.SHOPEE.WWW01189360091800223157700208223157700303UMI51440014ID.CO.QRIS.WWW0215ID10254270621910303UMI5204481453033605802ID5904Epay6013JAKARTA PUSAT61051061062070703A0163042F15' },

    // Bank Transfer
    { id: 'bri', name: 'BRI', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/16/CmNqe.png', type: 'bank', category: 'bank', number: '30135085184808548', holder: 'GP-085184808548' },
    { id: 'bca', name: 'BCA', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/16/CmBsX.png', type: 'bank', category: 'bank', number: '70001085184808548', holder: 'GP-085184808548' },
    { id: 'permata', name: 'Bank Permata', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/19/CZuxo.png', type: 'bank', category: 'bank', number: '898085184808548', holder: 'GP-085184808548' },
    { id: 'seabank', name: 'Seabank', desc: 'Transfer via ATM/Mobile Banking', logo: 'https://pixvid.org/images/2026/01/19/CZuFY.png', type: 'bank', category: 'bank', number: '782085184808548', holder: '6285184808548' },

    // E-Wallet
    { id: 'gopay', name: 'GoPay', desc: 'Bayar langsung dari Gojek', logo: 'https://pixvid.org/images/2026/01/16/CmBl6.png', type: 'ewallet', category: 'ewallet', number: '085184808548', holder: 'Epay' },
    { id: 'ovo', name: 'OVO', desc: 'Transfer ke nomor OVO', logo: 'https://pixvid.org/images/2026/01/16/CmNNQ.png', type: 'ewallet', category: 'ewallet', number: '085184808548', holder: 'Epay' }
];

const operatorPrefixes = {
    'Telkomsel': ['0811', '0812', '0813', '0821', '0822', '0823', '0851', '0852', '0853'],
    'by.U': ['0851'],
    'Indosat Ooredoo': ['0814', '0815', '0816', '0855', '0856', '0857', '0858'],
    'Tri (3)': ['0895', '0896', '0897', '0898', '0899'],
    'XL Axiata': ['0817', '0818', '0819', '0859', '0877', '0878', '0879'],
    'Live.On': ['0859'],
    'Axis': ['0831', '0832', '0833', '0838'],
    'Smartfren': ['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889']
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

let currentPackage = 'lifetime';
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

    updateTotalPrice();
    initNotifications();

    // Input formatting
    const whatsappInput = document.getElementById('whatsapp');
    if (whatsappInput) {
        whatsappInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
        });
    }
});

// --- RENDER FUNCTIONS ---
function renderPackageCards() {
    const container = document.getElementById('package-selection-container');
    if (!container) return;

    const formatCurrency = (amount) => `Rp ${amount.toLocaleString('id-ID')}`;

    const lifetime = packages.lifetime;
    const discount = Math.round(((lifetime.normalPrice - lifetime.price) / lifetime.normalPrice) * 100);

    // Calculate dynamic quota
    const now = new Date();
    let start = new Date();
    start.setHours(3, 0, 0, 0);
    if (now < start) start.setDate(start.getDate() - 1);
    const elapsed = now - start;
    const duration = 23 * 60 * 60 * 1000;
    let p = 100 - (elapsed / duration) * 98;
    const quota = Math.floor(Math.max(2, Math.min(100, p)));

    const featureListHTML = fullFeaturesList.map(f => `<li class="flex items-start gap-2 text-sm text-gray-600 mb-2"><i class="fas fa-check-circle text-green-500 mt-1 flex-shrink-0"></i><span>${f}</span></li>`).join('');

    container.innerHTML = `
        <div class="relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-lg mb-4">
            <div class="flex items-start justify-between mb-4">
                <div class="flex gap-4">
                    <img src="/assets/images/gdrive.png" class="w-12 h-12" alt="Google Drive" />
                    <div>
                        <h3 class="font-bold text-gray-900 text-lg leading-tight">Bundling 2TB: Drive, Photos, Gmail</h3>
                        <p class="text-sm text-gray-500">Official Upgrade</p>
                    </div>
                </div>
                <span class="bg-red-50 text-red-600 text-xs font-bold px-2 py-1 rounded-lg">-${discount}%</span>
            </div>

            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
                Kapasitas 2TB untuk Drive, Photos, dan Gmail seumur hidup.
            </p>

            <hr class="border-gray-100 mb-4" />

            <div class="flex items-end justify-between">
                <div>
                    <p class="text-xs text-gray-400 mb-0.5">Harga Normal</p>
                    <p class="text-sm text-gray-400 line-through decoration-red-400">${formatCurrency(lifetime.normalPrice)}</p>
                </div>
                <div class="text-right">
                    <p class="text-3xl font-bold text-blue-600 leading-none">${formatCurrency(lifetime.price)}</p>
                    <p class="text-[10px] text-gray-500 mt-1">Sekali Bayar Seumur Hidup</p>
                </div>
            </div>
        </div>

        <div class="flex gap-2 mb-6">
            <button type="button" onclick="document.getElementById('nama').focus()" class="flex-1 h-12 rounded-xl bg-[#1a73e8] text-white shadow-lg shadow-blue-200 active:scale-[0.98] transition-all hover:bg-[#1557b0] group">
                <div class="flex items-center justify-center gap-2 font-bold text-[15px]">
                    <span>Ambil Promo Sekarang</span>
                    <i class="fas fa-arrow-right text-sm opacity-80 group-hover:translate-x-1 transition-transform"></i>
                </div>
            </button>

            <button id="btnDetail" type="button" onclick="document.querySelector('#detail-deskripsi-content').classList.toggle('hidden'); document.querySelector('#detail-deskripsi-icon').classList.toggle('rotate-180')" class="h-12 w-12 rounded-xl border-2 border-gray-200 bg-white text-gray-600 flex items-center justify-center active:scale-[0.95] hover:bg-gray-50 hover:border-blue-200 transition-all" aria-label="Lihat Detail Lengkap">
                <i class="fas fa-info-circle text-[17px]"></i>
            </button>
        </div>

        <!-- Detail Deskripsi Accordion -->
        <div class="border-b border-gray-100 py-3">
            <button type="button" class="w-full flex items-center justify-between text-left font-semibold text-gray-900" onclick="const c = document.getElementById('detail-deskripsi-content'); const i = document.getElementById('detail-deskripsi-icon'); c.classList.toggle('hidden'); i.classList.toggle('rotate-180');">
                <span>Detail Deskripsi</span>
                <i id="detail-deskripsi-icon" class="fas fa-chevron-down text-gray-400 transition-transform duration-200"></i>
            </button>
            <div id="detail-deskripsi-content" class="hidden mt-3 animate-fade-in">
                <ul class="list-none p-0 m-0">
                    ${featureListHTML}
                </ul>
            </div>
        </div>

        <!-- Informasi Penting Accordion -->
        <div class="border-b border-gray-100 py-3 mb-6">
            <button type="button" class="w-full flex items-center justify-between text-left font-semibold text-gray-900" onclick="const c = document.getElementById('informasi-penting-content'); const i = document.getElementById('informasi-penting-icon'); c.classList.toggle('hidden'); i.classList.toggle('rotate-180');">
                <span>Informasi Penting</span>
                <i id="informasi-penting-icon" class="fas fa-chevron-down text-gray-400 transition-transform duration-200"></i>
            </button>
            <div id="informasi-penting-content" class="hidden mt-3 text-sm text-gray-600 leading-relaxed animate-fade-in">
                <p class="mb-2">Dengan menggunakan layanan ini, Anda setuju untuk terikat pada S&K kami. Layanan ini adalah pembayaran satu kali untuk manfaat seumur hidup, tunduk pada kebijakan Google yang berlaku.</p>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Layanan untuk penggunaan wajar dan tidak melanggar hukum.</li>
                    <li>Garansi penuh jika upgrade gagal karena kesalahan kami.</li>
                    <li>Garansi tidak mencakup pemblokiran akun akibat pelanggaran oleh pengguna.</li>
                    <li>Perubahan kebijakan Google di masa depan berada di luar kendali kami.</li>
                </ul>
            </div>
        </div>
    `;

    // Init Sheet Logic after render
    if (typeof initSheetLogic === 'function') initSheetLogic();
}

function updateTotalPrice() {
    const pkgPrice = packages[currentPackage].price;
    const total = pkgPrice + uniqueCode;
    document.getElementById('total-price-display').innerText = `Rp ${total.toLocaleString('id-ID')}`;
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

    const domain = email.split('@')[1].toLowerCase();
    if (!allowedEmailDomains.includes(domain)) {
        return { valid: false, msg: 'Domain email tidak diizinkan. Harap gunakan email pribadi.', element: emailInput };
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

    const btn = document.getElementById('submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Memproses...';

    // Prepare Data
    const formData = new FormData(document.getElementById('orderForm'));
    const pkg = packages[currentPackage];
    const payment = paymentMethods.find(p => p.id === currentPayment);
    const totalPrice = pkg.price + uniqueCode;
    const now = new Date();
    const rL = () => "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26));
    const rN = () => Math.floor(Math.random() * 10);
    const paymentId = `INV-GDRIVE-${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${rL()}${rN()}${rL()}${rN()}`;

    // Prepare Object for Google Script
    const dataToSend = {
        nama: formData.get('nama'),
        whatsapp: formData.get('whatsapp'),
        email: formData.get('email'),
        paket: pkg.name,
        metodePembayaran: payment.name,
        totalTransfer: `Rp${totalPrice.toLocaleString('id-ID')}`,
        idPembayaran: paymentId,
        nomorRekening: payment.number || '-',
        sheetName: formData.get('sheetName')
    };

    // Send to Google Script
    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataToSend)
        });

        // Show Payment Page
        await showPaymentPage(dataToSend, payment, totalPrice);

    } catch (error) {
        console.error('Error:', error);
        showModal('Error', 'Gagal memproses pesanan. Silakan coba lagi.');
    } finally {
        btn.disabled = false;
        btn.innerHTML = 'Beli Sekarang <i class="fas fa-arrow-right"></i>';
    }
}

async function showPaymentPage(data, paymentMethod, amount) {
    // Store details for modal
    const pkgDetails = packages[currentPackage];
    currentOrderDetails = {
        pkg: data.paket,
        totalPrice: amount,
        paymentId: data.idPembayaran,
        nama: data.nama,
        whatsapp: data.whatsapp,
        email: data.email,
        price: pkgDetails.price,
        sheetName: data.sheetName
    };

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
    const waMsg = `Halo, saya sudah transfer untuk pesanan:\n` +
        `No Invoice: ${data.idPembayaran}\n` +
        `Email: ${data.email}\n` +
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

            loadScriptOnce('https://cdnjs.cloudflare.com/ajax/libs/qrcode/1.5.1/qrcode.min.js', 'QRCode')
                .then(() => {
                    const qrContainer = document.getElementById('qrcode-canvas');
                    if (!qrContainer) return;

                    qrContainer.innerHTML = ''; // Clear previous QR
                    const canvas = document.createElement('canvas');
                    QRCode.toCanvas(canvas, qrisDynamic, { width: 200, margin: 1 }, (err) => {
                        if (err) {
                            console.error(err);
                            return;
                        }
                        qrContainer.appendChild(canvas);

                        // Add download functionality
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
                .catch(err => {
                    console.error("Failed to load QRCode", err);
                    detailsContainer.innerHTML = '<p class="text-red-500">Gagal memuat QRIS.</p>';
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
