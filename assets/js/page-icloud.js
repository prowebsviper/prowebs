
// PAGE SPECIFIC DATA & LOGIC

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySaAB2WT0D59UlLyZcXliWvNURCnHcRrqz5P8C2LCQbVdk0hn3Qkl1glGiLJSql_Wh/exec';
const uniqueCode = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

// Page specific data
const FIRST_NAMES = ["Budi Santoso", "Ayu", "Rahmat", "Citra Dewi Kusuma", "Bayu Pratama", "Lina", "Wulan", "Adi", "Farhan Syahputra", "Hendra Wijaya", "Nana Puspita Dewi", "Joko", "Mega Sari", "Gilang Pramana Putra", "Sari", "Dedi", "Eka Suryani", "Teguh", "Putri Lestari Ayu", "Andi", "Bagus Wijaya", "Ilham Saputra Nugraha", "Rizal", "Mira Astuti", "Puspita", "Hari", "Tri Saputra", "Cahya Pratama", "Surya Darmawan Putra", "Wahyu Ramadhan", "Agus", "Indra Permana", "Linda", "Fajar Mahendra Saputra", "Yusuf", "Pramono Adi Nugroho", "Sinta Dewi", "Bima Pratama", "Dian", "Hasan Basri", "Nurul Aini", "Arif Budiman", "Feri", "Lukman Hakim", "Rangga", "Rini Anggraini Putri", "Tono", "Hadi Prasetyo", "Elisa Purnama", "Anisa Rahma"];

const testimonialData = [
    { name: "Anita Wijaya", text: "Akhirnya bisa backup semua foto liburan tanpa pusing notif 'Storage Full'. Prosesnya cepet banget!", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmkGu.webp" },
    { name: "Budi Santoso", text: "Recommended! Langsung 2TB, legal dan aman. Adminnya fast response.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cmkf6.webp" },
    { name: "Citra Lestari", text: "Seneng banget dapet harga segini buat 2TB. Bisa share sama keluarga juga.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmmHA.webp" },
    { name: "Dimas Pratama", text: "Mantap, iCloud drive langsung lega. Upload video 4K lancar jaya.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmmKX.webp" },
    { name: "Eka Putri", text: "Awalnya ragu, tapi ternyata beneran amanah. Work 100% di iPhone dan iPad saya.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cmma3.webp" },
    { name: "Fajar Nugraha", text: "Solusi hemat buat yang butuh storage gede. Thanks banget!", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm5ee.webp" },
    { name: "Gita Pertiwi", text: "Proses sat set, gak pake lama. Garansi juga jelas. Top!", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm5rC.webp" },
    { name: "Hendra Setiawan", text: "Udah langganan di sini, gapernah kecewa. Pelayanan terbaik.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm5oQ.webp" },
    { name: "Indah Sari", text: "Suka banget! Foto-foto anak aman tersimpan. Gak perlu hapus-hapus file lagi.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm5Xq.webp" },
    { name: "Joko Riyanto", text: "Buat kerjaan enak banget, sinkronisasi antar device Apple mulus.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm8UJ.webp" },
    { name: "Kartika Dewi", text: "Harga terjangkau, kualitas bintang lima. Puas banget pokoknya.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm8lj.webp" },
    { name: "Lukman Hakim", text: "Admin ramah, dipandu sampe sukses. Storage beneran nambah permanen.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm86D.webp" },
    { name: "Maya Anggraeni", text: "Very recommended seller. Proses mudah dan transparan.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm8sp.webp" },
    { name: "Nanda Saputra", text: "Gak nyesel beli di sini. Data aman, privasi terjaga.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmCmI.webp" },
    { name: "Olivia Chandra", text: "Thank you! iPhone gak lemot lagi gara-gara storage penuh.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmCq0.webp" }
];

const fullFeaturesList = [
    "Kapasitas 2TB: Simpan semua foto, video, file, dan backup perangkat Anda dengan aman.",
    "Relai Pribadi iCloud: Jelajahi web dengan lebih aman dan pribadi di Safari.",
    "Sembunyikan Email Saya: Buat alamat email acak untuk menjaga kerahasiaan email pribadi Anda.",
    "Domain Email Khusus: Personalisasi alamat email iCloud Anda dengan domain sendiri.",
    "Video Aman HomeKit: Simpan rekaman kamera keamanan rumah Anda dengan enkripsi end-to-end.",
    "Gunakan Email Pribadi Anda: Upgrade dilakukan langsung pada akun Apple ID (iCloud) pribadi Anda.",
    "100% Aman & Bergaransi: Proses legal melalui fitur Apple One Premier, privasi terjamin.",
    "Support iPhone, iPad, Mac, Windows",
    "Bisa Family Sharing (sebagai member)"
];

const faqList = [
    {
        q: "Apakah ini benar-benar 2TB?",
        a: "Ya, Anda akan mendapatkan akses ke penyimpanan iCloud+ sebesar 2TB melalui fitur Family Sharing. Kapasitas ini bisa digunakan untuk menyimpan foto, video, dan backup device Anda."
    },
    {
        q: "Apakah Admin atau anggota lain bisa melihat foto/data saya?",
        a: "TIDAK BISA. Privasi adalah prioritas utama Apple. Meskipun berada dalam satu 'Keluarga', data setiap anggota TERPISAH dan TERENKRIPSI. Admin maupun anggota lain TIDAK memiliki akses sama sekali ke file, foto, atau chat WhatsApp Anda."
    },
    {
        q: "Bagaimana sistem upgrade-nya?",
        a: "Sistemnya via Invite Family Sharing. Kami akan mengirimkan undangan ke email Apple ID Anda. Anda cukup klik 'Join Family' dan otomatis storage Anda akan ter-upgrade menjadi 2TB. Tanpa perlu password Apple ID Anda."
    },
    {
        q: "Apakah saya harus membuat akun baru?",
        a: "Tidak perlu. Upgrade ini dipasang langsung di akun Apple ID pribadi yang sedang Anda gunakan sekarang. Jadi tidak perlu repot pindah data atau ganti akun."
    },
    {
        q: "Bagaimana jika saya masih punya langganan iCloud aktif?",
        a: "Jika Anda sedang berlangganan paket berbayar (50GB/200GB), disarankan untuk membatalkan langganan tersebut setelah Join Family agar tidak terkena tagihan double dari Apple. Sisa kuota lama akan digantikan dengan kuota 2TB Family."
    },
    {
        q: "Apakah file lama saya aman?",
        a: "Sangat aman. File lama tidak akan hilang, tidak akan terhapus, dan tidak perlu dipindahkan. File tersebut otomatis akan menempati ruang penyimpanan baru yang lebih besar (2TB)."
    },
    {
        q: "Apakah bisa diperpanjang tahun depan?",
        a: "Bisa. Anda bisa memperpanjang langganan di akun yang sama. Kami akan mengingatkan Anda sebelum masa aktif berakhir untuk proses perpanjangan."
    },
    {
        q: "Syarat region Apple ID apa?",
        a: "Wajib Region INDONESIA. Jika akun Anda region luar, mohon diganti dulu ke Indonesia, atau buat akun baru region Indonesia untuk menikmati layanan ini."
    },
    {
        q: "Bisa dipakai di berapa device?",
        a: "Bisa di SEMUA device Apple Anda (iPhone, iPad, Mac) asalkan login menggunakan Apple ID yang sama."
    },
    {
        q: "Apa yang terjadi jika masa langganan habis?",
        a: "Jika tidak diperpanjang, penyimpanan kembali ke 5GB (bawaan). Data Anda TIDAK langsung hilang (ada masa tenggang dari Apple), namun Anda tidak bisa upload data baru sampai Anda memperpanjang langganan atau mengurangi isi penyimpanan."
    },
    {
        q: "Berapa lama prosesnya?",
        a: "Instan setelah konfirmasi pembayaran. Admin kami akan segera memproses invite dalam 5-10 menit di jam kerja."
    },
    {
        q: "Apakah Legal dan Bergaransi?",
        a: "100% Legal menggunakan fitur resmi Apple Family Sharing (Apple One Premier). Kami memberikan GARANSI PENUH selama masa langganan jika terjadi kendala pada fitur sharingnya."
    }
];

const packages = {
    yearly: {
        id: 'yearly',
        name: "iCloud+ 2TB (1 Tahun)",
        price: 350000,
        normalPrice: 2028000
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

let currentPackage = 'yearly';
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
    whatsappInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
});

// --- RENDER FUNCTIONS (Page Specific) ---
function renderPackageCards() {
    const container = document.getElementById('package-selection-container');
    if (!container) return;

    const formatCurrency = (amount) => `Rp ${amount.toLocaleString('id-ID')}`;

    const yearly = packages.yearly;
    const yearlyDiscount = Math.round(((yearly.normalPrice - yearly.price) / yearly.normalPrice) * 100);

    // Calculate dynamic quota
    const now = new Date();
    let start = new Date();
    start.setHours(3, 0, 0, 0);
    if (now < start) start.setDate(start.getDate() - 1);
    const elapsed = now - start;
    const duration = 23 * 60 * 60 * 1000;
    let p = 100 - (elapsed / duration) * 98;
    const quota = Math.floor(Math.max(2, Math.min(100, p)));

    container.innerHTML = `
        <!-- Product Info Card - Mobile Optimized (Redesigned) -->
        <article class="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-gray-900/5 transition-all hover:shadow-2xl">
            <!-- Header: Solid Color -->
            <div class="bg-[#007aff] p-6 text-white relative overflow-hidden">
                <div class="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/10 blur-2xl"></div>
                <div class="absolute -left-6 -bottom-6 h-24 w-24 rounded-full bg-black/10 blur-2xl"></div>

                <div class="relative z-10 flex items-start justify-between">
                    <div>
                        <span class="inline-flex items-center rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/20 shadow-sm">
                            <span class="mr-1.5 flex h-2 w-2 relative">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                            </span>
                            Stok Tersedia
                        </span>
                        <h3 class="mt-3 text-2xl font-black tracking-tight text-white leading-tight">iCloud+ 2TB</h3>
                        <p class="mt-1 text-sm font-medium text-white/90 flex items-center gap-1.5">
                            <i class="fas fa-check-circle"></i> Original Private Apple ID
                        </p>
                    </div>
                    <!-- Discount Badge -->
                    <div class="rounded-lg bg-white/10 p-2 backdrop-blur-sm border border-white/20 shadow-inner">
                        <span class="block text-center text-[10px] font-bold uppercase text-white/80">Diskon</span>
                        <span class="block text-center text-lg font-black leading-none text-white">${yearlyDiscount}%</span>
                    </div>
                </div>
            </div>

            <!-- Pricing Section -->
            <div class="p-6">
                <div class="flex items-end gap-2 mb-1">
                    <span class="text-4xl font-black text-gray-900 tracking-tight">${formatCurrency(yearly.price)}</span>
                    <span class="text-lg font-bold text-gray-400 line-through mb-1.5 decoration-2">${formatCurrency(yearly.normalPrice)}</span>
                </div>
                <p class="text-xs font-semibold text-blue-700 bg-blue-50 inline-block px-2 py-1 rounded-md mb-4 border border-blue-100">
                    <i class="fas fa-tags mr-1"></i> Harga Promo Spesial Hari Ini
                </p>

                <!-- Urgency/Stock -->
                <div class="rounded-xl bg-orange-50 p-3 border border-orange-100 mb-5">
                    <div class="flex items-center justify-between mb-2">
                        <div class="flex items-center gap-2">
                            <i class="fas fa-fire text-orange-500 animate-pulse"></i>
                            <span class="text-xs font-bold text-orange-700">Promo Terbatas!</span>
                        </div>
                        <span class="text-xs font-bold text-gray-900">${quota}% Kuota Tersisa</span>
                    </div>
                    <div class="h-2 w-full bg-white rounded-full overflow-hidden border border-orange-200">
                        <div class="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full transition-all duration-1000" style="width: ${quota}%"></div>
                    </div>
                </div>

                <!-- Buttons -->
                <div class="grid grid-cols-[1fr_auto] gap-3">
                    <button type="button" onclick="document.getElementById('nama').focus()" class="h-14 rounded-2xl bg-[#007aff] text-white shadow-lg shadow-blue-200 hover:bg-[#005ecb] active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-bold text-[16px] group">
                        <span>Ambil Promo</span>
                        <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </button>
                    <button id="btnDetail" type="button" class="h-14 w-14 rounded-2xl border-2 border-gray-100 text-gray-400 hover:border-blue-100 hover:bg-blue-50 hover:text-[#007aff] transition-all flex items-center justify-center">
                        <i class="fas fa-info-circle text-xl"></i>
                    </button>
                </div>

                <p class="mt-4 text-center text-xs font-medium text-gray-400 flex items-center justify-center gap-1.5">
                    <i class="fas fa-shield-alt text-green-500"></i> Garansi Uang Kembali 100%
                </p>
            </div>
        </article>
    `;

    if (typeof initSheetLogic === 'function') initSheetLogic();
}

function selectPackage(pkgId) {
    currentPackage = pkgId;
    document.getElementById('selectedPackage').value = pkgId;
    renderPackageCards();
    updateTotalPrice();
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

    const domain = email.split('@')[1];
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
    const year = String(now.getFullYear()).slice(-2);
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const getRandomLetter = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
    const getRandomDigit = () => Math.floor(Math.random() * 10);
    const paymentId = `INV-ICLOUD-${year}${month}${day}-${getRandomLetter()}${getRandomDigit()}${getRandomLetter()}${getRandomDigit()}`;

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
        `Email Apple ID: ${data.email}\n` +
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
