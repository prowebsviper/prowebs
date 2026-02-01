// PAGE SPECIFIC DATA & LOGIC

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySaAB2WT0D59UlLyZcXliWvNURCnHcRrqz5P8C2LCQbVdk0hn3Qkl1glGiLJSql_Wh/exec';
const uniqueCode = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

// Page specific data
const FIRST_NAMES = ["Budi Santoso", "Ayu", "Rahmat", "Citra Dewi Kusuma", "Bayu Pratama", "Lina", "Wulan", "Adi", "Farhan Syahputra", "Hendra Wijaya", "Nana Puspita Dewi", "Joko", "Mega Sari", "Gilang Pramana Putra", "Sari", "Dedi", "Eka Suryani", "Teguh", "Putri Lestari Ayu", "Andi", "Bagus Wijaya", "Ilham Saputra Nugraha", "Rizal", "Mira Astuti", "Puspita", "Hari", "Tri Saputra", "Cahya Pratama", "Surya Darmawan Putra", "Wahyu Ramadhan", "Agus", "Indra Permana", "Linda", "Fajar Mahendra Saputra", "Yusuf", "Pramono Adi Nugroho", "Sinta Dewi", "Bima Pratama", "Dian", "Hasan Basri", "Nurul Aini", "Arif Budiman", "Feri", "Lukman Hakim", "Rangga", "Rini Anggraini Putri", "Tono", "Hadi Prasetyo", "Elisa Purnama", "Anisa Rahma"];

const testimonialData = [
    { name: "Andi Saputra", text: "Mantap jiwa! Office 365 nya beneran lifetime, no tipu-tipu. OneDrive 5TB lega banget buat backup kerjaan.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmtYj.webp" },
    { name: "Dewi Lestari", text: "Proses cepat, admin ramah. Langsung aktif di akun sendiri. Recommended seller!", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmtAD.webp" },
    { name: "Budi Santoso", text: "Awalnya ragu, tapi setelah coba ternyata beneran work. Hemat banget dibanding langganan bulanan.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmtLp.webp" },
    { name: "Rina Amelia", text: "Solusi pas buat mahasiswa kayak aku. Fitur lengkap, bisa collab real-time juga.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmwzI.webp" },
    { name: "Eko Prasetyo", text: "Kualitas original, harga kaki lima. Udah cek semua fitur jalan normal. Makasih min!", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmwJ0.webp" },
    { name: "Siti Nurhaliza", text: "Pelayanan memuaskan, dipandu sampe beres. Garansi juga jelas jadi tenang.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmwSW.webp" },
    { name: "Fajar Shiddiq", text: "OneDrive 5TB nya kepake banget buat simpen file video editing. Upload kenceng.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmwvR.webp" },
    { name: "Gita Gutawa", text: "Trusted! Udah beli kedua kalinya buat adek. Sukses terus usahanya.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmFQt.webp" },
    { name: "Haryanto", text: "Simpel, murah, bermanfaat. Ga perlu mikir perpanjangan lagi tahun depan.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmFEK.webp" },
    { name: "Indra Maulana", text: "Mantul! Semua apps Office bisa dipake offline di laptop. Login 5 device aman.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmFby.webp" },
    { name: "Joko Widodo", text: "Pengiriman instan, ga sampe 5 menit. Langsung gas ngerjain skripsi.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmYeG.webp" },
    { name: "Kurniawan", text: "Best deal sih ini. Daripada bjakn mending beli ini, aman dari virus.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmYrs.webp" },
    { name: "Lestari", text: "Suka banget! Bisa akses file dari HP dan Laptop sinkron otomatis.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmYoL.webp" },
    { name: "Megaawati", text: "Admin nya fast respon banget kalau ditanya. Produk sesuai deskripsi.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmYpU.webp" },
    { name: "Nuryanto", text: "Worth it parah. Cuma sekali bayar dapet segini banyak benefit.", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmikZ.webp" },
    { name: "Oki Setiana", text: "Terima kasih, sangat membantu produktivitas kerja saya. Top!", rating: 5, img: "https://pixvid.org/images/2026/01/16/CmiTr.webp" }
];

const fullFeaturesList = [
    "Cukup bayar sekali: Langsung aktif di 5 perangkat (Smartphone, Tablet, Laptop, PC).",
    "Legal & Aman: Hemat jutaan dibanding langganan sendiri.",
    "Kerja Online & Kolaborasi: Seperti Google Docs, kolaborasi tim jadi lebih mudah.",
    "Selalu Update: Otomatis dapat fitur baru tanpa takut diblacklist.",
    "Bebas Gangguan: Kerja lancar jaya tanpa stress error aktivasi seperti aplikasi bajakan.",
    "Aman dari Malware: Lindungi data Anda dari risiko menggunakan aplikasi bajakan."
];

const faqList = [
    { q: "Apakah ini benar-benar sekali bayar?", a: "Ya, benar. Anda cukup membayar sekali sebesar Rp99.000 untuk mendapatkan lisensi Office 365 yang aktif selamanya. Tidak ada biaya bulanan atau tahunan lagi." },
    { q: "Bagaimana proses aktivasinya?", a: "Setelah pembayaran, kami akan mengirimkan detail akun dan panduan aktivasi ke email Anda. Prosesnya mudah dan cepat, bisa langsung digunakan di 5 perangkat." },
    { q: "Apakah ini legal dan aman dari blokir?", a: "Tentu saja. Lisensi yang kami sediakan adalah 100% legal dan aman. Anda tidak perlu khawatir akan diblokir atau terkena blacklist. Kami memberikan garansi penuh untuk itu." },
    { q: "Apa saja yang saya dapatkan?", a: "Anda akan mendapatkan akses penuh ke aplikasi Microsoft Office (Word, Excel, PowerPoint, Outlook, OneNote, dll) serta penyimpanan Cloud OneDrive." },
    { q: "Bisa digunakan di perangkat apa saja?", a: "Satu akun bisa digunakan di 5 perangkat sekaligus, mendukung: Windows 10/11, macOS, Android (HP/Tablet), dan iOS (iPhone/iPad)." },
    { q: "Apakah ini akun sharing?", a: "Bukan. Ini adalah Private Account. Akun sepenuhnya milik Anda, tidak berbagi file dengan orang lain. Privasi 100% aman." },
    { q: "Apakah aplikasi bisa digunakan offline?", a: "Sangat bisa. Aplikasi terinstall di perangkat (bukan web-only), jadi Anda bisa bekerja tanpa koneksi internet." },
    { q: "Jika saya ganti laptop/HP, apakah harus bayar lagi?", a: "Tidak perlu. Lisensi melekat pada akun, bukan perangkat. Cukup login di perangkat baru Anda. Anda juga bisa mengatur perangkat yang terhubung." },
    { q: "Bisakah saya menggunakan akun email saya sendiri?", a: "Ya, lisensi ini akan diaktifkan menggunakan akun email yang Anda daftarkan saat pembelian (atau kami berikan akun baru jika diperlukan)." },
    { q: "Apa bedanya dengan Office 2019/2021?", a: "Office 365 selalu mendapatkan update fitur terbaru (selalu up-to-date), sedangkan Office 2019/2021 fiturnya tidak bertambah. 365 juga mendukung fitur cloud/online." },
    { q: "Berapa lama proses pengiriman lisensi?", a: "Prosesnya sangat cepat. Setelah Anda melakukan konfirmasi pembayaran, pengiriman lisensi biasanya selesai dalam waktu 5-15 menit, maksimal 1x24 jam." },
    { q: "Apakah ada garansi?", a: "Kami memberikan garansi uang kembali penuh jika proses aktivasi gagal karena kesalahan dari pihak kami. Kami juga memberikan garansi layanan seumur hidup." }
];

const packages = {
    lifetime: {
        id: 'lifetime',
        name: "Microsoft Office 365 Lifetime",
        price: 99000,
        normalPrice: 1499000
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
    whatsappInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });
});

// --- RENDER FUNCTIONS (Page Specific) ---
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

    container.innerHTML = `
        <article class="relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <!-- Top Badge -->
            <div class="absolute top-0 right-0 bg-[#D83B01] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl z-10">
                BEST SELLER
            </div>

            <div class="p-5">
                <!-- Header -->
                <div class="flex items-center gap-4 mb-4">
                    <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100 shrink-0">
                            <img src="/assets/images/ms365.webp" alt="Microsoft 365" class="w-7 h-7 object-contain">
                    </div>
                    <div>
                        <h3 class="text-lg font-bold text-gray-900 leading-tight">Microsoft 365</h3>
                        <p class="text-xs text-gray-500 font-medium">Lifetime License • Official</p>
                    </div>
                </div>

                <!-- Pricing -->
                <div class="mb-5">
                        <div class="flex items-baseline gap-1">
                        <span class="text-sm text-gray-500 font-semibold">Rp</span>
                        <span class="text-4xl font-extrabold text-gray-900 tracking-tight">${lifetime.price.toLocaleString('id-ID')}</span>
                        </div>
                        <div class="flex items-center gap-2 mt-1">
                        <span class="text-xs text-gray-400 line-through">Rp ${lifetime.normalPrice.toLocaleString('id-ID')}</span>
                        <span class="bg-red-50 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-red-100">Hemat ${discount}%</span>
                        </div>
                </div>

                <!-- Features (Simple List) -->
                <div class="space-y-2 mb-5">
                    <div class="flex items-center gap-2 text-sm text-gray-700">
                        <i class="fas fa-check-circle text-orange-500"></i>
                        <span>5TB OneDrive Storage</span>
                    </div>
                    <div class="flex items-center gap-2 text-sm text-gray-700">
                        <i class="fas fa-check-circle text-orange-500"></i>
                        <span>Official Office Apps</span>
                    </div>
                    <div class="flex items-center gap-2 text-sm text-gray-700">
                        <i class="fas fa-check-circle text-orange-500"></i>
                        <span>Garansi Lifetime</span>
                    </div>
                </div>

                <!-- Stock Bar -->
                <div class="bg-gray-50 rounded-lg p-2.5 mb-5 flex items-center justify-between border border-gray-100">
                        <div class="flex items-center gap-2">
                            <div class="relative flex h-2 w-2">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                            </div>
                            <span class="text-xs font-bold text-red-600">Sisa ${Math.max(1, Math.floor(quota/10))} Slot</span>
                        </div>
                        <span class="text-xs font-mono font-bold text-gray-500" id="card-countdown">23:59</span>
                </div>

                <!-- Action -->
                <button type="button" onclick="document.getElementById('nama').focus()"
                    class="w-full h-12 bg-[#D83B01] hover:bg-[#B93301] text-white font-bold rounded-xl text-base shadow-lg shadow-orange-100 transition-all active:scale-[0.98] flex items-center justify-center gap-2">
                    <span>Ambil Promo</span>
                    <i class="fas fa-arrow-right"></i>
                </button>
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
    const rD = () => Math.floor(Math.random() * 10);
    const paymentId = `INV-MS365-${String(now.getFullYear()).slice(-2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${rL()}${rD()}${rL()}${rD()}`;

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
        sheetName: 'ms365' // Default sheet for ms365
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
        btn.innerHTML = 'Pesan Sekarang <i class="fas fa-arrow-right"></i>';
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
        <a href="#" onclick="showDetailsModal(event)" class="font-semibold text-[#D83B01]">Lihat detail</a>
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
