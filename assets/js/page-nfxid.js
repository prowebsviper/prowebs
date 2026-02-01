
// PAGE SPECIFIC DATA & LOGIC

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySaAB2WT0D59UlLyZcXliWvNURCnHcRrqz5P8C2LCQbVdk0hn3Qkl1glGiLJSql_Wh/exec';
const uniqueCode = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

// Page specific data
const FIRST_NAMES = ["Budi Santoso", "Ayu", "Rahmat", "Citra Dewi Kusuma", "Bayu Pratama", "Lina", "Wulan", "Adi", "Farhan Syahputra", "Hendra Wijaya", "Nana Puspita Dewi", "Joko", "Mega Sari", "Gilang Pramana Putra", "Sari", "Dedi", "Eka Suryani", "Teguh", "Putri Lestari Ayu", "Andi", "Bagus Wijaya", "Ilham Saputra Nugraha", "Rizal", "Mira Astuti", "Puspita", "Hari", "Tri Saputra", "Cahya Pratama", "Surya Darmawan Putra", "Wahyu Ramadhan", "Agus", "Indra Permana", "Linda", "Fajar Mahendra Saputra", "Yusuf", "Pramono Adi Nugroho", "Sinta Dewi", "Bima Pratama", "Dian", "Hasan Basri", "Nurul Aini", "Arif Budiman", "Feri", "Lukman Hakim", "Rangga", "Rini Anggraini Putri", "Tono", "Hadi Prasetyo", "Elisa Purnama", "Anisa Rahma"];

const testimonialData = [
    { name: "Budi Santoso", text: "Akhirnya bisa nonton Netflix 4K tanpa buffering. Akun aman banget!", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmW3G.webp" },
    { name: "Rina Amelia", text: "Seller ramah, fast respon. Proses kilat cuma 5 menit langsung nonton.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmZZs.webp" },
    { name: "Dedi Kurniawan", text: "Udah langganan setahun disini, gapernah ada masalah. Mantap!", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmZYL.webp" },
    { name: "Sinta Pratiwi", text: "Worth it banget harganya. Jauh lebih murah dari bayar bulanan.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmZDU.webp" },
    { name: "Agung Wijaya", text: "Kualitas gambar jernih parah. Ga nyesel beli disini.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmZVZ.webp" },
    { name: "Putri Lestari", text: "Awalnya ragu, tapi ternyata beneran private account. Top!", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cmg7r.webp" },
    { name: "Bayu Pratama", text: "Bisa buat nonton bareng keluarga. Profil bisa dikunci juga.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmgJw.webp" },
    { name: "Eko Saputra", text: "Pelayanan memuaskan. Kalau ada kendala langsung dibantu.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmgSE.webp" },
    { name: "Fajar Nugraha", text: "Goodbye akun sharing yang suka limit screen. Ini solusi terbaik.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cmgv9.webp" },
    { name: "Maya Dewi", text: "Recommended seller! Akun awet, anti hold. Puas banget.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmzQS.webp" },
    { name: "Rudi Hartono", text: "Hemat banget buat anak kos. Hiburan tanpa batas.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmzE2.webp" },
    { name: "Wulan Sari", text: "Transaksi mudah, payment banyak opsinya. Suka banget!", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmzbV.webp" },
    { name: "Tono Jaya", text: "Udah repeat order ke-3 kali. Tetap konsisten pelayanannya.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm70k.webp" },
    { name: "Rizky Ramadhan", text: "Garansi beneran dikasih kalau ada apa-apa. Terpercaya.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm7Og.webp" },
    { name: "Siti Aminah", text: "Fitur downloadnya jalan lancar. Bisa nonton offline pas di jalan.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm71O.webp" },
    { name: "Doni Kusuma", text: "Pokoknya the best lah. Jangan ragu beli disini gess.", rating: 5, img: "https://pixvid.org/images/2026/01/16/Cm7pF.webp" }
];

const fullFeaturesList = [
    "Kualitas Video Terbaik (4K Ultra HD & HDR)",
    "Nonton di Semua Perangkat (TV, Laptop, Tablet, HP)",
    "Tanpa Iklan Sama Sekali",
    "Download & Tonton Offline",
    "Profil Anak (Kids Profile)",
    "Akun Private (Tidak Sharing dengan Orang Lain)",
    "Berlangganan 1 Tahun Penuh",
    "100% Legal & Bergaransi Resmi"
];

const faqList = [
    { q: "Apakah ini akun sharing?", a: "Tidak. Ini adalah akun private yang dibuat khusus untuk Anda. Anda akan menerima email dan password baru, dan bisa langsung mengganti passwordnya." },
    { q: "Berapa lama masa aktifnya?", a: "Langganan ini aktif selama 1 tahun penuh (365 hari) sejak tanggal aktivasi." },
    { q: "Apakah ini legal?", a: "Ya, 100% legal dan resmi. Kami memberikan garansi penuh selama masa berlangganan." },
    { q: "Bisa nonton di mana saja?", a: "Anda bisa menonton di semua perangkat yang mendukung Netflix, termasuk Smart TV, konsol game, laptop, PC, tablet, dan smartphone." },
    { q: "Berapa lama prosesnya?", a: "Prosesnya sangat cepat. Setelah pembayaran dikonfirmasi, akun akan dikirimkan dalam waktu 5-15 menit." },
    { q: "Bagaimana jika ada masalah?", a: "Kami menyediakan garansi penuh. Jika ada kendala yang bukan disebabkan oleh pelanggaran aturan, kami akan perbaiki atau ganti baru." },
    { q: "Apakah bisa digunakan di akun lama saya?", a: "Tidak, kami akan memberikan akun baru (email & password) yang sudah aktif paket Premiumnya. Anda tinggal login saja." },
    { q: "Berapa device yang bisa login & nonton?", a: "Anda bisa login di banyak device (TV, HP, Laptop, Tablet). Untuk Netflix Premium, batas nonton bersamaan adalah 4 layar (screen)." },
    { q: "Apakah butuh VPN?", a: "Tidak perlu. Ini adalah akun resmi region Indonesia (atau Global), jadi bisa langsung ditonton pakai jaringan lokal (Indihome, Telkomsel, dll) tanpa VPN." },
    { q: "Apakah kualitasnya benar-benar 4K UHD?", a: "Ya, pastikan device dan kecepatan internet Anda mendukung. Jika device support 4K, maka resolusi maksimal akan terbuka otomatis." },
    { q: "Bolehkah saya mengubah password dan profil?", a: "Boleh banget! Karena ini akun Private (milik Anda sendiri), Anda bebas ubah password, bikin profil atas nama Anda dan keluarga, serta atur PIN profil." },
    { q: "Bagaimana cara klaim garansi?", a: "Simpan nomor WhatsApp admin dan bukti pembelian (screenshot invoice). Jika ada kendala, chat kami dengan menyertakan detail masalahnya." },
    { q: "Apakah akun ini anti-banned?", a: "Selama Anda tidak melanggar ketentuan Netflix (tidak dipakai untuk scraping, tidak disebar ke publik), akun ini aman karena dibayar secara legal (bukan carding/hack)." }
];

const packages = {
    yearly: {
        id: 'yearly',
        name: "Netflix Premium 1 Tahun",
        price: 179000,
        normalPrice: 1790000
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
    const discount = Math.round(((yearly.normalPrice - yearly.price) / yearly.normalPrice) * 100);

    const now = new Date();
    let start = new Date();
    start.setHours(3, 0, 0, 0);
    if (now < start) start.setDate(start.getDate() - 1);
    const elapsed = now - start;
    const duration = 23 * 60 * 60 * 1000;
    let p = 100 - (elapsed / duration) * 98;
    const quota = Math.floor(Math.max(2, Math.min(100, p)));

    container.innerHTML = `
        <article class="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

            <!-- Product Header -->
            <div class="bg-gradient-to-br from-red-50 via-white to-red-50 p-4 pb-3 border-b border-gray-100">
                <div class="flex items-start justify-between mb-2">
                    <div class="flex items-center gap-2">
                        <span class="inline-flex items-center gap-1 rounded-full bg-red-100 px-2 py-0.5 text-[11px] font-bold text-red-700">
                            <span class="relative flex h-1.5 w-1.5">
                                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-600"></span>
                            </span>
                            Stok Tersedia
                        </span>
                    </div>
                    <span class="rounded-md bg-black px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">Terlaris</span>
                </div>

                <h3 class="text-[19px] font-extrabold text-gray-900 leading-tight mb-1">Netflix Premium 4K</h3>
                <p class="text-[13px] text-gray-600 font-medium flex items-center gap-1">
                    <i class="fas fa-check-circle text-green-600 text-xs"></i>
                    Private Account • 4K UHD • Anti Hold
                </p>
            </div>

            <!-- Pricing Section -->
            <div class="p-4">
                <div class="bg-gradient-to-br from-red-50 to-red-50 rounded-xl p-3 border border-red-100">
                    <div class="flex items-center justify-between mb-1">
                        <div>
                            <p class="text-[11px] font-semibold text-gray-500 mb-0.5">Harga Promo Hari Ini</p>
                            <div class="flex items-baseline gap-2">
                                <span class="text-[28px] font-black text-red-600 leading-none tracking-tight">${formatCurrency(yearly.price)}</span>
                            </div>
                        </div>
                        <div class="text-right">
                            <p class="text-[10px] text-gray-500 mb-0.5">Normal</p>
                            <span class="text-[13px] font-bold text-gray-400 line-through">${formatCurrency(yearly.normalPrice)}</span>
                            <p class="text-[11px] font-bold text-green-600 mt-0.5">Hemat ${discount}%</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Urgency Section -->
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

            <!-- Action Buttons -->
            <div class="px-4 pb-4">
                <div class="flex gap-2">
                    <button type="button" onclick="document.getElementById('nama').focus()"
                        class="flex-1 h-12 rounded-xl bg-[#E50914] text-white shadow-lg shadow-red-200 active:scale-[0.98] transition-all hover:bg-[#B20710] group">
                        <div class="flex items-center justify-center gap-2 font-bold text-[15px]">
                            <span>Ambil Promo Sekarang</span>
                            <i class="fas fa-arrow-right text-sm opacity-80 group-hover:translate-x-1 transition-transform"></i>
                        </div>
                    </button>

                    <button id="btnDetail" type="button"
                        class="h-12 w-12 rounded-xl border-2 border-gray-200 bg-white text-gray-600 flex items-center justify-center active:scale-[0.95] hover:bg-gray-50 hover:border-red-200 transition-all"
                        aria-label="Lihat Detail Lengkap">
                        <i class="fas fa-info-circle text-[17px]"></i>
                    </button>
                </div>

                <p class="mt-2.5 text-center text-[11px] text-gray-500 flex items-center justify-center gap-1">
                    <i class="fas fa-shield-alt text-green-600 text-xs"></i>
                    <span class="font-medium">Garansi 100% uang kembali</span>
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
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const getRandomLetter = () => letters.charAt(Math.floor(Math.random() * letters.length));
    const getRandomDigit = () => Math.floor(Math.random() * 10);

    const dateStr = `${now.getFullYear().toString().slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
    const suffix = `${getRandomLetter()}${getRandomDigit()}${getRandomLetter()}${getRandomDigit()}`;
    const paymentId = `INV-NFX-${dateStr}-${suffix}`;

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
        <a href="#" onclick="showDetailsModal(event)" class="font-semibold text-red-600">Lihat detail</a>
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
