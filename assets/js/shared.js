// SHARED UTILITIES & LOGIC — ULTIMATE VERSION

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

    grid.innerHTML = `${html}<div id="payment-summary-inline" class="payment-summary-inline"></div>`;
    renderPaymentMethodSummary();
    initPaymentSummaryAutoUpdate();
}

function selectPayment(paymentId) {
    currentPayment = paymentId;
    const input = document.getElementById('selectedPayment');
    if (input) input.value = paymentId;

    document.querySelectorAll('.payment-option').forEach(opt => opt.classList.remove('selected'));
    const selectedEl = document.getElementById(`pay-opt-${paymentId}`);
    if (selectedEl) selectedEl.classList.add('selected');
    renderPaymentMethodSummary();
}

function renderPaymentMethodSummary() {
    const container = document.getElementById('payment-summary-inline');
    if (!container || typeof paymentMethods === 'undefined') return;

    const selectedId = (typeof currentPayment !== 'undefined' && currentPayment) || document.getElementById('selectedPayment')?.value || '';
    const method = paymentMethods.find(p => p.id === selectedId) || null;
    const totalEl = document.getElementById('total-price-display') || document.getElementById('widget-total-display');
    const totalText = totalEl ? totalEl.textContent.trim() : '-';
    const uniqueCodeText = (typeof uniqueCode !== 'undefined' && Number.isFinite(Number(uniqueCode)))
        ? `+ Rp ${Number(uniqueCode).toLocaleString('id-ID')}`
        : '-';

    container.innerHTML = `
        <p class="payment-summary-title"><i class="fas fa-receipt" aria-hidden="true"></i> Ringkasan Pembayaran</p>
        <div class="payment-summary-row">
            <span>Metode</span>
            <strong>${method ? method.name : '-'}</strong>
        </div>
        <div class="payment-summary-row">
            <span>Kode Unik</span>
            <strong>${uniqueCodeText}</strong>
        </div>
        <div class="payment-summary-row payment-summary-total">
            <span>Total</span>
            <strong>${totalText}</strong>
        </div>
    `;
}

let paymentSummaryObserverInitialized = false;
function initPaymentSummaryAutoUpdate() {
    if (paymentSummaryObserverInitialized) return;
    const totalEl = document.getElementById('total-price-display') || document.getElementById('widget-total-display');
    if (!totalEl || !window.MutationObserver) return;

    const observer = new MutationObserver(() => renderPaymentMethodSummary());
    observer.observe(totalEl, { childList: true, subtree: true, characterData: true });
    paymentSummaryObserverInitialized = true;
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

function mountProductDetailsAccordion() {
    const host = document.getElementById('package-selection-container') || document.getElementById('promo-card-container');
    if (!host) return;

    const features = (typeof fullFeaturesList !== 'undefined')
        ? fullFeaturesList
        : ((typeof kelengkapanList !== 'undefined') ? kelengkapanList : []);

    if (!Array.isArray(features) || features.length === 0) return;

    const sheetName = document.querySelector('input[name="sheetName"]')?.value || '';
    const pathKey = window.location.pathname.split('/').filter(Boolean)[0] || '';
    const sourceKey = sheetName || pathKey;
    const policyMap = {
        adobe: 'Adobe',
        gdrive: 'Google',
        icloud: 'Apple',
        kurmer: 'platform terkait',
        ms365: 'Microsoft',
        nfx: 'Netflix',
        nfxid: 'Netflix'
    };
    const policyName = policyMap[sourceKey] || 'platform terkait';
    const isLifetimeProduct = sourceKey === 'gdrive' || sourceKey === 'ms365';

    const importantIntro = isLifetimeProduct
        ? `Dengan menggunakan layanan ini, Anda setuju untuk terikat pada S&K kami. Layanan ini adalah pembayaran satu kali untuk manfaat seumur hidup, tunduk pada kebijakan ${policyName} yang berlaku.`
        : `Dengan menggunakan layanan ini, Anda setuju untuk terikat pada S&K kami. Masa aktif layanan mengikuti paket yang Anda pilih serta kebijakan ${policyName} yang berlaku.`;
    const importantPoints = isLifetimeProduct
        ? [
            'Layanan untuk penggunaan wajar dan tidak melanggar hukum.',
            'Garansi penuh jika upgrade gagal karena kesalahan kami.',
            'Garansi tidak mencakup pemblokiran akun akibat pelanggaran oleh pengguna.',
            `Perubahan kebijakan ${policyName} di masa depan berada di luar kendali kami.`
        ]
        : [
            'Layanan untuk penggunaan wajar dan tidak melanggar hukum.',
            'Masa aktif tidak bersifat seumur hidup kecuali dinyatakan jelas pada nama paket.',
            'Garansi penuh jika aktivasi gagal karena kesalahan kami.',
            `Perubahan kebijakan ${policyName} di masa depan berada di luar kendali kami.`
        ];

    const detailAccordionHtml = `
        <details class="product-details-accordion">
            <summary>
                <span>Detail Produk</span>
            </summary>
            <div class="product-details-content">
                <ul>
                    ${features.map(feat => `
                        <li>
                            <span class="product-details-check"><i class="fas fa-check" aria-hidden="true"></i></span>
                            <span>${feat}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        </details>
    `;
    const showImportantAccordion = sourceKey !== 'kurmer';
    const importantAccordionHtml = showImportantAccordion ? `
        <details class="product-details-accordion product-important-accordion">
            <summary>
                <span>Informasi Penting</span>
            </summary>
            <div class="product-details-content">
                <div class="product-important-text">
                    <p>${importantIntro}</p>
                    <ul class="product-important-list">
                        ${importantPoints.map(point => `<li>${point}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </details>
    ` : '';
    const accordionHtml = `${detailAccordionHtml}${importantAccordionHtml}`;

    let accordion = host.querySelector('.product-details-accordion');
    const importantAccordion = host.querySelector('.product-important-accordion');
    if (accordion) {
        if (importantAccordion) {
            importantAccordion.remove();
        }
        accordion.outerHTML = accordionHtml;
        return;
    }

    host.insertAdjacentHTML('beforeend', accordionHtml);
}
// --- SHEET LOGIC ---
let sheetInitialized = false;
function initSheetLogic() {
    mountProductDetailsAccordion();
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

// ============================================================
//  ULTIMATE UPGRADE — NEW & MODIFIED SHARED FUNCTIONS
// ============================================================

// --- UTM CAPTURE ---
function captureUTM() {
    const params = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach(key => {
        const val = params.get(key);
        if (val) {
            const el = document.getElementById(key);
            if (el) el.value = val;
        }
    });
}

// --- FB PIXEL SAFE WRAPPER ---
function trackFBEvent(eventName, params) {
    if (typeof fbq !== 'undefined') {
        try { fbq('track', eventName, params || {}); } catch (e) { /* silent */ }
    }
}

function trackFBPurchaseVerified(orderDetails) {
    if (!orderDetails) return;
    const paymentId = String(orderDetails.paymentId || orderDetails.idPembayaran || '').trim();
    if (!paymentId) return;

    const dedupeKey = `fb_purchase_verified_${paymentId}`;
    if (sessionStorage.getItem(dedupeKey) === '1') return;

    const totalValue = Number(orderDetails.totalPrice || orderDetails.price || 0);
    const value = Number.isFinite(totalValue) ? totalValue : 0;
    const eventParams = {
        value,
        currency: 'IDR',
        content_name: orderDetails.pkg || 'Produk',
        content_ids: [paymentId],
        content_type: 'product',
        num_items: 1
    };

    if (typeof fbq !== 'undefined') {
        try {
            fbq('track', 'Purchase', eventParams, { eventID: `purchase_${paymentId}` });
            sessionStorage.setItem(dedupeKey, '1');
            return;
        } catch (e) {
            // fallback to wrapper below
        }
    }

    trackFBEvent('Purchase', eventParams);
    sessionStorage.setItem(dedupeKey, '1');
}

function trackFBReachedPayment(orderDetails) {
    if (!orderDetails) return;
    const paymentId = String(orderDetails.paymentId || orderDetails.idPembayaran || '').trim();
    if (!paymentId) return;

    const dedupeKey = `fb_checkout_reached_${paymentId}`;
    if (sessionStorage.getItem(dedupeKey) === '1') return;

    const totalValue = Number(orderDetails.totalPrice || orderDetails.price || 0);
    const value = Number.isFinite(totalValue) ? totalValue : 0;
    const eventParams = {
        value,
        currency: 'IDR',
        content_name: orderDetails.pkg || 'Produk',
        content_ids: [paymentId],
        content_type: 'product',
        num_items: 1
    };

    if (typeof fbq !== 'undefined') {
        try {
            fbq('track', 'InitiateCheckout', eventParams, { eventID: `checkout_${paymentId}` });
            sessionStorage.setItem(dedupeKey, '1');
            return;
        } catch (e) {
            // fallback to wrapper below
        }
    }

    trackFBEvent('InitiateCheckout', eventParams);
    sessionStorage.setItem(dedupeKey, '1');
}

// --- INLINE ERROR DISPLAY ---
function showInlineError(inputId, message) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.classList.add('error');
    input.classList.remove('valid');
    // Remove existing error msg
    const existing = input.parentElement.querySelector('.input-error-msg');
    if (existing) existing.remove();
    const msg = document.createElement('p');
    msg.className = 'input-error-msg';
    msg.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    input.parentElement.insertAdjacentElement('afterend', msg);
}

function clearInlineError(inputId) {
    const input = document.getElementById(inputId);
    if (!input) return;
    input.classList.remove('error');
    const msg = input.parentElement.querySelector('.input-error-msg') ||
        input.parentElement.parentElement.querySelector('.input-error-msg');
    if (msg) msg.remove();
}

function markInputValid(inputId) {
    const input = document.getElementById(inputId);
    if (input) { input.classList.remove('error'); input.classList.add('valid'); }
    clearInlineError(inputId);
}

// --- INPUT MASK (WhatsApp auto-format) ---
function initInputMask() {
    const waInput = document.getElementById('whatsapp');
    if (!waInput) return;

    // Add hint below input
    const hint = document.createElement('p');
    hint.className = 'input-format-hint';
    hint.textContent = 'Contoh: 08123456789';
    waInput.parentElement.insertAdjacentElement('afterend', hint);

    waInput.addEventListener('input', e => {
        // Strip non-digits
        let digits = e.target.value.replace(/\D/g, '');
        e.target.value = digits;
        // Live validation hint
        if (digits.length >= 10) {
            const result = validatePhoneNumber(digits);
            if (result.isValid) {
                markInputValid('whatsapp');
                hint.style.color = '#10b981';
                hint.textContent = '✓ Nomor valid';
            } else if (digits.length >= 12) {
                showInlineError('whatsapp', result.message);
                hint.style.display = 'none';
            }
        } else {
            input.classList.remove('error', 'valid');
            hint.style.color = '';
            hint.textContent = 'Contoh: 08123456789';
            hint.style.display = '';
        }
    });
}

// --- FLASH BAR (with sessionStorage timer) ---
function initFlashBar() {
    const container = document.getElementById('flash-bar');
    if (!container) return;

    const FLASH_KEY = 'flash_expiry';
    const FLASH_DURATION = 3 * 60 * 60 * 1000; // 3 hours per session

    let expiry = parseInt(sessionStorage.getItem(FLASH_KEY) || '0');
    if (!expiry || expiry < Date.now()) {
        expiry = Date.now() + FLASH_DURATION;
        sessionStorage.setItem(FLASH_KEY, String(expiry));
    }

    const rawLabel = typeof FLASH_BAR_LABEL !== 'undefined' ? FLASH_BAR_LABEL : 'Promo Berakhir dalam';
    const label = String(rawLabel).replace(/^[^A-Za-z0-9]+/, '').trim();

    container.innerHTML = `
        <span class="flash-bar-left">
            <span class="flash-bar-pulse"></span>
            <i class="fas fa-gift flash-bar-icon" aria-hidden="true"></i>
            <span class="flash-bar-label">${label}</span>
        </span>
        <span class="flash-bar-countdown" id="flash-countdown">--:--:--</span>
    `;
    container.classList.add('active');
    document.body.classList.add('has-flash-bar');

    const tick = () => {
        const dist = expiry - Date.now();
        const el = document.getElementById('flash-countdown');
        if (!el) return;
        if (dist <= 0) { el.textContent = 'WAKTU HABIS'; clearInterval(flashInterval); return; }
        const h = Math.floor(dist / 3600000);
        const m = Math.floor((dist % 3600000) / 60000);
        const s = Math.floor((dist % 60000) / 1000);
        el.textContent = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    };
    tick();
    const flashInterval = setInterval(tick, 1000);
}
// --- PROGRESS STEPPER ---
function initProgressStepper(currentStep) {
    const container = document.getElementById('progress-stepper');
    if (!container) return;

    const steps = [
        { num: 1, label: 'Isi Data' },
        { num: 2, label: 'Pembayaran' },
        { num: 3, label: 'Konfirmasi' }
    ];

    container.innerHTML = steps.map((s, i) => {
        const state = s.num < currentStep ? 'done' : s.num === currentStep ? 'active' : '';
        const icon = s.num < currentStep ? '&#10003;' : s.num;
        const connector = i < steps.length - 1 ? `<div class="step-connector ${s.num < currentStep ? 'done' : ''}"></div>` : '';
        return `
            <div class="step-item ${state}">
                <div class="step-dot">${icon}</div>
                <span class="step-label">${s.label}</span>
            </div>
            ${connector}
        `;
    }).join('');
}

// --- LIVE VISITOR COUNTER ---
function initLiveVisitorCount() {
    const container = document.getElementById('live-visitor-badge');
    if (!container) return;

    // Stable but dynamic: base changes slowly, micro movement changes every 10s.
    const BASE_SLOT_MS = 5 * 60 * 1000;
    const TICK_MS = 10 * 1000;

    const getRangeByHour = (hour) => {
        if (typeof VISITOR_RANGE !== 'undefined' && VISITOR_RANGE?.min != null && VISITOR_RANGE?.max != null) {
            return { min: VISITOR_RANGE.min, max: VISITOR_RANGE.max };
        }

        // Realistic daily pattern:
        // 00:00-05:59 very low, 06:00-11:59 rising, 12:00-17:59 peak, 18:00-23:59 moderate.
        if (hour >= 0 && hour < 6) return { min: 5, max: 15 };
        if (hour >= 6 && hour < 12) return { min: 16, max: 42 };
        if (hour >= 12 && hour < 18) return { min: 50, max: 85 };
        return { min: 24, max: 56 };
    };

    const hashString = (str) => {
        let h = 0;
        for (let i = 0; i < str.length; i += 1) {
            h = ((h << 5) - h) + str.charCodeAt(i);
            h |= 0;
        }
        return Math.abs(h);
    };

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const getCountForNow = () => {
        const now = new Date();
        const { min, max } = getRangeByHour(now.getHours());
        const dayKey = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
        const nowMs = Date.now();
        const baseSlot = Math.floor(nowMs / BASE_SLOT_MS);
        const tickSlot = Math.floor(nowMs / TICK_MS);

        // Main baseline traffic for current 5-minute window.
        const baseSeed = `visitor:base:${dayKey}:${now.getHours()}:${baseSlot}`;
        const baseHashed = hashString(baseSeed);
        const base = min + (baseHashed % (max - min + 1));

        // Small natural fluctuation around baseline (deterministic by time).
        const spread = Math.max(2, Math.round((max - min) * 0.12)); // ~12% of range
        const phaseSeed = hashString(`visitor:phase:${dayKey}:${now.getHours()}`) % 360;
        const timeUnit = tickSlot / 6; // 1 unit = 1 minute
        const waveA = Math.sin((timeUnit + phaseSeed) * 0.9) * spread;
        const waveB = Math.sin((timeUnit + phaseSeed * 0.37) * 2.2) * (spread * 0.35);

        // Slight deterministic jitter per 10 seconds.
        const jitterSeed = `visitor:jitter:${dayKey}:${now.getHours()}:${tickSlot}`;
        const jitter = (hashString(jitterSeed) % 3) - 1; // -1, 0, +1

        const dynamic = Math.round(base + waveA + waveB + jitter);
        return clamp(dynamic, min, max);
    };

    let count = getCountForNow();

    const render = () => {
        container.innerHTML = `
            <span>
                <span class="live-dot-red"></span>
                <i class="fas fa-eye live-eye-icon" aria-hidden="true"></i>
                <strong id="visitor-count">${count}</strong> orang sedang melihat produk ini
            </span>
        `;
    };
    render();

    setInterval(() => {
        const next = getCountForNow();
        if (next === count) return;
        count = next;
        const el = document.getElementById('visitor-count');
        if (el) el.textContent = count;
    }, TICK_MS);
}

// --- TOP HEADER ORDER ---
function placeHeaderAtTop() {
    const formView = document.getElementById('view-form');
    const header = formView ? formView.querySelector('.sticky-header') : null;
    const flash = document.getElementById('flash-bar');
    const progress = document.getElementById('progress-stepper');
    const live = document.getElementById('live-visitor-badge');
    if (!formView || !header || !progress || !live) return;

    // Keep flash promo bar first, then brand header, then stepper + live badge.
    if (flash) {
        formView.insertAdjacentElement('afterbegin', flash);
    }
    header.insertAdjacentElement('afterend', progress);
    progress.insertAdjacentElement('afterend', live);
}

// --- WA FLOAT BUTTON ---
function initWAFloat() {
    const btn = document.getElementById('wa-float-btn');
    if (!btn) return;
    btn.innerHTML = '';
    btn.style.cssText = 'display:none!important;';
    return;

    const number = (typeof WA_NUMBER !== 'undefined') ? WA_NUMBER : '6285602152097';
    const productName = (typeof WA_PRODUCT_NAME !== 'undefined') ? WA_PRODUCT_NAME : 'produk';
    const msg = encodeURIComponent(`Halo, saya ingin bertanya tentang ${productName}.`);

    btn.innerHTML = `
        <a href="https://wa.me/${number}?text=${msg}" target="_blank" rel="noopener noreferrer" aria-label="Hubungi kami via WhatsApp" class="wa-float-btn" style="position:static;box-shadow:none;">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
        </a>
    `;
    // Fix: The outer div needs to not have the class, inner <a> has it
    btn.style.cssText = 'position:fixed;bottom:80px;right:16px;z-index:90;width:52px;height:52px;';
    btn.querySelector('a').style.cssText = 'width:52px;height:52px;background:#25d366;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 20px rgba(37,211,102,0.45);text-decoration:none;transition:transform .2s ease,box-shadow .2s ease;';
}

// --- EXIT INTENT POPUP ---
function initExitIntent() {
    const overlay = document.getElementById('exit-popup-overlay');
    if (!overlay) return;

    const SESSION_KEY = 'exit_popup_shown';
    if (sessionStorage.getItem(SESSION_KEY)) return; // Already shown this session

    const config = (typeof EXIT_POPUP_CONFIG !== 'undefined') ? EXIT_POPUP_CONFIG : {
        title: 'Tunggu! Jangan Pergi Dulu 👋',
        desc: 'Kamu hampir melewatkan penawaran terbaik hari ini!',
        badge: '⚡ HARGA SPESIAL',
        cta: 'Yuk, Ambil Penawarannya!'
    };

    overlay.innerHTML = `
        <div class="exit-popup-box" role="dialog" aria-modal="true" aria-labelledby="exit-popup-title">
            <button class="exit-popup-close" onclick="closeExitPopup()" aria-label="Tutup popup">✕</button>
            <div class="exit-popup-badge">${config.badge}</div>
            <h3 id="exit-popup-title" style="font-size:18px;font-weight:800;color:#111827;margin:0 0 8px;">${config.title}</h3>
            <p style="font-size:13px;color:#6b7280;margin:0 0 4px;line-height:1.5;">${config.desc}</p>
            <button class="exit-popup-cta" onclick="closeExitPopup()" aria-label="${config.cta}">${config.cta}</button>
        </div>
    `;

    let triggered = false;
    const trigger = (e) => {
        if (e.clientY <= 10 && !triggered) {
            triggered = true;
            sessionStorage.setItem(SESSION_KEY, '1');
            overlay.classList.add('active');
            document.removeEventListener('mouseleave', trigger);
        }
    };

    // Desktop: mouse leave top
    document.addEventListener('mouseleave', trigger);

    // Mobile: back button / blur after 30s
    setTimeout(() => {
        if (!triggered) {
            triggered = true;
            sessionStorage.setItem(SESSION_KEY, '1');
            overlay.classList.add('active');
        }
    }, 45000);

    overlay.addEventListener('click', e => {
        if (e.target === overlay) closeExitPopup();
    });
}

function closeExitPopup() {
    const overlay = document.getElementById('exit-popup-overlay');
    if (overlay) overlay.classList.remove('active');
}

// --- MODIFIED: startCountdown — pakai sessionStorage (persist antar reload) ---
function startCountdown() {
    const TIMER_KEY = 'payment_expiry_time';
    const TIMER_DURATION = 24 * 60 * 60 * 1000; // 24 jam

    if (typeof expiryTime === 'undefined' || !expiryTime) {
        const stored = sessionStorage.getItem(TIMER_KEY);
        if (stored && parseInt(stored) > Date.now()) {
            expiryTime = parseInt(stored);
        } else {
            expiryTime = Date.now() + TIMER_DURATION;
            sessionStorage.setItem(TIMER_KEY, String(expiryTime));
        }
    }

    if (typeof countdownInterval !== 'undefined' && countdownInterval) clearInterval(countdownInterval);
    countdownInterval = setInterval(() => {
        const now = Date.now();
        const distance = expiryTime - now;
        const countdownEl = document.getElementById('countdown');
        if (!countdownEl) return;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownEl.innerHTML = 'WAKTU HABIS';
            return;
        }

        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        countdownEl.innerHTML = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }, 1000);
}

// --- MODIFIED: initNotifications — baca TOAST_MESSAGES ---
function initNotifications() {
    // Prefer page-specific TOAST_MESSAGES, fallback to FIRST_NAMES
    const hasToastMessages = typeof TOAST_MESSAGES !== 'undefined' && TOAST_MESSAGES.length > 0;
    const hasFirstNames = typeof FIRST_NAMES !== 'undefined';
    if (!hasToastMessages && !hasFirstNames) return;

    const showNext = () => {
        const toast = document.getElementById('toast');
        if (!toast) return;

        if (hasToastMessages) {
            const item = TOAST_MESSAGES[Math.floor(Math.random() * TOAST_MESSAGES.length)];
            const nameEl = document.getElementById('toast-name') || document.getElementById('toast-title');
            const msgEl = document.getElementById('toast-message');
            if (nameEl) nameEl.innerText = item.name;
            if (msgEl) msgEl.innerText = item.msg;
        } else {
            const name = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
            const nameEl = document.getElementById('toast-name') || document.getElementById('toast-title');
            if (nameEl) nameEl.innerText = name;
        }

        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 4000);
    };

    // First show after 5s, then every 15-25s
    setTimeout(showNext, 5000);
    setInterval(showNext, 15000 + Math.random() * 10000);
}

// --- MODIFIED: renderTestimonials — supports avatar photo + verified badge ---
function renderTestimonials() {
    const container = document.getElementById('testimonial-container');
    if (!container) return;

    // Show skeleton while loading
    container.innerHTML = `
        <div class="testimonial-skeleton-track">
            ${Array(4).fill('<div class="testimonial-skeleton-item"></div>').join('')}
        </div>
    `;

    // Small delay for perceived performance
    requestAnimationFrame(() => {
        if (typeof testimonialImages !== 'undefined') {
            // Kurmer style — image only
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
            // Standard style with avatar/verified support
            const data = [...testimonialData, ...testimonialData];
            container.innerHTML = `
                <div class="testimonial-track">
                    ${data.map(item => {
                const avatarHtml = item.avatar
                    ? `<img src="${item.avatar}" alt="${item.name}" class="t-avatar-img" loading="lazy">`
                    : `<div class="t-avatar">${item.name.charAt(0)}</div>`;
                const verifiedBadge = item.verified
                    ? `<span class="t-verified-badge">✓ Verified</span>`
                    : '';
                return `
                            <div class="testimonial-item">
                                <div class="t-header">
                                    ${avatarHtml}
                                    <div class="t-info">
                                        <h4>${item.name}</h4>
                                        <div class="t-stars">
                                            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                                        </div>
                                        ${verifiedBadge}
                                    </div>
                                </div>
                                <p class="t-text">"${item.text}"</p>
                                ${item.img ? `<img src="${item.img}" class="t-review-img" onclick="openImageModal('${item.img}')" alt="Bukti Review" loading="lazy">` : ''}
                            </div>
                        `;
            }).join('')}
                </div>
            `;
        }
    });
}

// --- MODIFIED: onPaymentSuccess — tambah FB Purchase tracking ---
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

    // FB Purchase event: only once per verified payment ID
    if (typeof currentOrderDetails !== 'undefined') {
        trackFBPurchaseVerified(currentOrderDetails);
    }

    const modal = document.getElementById('ocrSuccessModal');
    if (modal) modal.classList.add('active');

    sendPaymentConfirmationToBackend();
}



