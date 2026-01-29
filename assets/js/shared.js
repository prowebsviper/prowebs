// SHARED UTILITIES & LOGIC

// --- PERFORMANCE UTILS ---
function runWhenVisible(elementId, callback) {
    const el = document.getElementById(elementId);
    if (!el) return;

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback();
                    observer.unobserve(entry.target);
                }
            });
        }, { rootMargin: '200px' });
        observer.observe(el);
    } else {
        // Fallback for old browsers
        callback();
    }
}

// --- VALIDATION HELPER ---
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

// --- UI UTILS ---

function startCountdown() {
    if (typeof countdownInterval !== 'undefined' && countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        if (typeof expiryTime === 'undefined') return;
        const now = new Date().getTime();
        const distance = expiryTime - now;

        const countdownEl = document.getElementById('countdown');
        if (!countdownEl) return;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownEl.innerHTML = "WAKTU HABIS";
            return;
        }

        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.innerHTML =
            `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }, 1000);
}

function copyText(textOrId) {
    let text = textOrId;
    const element = document.getElementById(textOrId);
    if (element) text = element.value || element.innerText;

    navigator.clipboard.writeText(text).then(() => {
        showModal('Berhasil', 'Teks berhasil disalin ke clipboard');
    }, () => {
        // Fallback
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showModal('Berhasil', 'Teks berhasil disalin');
        } catch (err) {
            console.error('Copy failed', err);
        }
        document.body.removeChild(textArea);
    });
}

function showModal(title, msg) {
    const titleEl = document.getElementById('modalTitle');
    const msgEl = document.getElementById('modalMessage');
    const modal = document.getElementById('infoModal');

    if (titleEl) titleEl.innerText = title;
    if (msgEl) msgEl.innerText = msg;
    if (modal) modal.classList.add('active');
}

function closeModal(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
}

function initNotifications() {
    // Only run if FIRST_NAMES is defined (it's in page-*.js)
    if (typeof FIRST_NAMES === 'undefined') return;

    setInterval(() => {
        const name = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
        const toast = document.getElementById('toast');
        const toastName = document.getElementById('toast-name') || document.getElementById('toast-title');

        if (toast && toastName) {
            toastName.innerText = name;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 4000);
        }
    }, 15000 + Math.random() * 10000);
}

// --- QRIS UTILS ---
function createDynamicQris(qris, nominal) {
    let qrisModified = qris.slice(0, -4).replace("010211", "010212");
    const nominalStr = String(Math.round(nominal));
    const amountLength = nominalStr.length < 10 ? "0" + nominalStr.length : nominalStr.length.toString();
    const amountPart = "54" + amountLength + nominalStr;

    if (qrisModified.includes("5802ID")) {
        let parts = qrisModified.split("5802ID");
        qrisModified = parts[0] + amountPart + "5802ID" + parts[1];
    }

    // Recalculate CRC
    const crc = crc16ccitt(qrisModified);
    return qrisModified + crc;
}

function crc16ccitt(str) {
    let crc = 0xFFFF;
    for (let c = 0; c < str.length; c++) {
        crc ^= str.charCodeAt(c) << 8;
        for (let i = 0; i < 8; i++) {
            if (crc & 0x8000) crc = (crc << 1) ^ 0x1021;
            else crc = crc << 1;
        }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, "0");
}

// --- RENDERERS ---

function renderPaymentMethods() {
    const grid = document.getElementById('payment-grid');
    if (!grid || typeof paymentMethods === 'undefined') return;

    // Group by category
    const categories = {
        'qris': { label: 'QRIS', items: [] },
        'bank': { label: 'Bank Transfer', items: [] },
        'ewallet': { label: 'E-Wallet', items: [] }
    };

    paymentMethods.forEach(pm => {
        if (categories[pm.category]) {
            categories[pm.category].items.push(pm);
        }
    });

    let html = '';
    let isFirst = true;

    Object.keys(categories).forEach(catKey => {
        const cat = categories[catKey];
        if (cat.items.length > 0) {
            html += `<div class="payment-category-label ${isFirst ? '' : 'mt-2'}">${cat.label}</div>`;
            isFirst = false;

            cat.items.forEach((pm, idx) => {
                const isSelected = (typeof currentPayment !== 'undefined' && currentPayment === pm.id) ? 'selected' : (catKey === 'qris' && idx === 0 ? 'selected' : '');
                html += `
                    <div id="pay-opt-${pm.id}" class="payment-option ${isSelected}" onclick="selectPayment('${pm.id}')">
                        <div class="payment-logo-wrapper">
                            <img src="${pm.logo}" alt="${pm.name}" loading="lazy" decoding="async">
                        </div>
                        <div class="payment-info">
                            <div class="payment-name">${pm.name}</div>
                        </div>
                        <div class="payment-check"></div>
                    </div>
                `;
            });
        }
    });

    grid.innerHTML = html;
}

function selectPayment(paymentId) {
    currentPayment = paymentId;
    const input = document.getElementById('selectedPayment');
    if (input) input.value = paymentId;

    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
    const selectedEl = document.getElementById(`pay-opt-${paymentId}`);
    if (selectedEl) selectedEl.classList.add('selected');
}

function renderTestimonials() {
    const container = document.getElementById('testimonial-container');
    if (!container) return;

    // Check if we use image-only testimonials (kurmer) or object based (others)
    if (typeof testimonialImages !== 'undefined') {
        // Kurmer style
        const images = [...testimonialImages, ...testimonialImages];
        container.innerHTML = `
            <div class="testimonial-track">
                ${images.map(url => `
                    <div class="testimonial-item" onclick="openImageModal('${url}')">
                        <img src="${url}" alt="Testimoni" loading="lazy">
                    </div>
                `).join('')}
            </div>
        `;
    } else if (typeof testimonialData !== 'undefined') {
        // Standard style
        const data = [...testimonialData, ...testimonialData];
        container.innerHTML = `
            <div class="testimonial-track">
                ${data.map(item => `
                    <div class="testimonial-item">
                        <div class="t-header">
                            <div class="t-avatar">
                                ${item.name.charAt(0)}
                            </div>
                            <div class="t-info">
                                <h4>${item.name}</h4>
                                <div class="t-stars">
                                    <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                        <p class="t-text">"${item.text}"</p>
                        ${item.img ? `<img src="${item.img}" class="t-review-img" onclick="openImageModal('${item.img}')" alt="Bukti Review" loading="lazy">` : ''}
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function renderFAQ() {
    const container = document.getElementById('faq-container');
    if (!container || typeof faqList === 'undefined') return;
    container.innerHTML = faqList.map(item => `
        <details class="faq-item">
            <summary>${item.q}</summary>
            <div class="faq-content">${item.a}</div>
        </details>
    `).join('');
}

function openImageModal(url) {
    const img = document.getElementById('modalImageDisplay');
    const modal = document.getElementById('imageModal');
    if (img && modal) {
        img.src = url;
        modal.classList.add('active');
    }
}

// --- PAYMENT PAGE LOGIC ---

function backToForm() {
    document.getElementById('view-payment').classList.add('hidden');
    document.getElementById('view-form').classList.remove('hidden');
    window.scrollTo(0, 0);
}

// --- OCR LOGIC ---
let selectedFile = null;

async function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        selectedFile = file;
        await verifyPaymentWithOCR();
    }
}

async function verifyPaymentWithOCR() {
    if (!selectedFile) return;

    const scanningState = document.getElementById('ocr-scanning-state');
    const initialState = document.getElementById('ocr-initial-state');

    if (scanningState) scanningState.classList.remove('hidden');

    let worker = null;
    const timeoutId = setTimeout(() => {
        if (worker) worker.terminate();
        showOCRFailure("Waktu habis. Silakan coba lagi.");
    }, 60000);

    try {
        if (typeof Tesseract === 'undefined') {
             await loadScriptOnce('https://cdn.jsdelivr.net/npm/tesseract.js@5/dist/tesseract.min.js', 'Tesseract');
        }

        worker = await Tesseract.createWorker("eng", 1, {
            logger: () => { }
        });

        const { data: { text } } = await worker.recognize(selectedFile);
        await worker.terminate();
        worker = null;
        clearTimeout(timeoutId);

        let cleanedText = text
            .replace(/O|o/g, '0')
            .replace(/I|l/g, '1')
            .replace(/S|s/g, '5')
            .replace(/B/g, '8');

        const digitsOnly = cleanedText.replace(/[^0-9]/g, '');
        const expectedAmount = currentOrderDetails.totalPrice.toString();

        if (digitsOnly.includes(expectedAmount)) {
            onPaymentSuccess();
        } else {
            showOCRFailure("Bukti pembayaran tidak valid. Silakan upload kembali atau verifikasi manual via WhatsApp.");
        }

    } catch (error) {
        clearTimeout(timeoutId);
        console.error(error);
        showOCRFailure("Gagal memproses gambar. Pastikan format gambar benar (JPG/PNG) dan ukuran tidak terlalu besar.");
    } finally {
        if (worker) await worker.terminate();
    }
}

function showOCRFailure(msg) {
    const scanningState = document.getElementById('ocr-scanning-state');
    const initialState = document.getElementById('ocr-initial-state');

    if (scanningState) scanningState.classList.add('hidden');
    if (initialState) initialState.classList.remove('hidden');

    const failureMsg = document.getElementById('ocrFailureMsg');
    if (failureMsg) failureMsg.innerText = msg;

    const modal = document.getElementById('ocrFailureModal');
    if (modal) modal.classList.add('active');
}

function retryOCRUpload() {
    closeModal('ocrFailureModal');
    document.getElementById('payment-proof-input').click();
}

function onPaymentSuccess() {
    const scanningState = document.getElementById('ocr-scanning-state');
    const initialState = document.getElementById('ocr-initial-state');
    const container = document.getElementById('ocr-container');

    if (scanningState) scanningState.classList.add('hidden');

    if (container) {
        container.classList.add('border-green-500', 'bg-green-50');
        container.classList.remove('border-blue-200', 'hover:bg-blue-50', 'cursor-pointer');
        container.onclick = null;
    }

    if (initialState) {
        initialState.innerHTML = `
            <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <i class="fas fa-check"></i>
            </div>
            <p class="text-sm font-bold text-green-700">Bukti Terkirim</p>
         `;
        initialState.classList.remove('hidden');
    }

    const modal = document.getElementById('ocrSuccessModal');
    if (modal) modal.classList.add('active');

    sendPaymentConfirmationToBackend();
}

async function sendPaymentConfirmationToBackend() {
    const payload = {
        action: 'confirm_payment',
        idPembayaran: String(currentOrderDetails.paymentId).trim(),
        sheetName: currentOrderDetails.sheetName
    };

    console.log("Sending confirmation payload:", payload);

    try {
        await fetch(SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        console.log("Confirmation sent to backend (no-cors mode)");
    } catch (e) {
        console.error("Failed to send confirmation", e);
    }
}

// --- SHEET LOGIC ---
let sheetInitialized = false;
function initSheetLogic() {
    const sheet = document.getElementById("sheet");
    if (!sheet) return;
    const btnDetail = document.getElementById("btnDetail");

    function lockScroll(lock) {
        document.documentElement.style.overflow = lock ? "hidden" : "";
        document.body.style.overflow = lock ? "hidden" : "";
    }

    function openSheet() {
        if (!sheet.classList.contains("hidden") && sheet.classList.contains("sheet-open")) return;

        sheet.classList.remove("hidden");
        sheet.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => sheet.classList.add("sheet-open"));
        lockScroll(true);
    }

    if (btnDetail) btnDetail.addEventListener("click", openSheet);

    if (sheetInitialized) return;

    const sheetBackdrop = document.getElementById("sheetBackdrop");
    const btnClose = document.getElementById("btnClose");
    const btnOk = document.getElementById("btnOk");

    const listContainer = document.getElementById("sheet-features-list");
    if (listContainer) {
        // fullFeaturesList (standard) or kelengkapanList (kurmer)
        const features = (typeof fullFeaturesList !== 'undefined') ? fullFeaturesList : ((typeof kelengkapanList !== 'undefined') ? kelengkapanList : []);

        listContainer.innerHTML = features.map(feat => `
            <li class="flex gap-2">
                <span class="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs shrink-0">✓</span>
                <span class="leading-tight">${feat}</span>
            </li>
        `).join('');
    }

    function closeSheet() {
        const isActuallyOpen = sheet.classList.contains("sheet-open");
        if (!isActuallyOpen) return;

        sheet.classList.remove("sheet-open");
        sheet.setAttribute("aria-hidden", "true");
        setTimeout(() => sheet.classList.add("hidden"), 230);
        lockScroll(false);
    }

    if (btnClose) btnClose.addEventListener("click", closeSheet);
    if (btnOk) btnOk.addEventListener("click", closeSheet);
    if (sheetBackdrop) sheetBackdrop.addEventListener("click", closeSheet);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !sheet.classList.contains("hidden")) closeSheet();
    });

    sheetInitialized = true;
}

// --- DETAILS MODAL ---
function showDetailsModal(event) {
    if (event) event.preventDefault();
    const modalContent = document.getElementById('detailsModalContent');
    const modal = document.getElementById('detailsModal');

    if (!modalContent || !modal) return;

    const { pkg, totalPrice, paymentId, nama, whatsapp, price, email } = currentOrderDetails;
    const uniqueCodeAmount = totalPrice - price;
    const isKurmer = typeof kelengkapanList !== 'undefined'; // Detect Kurmer page

    if (isKurmer) {
        // Kurmer specific render logic inside modal if needed, or generic
        // Kurmer has cart items in currentOrderDetails? No, logic in kurmer.html was specific.
        // But for simplicity we might use a generic render if fields match.
        // Kurmer `showPaymentPage` stores `orderDetails` string instead of `pkg` string only.

        // If orderDetails exists, use it
        const items = currentOrderDetails.orderDetails || pkg;

        modalContent.innerHTML = `
            <div class="details-modal-header p-4 flex items-center justify-between border-b border-gray-100">
                <h3 class="text-lg font-bold">Ringkasan Pesanan</h3>
                <button onclick="closeModal('detailsModal')" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times text-xl"></i></button>
            </div>
            <div class="details-modal-body p-4 max-h-[70vh] overflow-y-auto">
                <p class="text-xs text-gray-500 mb-2">Invoice: <strong>${paymentId}</strong></p>

                <div class="bg-gray-50 rounded-xl p-4 mb-4">
                    <div class="space-y-2 text-sm">
                        ${items.replace(/\n/g, '<br>')}
                    </div>
                    <div class="flex justify-between text-xs mt-3 pt-3 border-t border-gray-200">
                        <span>Kode Unik</span>
                        <span>Rp ${uniqueCodeAmount.toLocaleString('id-ID')}</span>
                    </div>
                    <div class="flex justify-between font-bold text-lg mt-2 text-blue-600">
                        <span>Total</span>
                        <span>Rp ${totalPrice.toLocaleString('id-ID')}</span>
                    </div>
                </div>

                <div class="pt-2">
                    <h4 class="font-semibold mb-2 text-sm text-gray-900">Informasi Pelanggan</h4>
                    <div class="space-y-2 text-sm">
                        <div>
                            <p class="text-gray-500 text-xs mb-0.5">Nama</p>
                            <p class="font-medium text-gray-900">${nama}</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-xs mb-0.5">Nomor WhatsApp</p>
                            <p class="font-medium text-gray-900">${whatsapp}</p>
                        </div>
                         <div>
                            <p class="text-gray-500 text-xs mb-0.5">Email</p>
                            <p class="font-medium text-gray-900">${email}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        // Standard
        modalContent.innerHTML = `
            <div class="details-modal-header p-4 flex items-center justify-between">
                <h3 class="text-lg font-bold">Ringkasan Transaksi</h3>
                <button onclick="closeModal('detailsModal')" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times text-xl"></i></button>
            </div>
            <div class="details-modal-body p-4 pt-2">
                <p class="text-xs text-gray-500 mb-3">Nomor Invoice: <strong>${paymentId}</strong></p>
                <div class="text-center mb-3">
                    <p class="text-sm text-gray-600 mb-1">Total Pembayaran</p>
                    <div class="flex items-center justify-center">
                        <p class="text-3xl font-bold text-gray-900">Rp ${totalPrice.toLocaleString('id-ID')}</p>
                    </div>
                </div>
                <div class="space-y-2 border-t border-b border-gray-200 py-3 my-3">
                    <div>
                        <div class="flex justify-between text-sm">
                            <span>${pkg}</span>
                            <span class="font-semibold text-gray-800">Rp ${price.toLocaleString('id-ID')}</span>
                        </div>
                    </div>
                     <div class="flex justify-between text-xs">
                        <span class="text-gray-500">Kode Unik</span>
                        <span class="font-medium">Rp ${uniqueCodeAmount.toLocaleString('id-ID')}</span>
                    </div>
                </div>
                <div class="pt-2">
                    <h4 class="font-semibold mb-2 text-sm">Informasi Pelanggan</h4>
                    <div class="space-y-2 text-sm">
                        <div>
                            <p class="text-gray-500 text-xs mb-0.5">Nama</p>
                            <p class="font-medium">${nama}</p>
                        </div>
                        <div>
                            <p class="text-gray-500 text-xs mb-0.5">Nomor WhatsApp</p>
                            <p class="font-medium">${whatsapp}</p>
                        </div>
                         <div>
                            <p class="text-gray-500 text-xs mb-0.5">Email</p>
                            <p class="font-medium">${email}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    modal.classList.add('active');
}
