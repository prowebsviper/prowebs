// Transform script: Restructure product HTML files into 3-step flow
const fs = require('fs');
const path = require('path');

const products = ['gdrive', 'icloud', 'kurmer', 'ms365', 'nfxid'];

// Color themes per product
const themes = {
    gdrive: { badge: 'bg-blue-50 text-blue-600', primary: '#1a73e8', shadow: 'shadow-blue-200' },
    icloud: { badge: 'bg-blue-50 text-blue-600', primary: '#007AFF', shadow: 'shadow-blue-200' },
    kurmer: { badge: 'bg-purple-50 text-purple-600', primary: '#7c3aed', shadow: 'shadow-purple-200' },
    ms365: { badge: 'bg-blue-50 text-blue-600', primary: '#0078d4', shadow: 'shadow-blue-200' },
    nfxid: { badge: 'bg-red-50 text-red-600', primary: '#E50914', shadow: 'shadow-red-200' },
};

products.forEach(product => {
    const filePath = path.join(__dirname, product, 'index.html');
    let html = fs.readFileSync(filePath, 'utf-8');

    // 1. Replace "Main Form View" comment + view-form div with view-product
    html = html.replace(
        /<!-- Main Form View -->\s*\n(\s*)<div id="view-form">/,
        `<!-- ===== STEP 1: Product Info ===== -->\n$1<div id="view-product">`
    );

    // 2. Add step indicator after the sticky header's closing div (right before <div class="p-6 pb-24">)
    html = html.replace(
        /(<\/div>\s*\n\s*<div class="p-6 pb-24">)/,
        `</div>\n\n            <!-- Step Indicator -->\n            <div class="step-indicator">\n                <div class="step-dot step-active">1</div>\n                <div class="step-line"></div>\n                <div class="step-dot">2</div>\n                <div class="step-line"></div>\n                <div class="step-dot">3</div>\n            </div>\n\n            <div class="p-6 pb-24">`
    );

    // 3. Replace CTA button onclick from focusing on 'nama' to goToStep(2)
    html = html.replace(
        /onclick="document\.getElementById\('nama'\)\.focus\(\)"/g,
        `onclick="goToStep(2)"`
    );

    // 4. Move testimonials section before the form closure  
    // The key structural change: We need to:
    // a) Close view-product after testimonials + FAQ + trust badges
    // b) Open view-form (hidden) with step 2 header for user data + payment

    // Find the testimonial + user data boundary and transform
    // Replace <!-- Testimonials --> block that's inside the <form>
    // Then split: testimonials go to Step 1, user data goes to Step 2

    // Let's find & replace the form section
    // Pattern: <form id="orderForm"> ... <!-- Package Selection --> ...Testimonials... User Data... Payment... </form>
    // Target: Remove <form> wrapper from around Package and Testimonials, keep them in Step 1

    // Remove <form id="orderForm" class="space-y-6"> wrapper
    html = html.replace(
        /<!-- Form -->\s*\n\s*<form id="orderForm" class="space-y-6">\s*\n\s*<!-- Package Selection -->/,
        `<!-- Package Selection -->`
    );

    // Remove the closing </form> before FAQ section (or find another approach)
    // Actually, let's do multiple targeted replacements

    // Find the testimonials section end and the User Data section start
    // Insert the split point there

    // After testimonials: close view-product, add sticky bar, open view-form with step 2
    // Before User Data: wrap in the new form

    // Let's try a more targeted regex approach
    // Find: </div>\n\n                    <!-- User Data -->
    // Replace with the split HTML

    const productName = {
        gdrive: 'Google Drive',
        icloud: 'iCloud+',
        kurmer: 'Kurmer',
        ms365: 'Microsoft 365',
        nfxid: 'Netflix'
    }[product];

    const badgeColor = {
        gdrive: 'bg-blue-50 text-blue-600',
        icloud: 'bg-blue-50 text-blue-600',
        kurmer: 'bg-purple-50 text-purple-600',
        ms365: 'bg-blue-50 text-blue-600',
        nfxid: 'bg-red-50 text-red-600'
    }[product];

    const priceColor = {
        gdrive: 'text-blue-600',
        icloud: 'text-blue-600',
        kurmer: 'text-purple-600',
        ms365: 'text-blue-600',
        nfxid: 'text-red-600'
    }[product];

    const defaultPrice = {
        gdrive: 'Rp 250.xxx',
        icloud: 'Rp 100.xxx',
        kurmer: 'Rp 30.xxx',
        ms365: 'Rp 150.xxx',
        nfxid: 'Rp 50.xxx'
    }[product] || 'Rp xxx.xxx';

    // Split: After testimonials carousel div, insert the split
    // Find the spot between testimonials and User Data
    const splitRegex = /(<!-- Filled by JS -->\s*\n\s*<\/div>\s*\n\s*<\/div>)\s*\n\s*(<!-- User Data -->)/;

    const splitReplacement = `$1

                <!-- FAQ Section -->
                <div class="mt-8 animate-fade-in" style="animation-delay: 0.3s">
                    <h3 class="font-bold text-gray-900 mb-4">Pertanyaan Umum (FAQ)</h3>
                    <div id="faq-container">
                        <!-- Filled by JS -->
                    </div>
                </div>

                <!-- Trust Badges -->
                <div class="mt-8 flex justify-center gap-3">
                    <span class="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold uppercase tracking-wide">
                        <i class="fas fa-qrcode mr-1.5"></i>QRIS
                    </span>
                    <span class="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold uppercase tracking-wide">
                        <i class="fas fa-university mr-1.5"></i>Bank
                    </span>
                    <span class="px-4 py-2 bg-gray-100 text-gray-500 rounded-lg text-xs font-semibold uppercase tracking-wide">
                        <i class="fas fa-wallet mr-1.5"></i>E-Wallet
                    </span>
                </div>

                <p class="text-center text-xs text-gray-400 mt-8">&copy; 2026 ${productName}. All Rights Reserved.</p>
            </div>

            <!-- Sticky Bottom Bar - Step 1 -->
            <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-40 sm:absolute sm:rounded-b-3xl">
                <div class="max-w-[520px] mx-auto flex items-center justify-between gap-4">
                    <div>
                        <p class="text-xs text-gray-500">Total Pembayaran</p>
                        <p class="text-xl font-bold ${priceColor}" id="total-price-display">${defaultPrice}</p>
                    </div>
                    <button type="button" class="btn-checkout flex-1" onclick="goToStep(2)">
                        Lanjutkan <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- ===== STEP 2: Data Entry & Payment Selection ===== -->
        <div id="view-form" class="hidden">
            <!-- Header -->
            <div class="sticky-header px-6 py-4 flex items-center justify-between">
                <div class="flex items-center gap-2">
                    <button type="button" onclick="goToStep(1)" class="text-gray-500 hover:text-black mr-1">
                        <i class="fas fa-arrow-left text-lg"></i>
                    </button>
                    <div>
                        <h1 class="font-bold text-lg leading-none">Data Pemesanan</h1>
                        <p class="text-xs text-gray-500 font-medium">Lengkapi data diri Anda</p>
                    </div>
                </div>
                <div class="${badgeColor} px-3 py-1 rounded-full text-xs font-semibold">
                    <i class="fas fa-check-circle mr-1"></i> Verified
                </div>
            </div>

            <!-- Step Indicator -->
            <div class="step-indicator">
                <div class="step-dot step-completed">&#10003;</div>
                <div class="step-line"></div>
                <div class="step-dot step-active">2</div>
                <div class="step-line"></div>
                <div class="step-dot">3</div>
            </div>

            <div class="p-6 pb-24">
                <form id="orderForm" class="space-y-6">
                    $2`;

    html = html.replace(splitRegex, splitReplacement);

    // Now remove the old FAQ section (it's been duplicated into Step 1)
    html = html.replace(
        /\n\s*<\/form>\s*\n\s*<!-- FAQ Section -->[\s\S]*?<\/div>\s*\n\s*<!-- Trust Badges -->[\s\S]*?<\/div>\s*\n\s*<p class="text-center text-xs text-gray-400 mt-8">[^<]*<\/p>/,
        '\n                </form>'
    );

    // Replace the old sticky bottom bar with Step 2 version
    html = html.replace(
        /<!-- Sticky Bottom Bar -->\s*\n(\s*)<div\s*\n\s*class="fixed bottom-0[^"]*">\s*\n\s*<div class="max-w-\[520px\][^"]*">\s*\n\s*<div>\s*\n\s*<p class="text-xs text-gray-500">Total Pembayaran<\/p>\s*\n\s*<p class="text-xl font-bold[^"]*" id="total-price-display">[^<]*<\/p>\s*\n\s*<\/div>\s*\n\s*<button[^>]*>[\s\S]*?<\/button>\s*\n\s*<\/div>\s*\n\s*<\/div>/,
        `<!-- Sticky Bottom Bar - Step 2 -->
            <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-40 sm:absolute sm:rounded-b-3xl">
                <div class="max-w-[520px] mx-auto flex items-center justify-between gap-4">
                    <div>
                        <p class="text-xs text-gray-500">Total Pembayaran</p>
                        <p class="text-xl font-bold ${priceColor}" id="total-price-display-2">${defaultPrice}</p>
                    </div>
                    <button type="button" id="submit-btn" class="btn-checkout flex-1" onclick="handleFormSubmit()">
                        Beli Sekarang <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>`
    );

    // Replace payment view backToForm() with goToStep(2)
    html = html.replace(
        /onclick="backToForm\(\)"/g,
        `onclick="goToStep(2)"`
    );

    // Replace <!-- Payment Instruction View --> with Step 3 and add step indicator
    html = html.replace(
        /<!-- Payment Instruction View \(Hidden by default\) -->/,
        `<!-- ===== STEP 3: Payment Instructions ===== -->`
    );

    // Add step indicator to payment view (after the header)
    html = html.replace(
        /(<h2 class="font-bold text-lg">Instruksi Pembayaran<\/h2>\s*\n\s*<\/div>)\s*\n\s*(<div class="p-6 pb-24">)/,
        `$1\n\n            <!-- Step Indicator -->\n            <div class="step-indicator">\n                <div class="step-dot step-completed">&#10003;</div>\n                <div class="step-line"></div>\n                <div class="step-dot step-completed">&#10003;</div>\n                <div class="step-line"></div>\n                <div class="step-dot step-active">3</div>\n            </div>\n\n            $2`
    );

    // Dedup: remove duplicate "<!-- Testimonials -->" comment if present
    html = html.replace(/<!-- Testimonials -->\s*\n\s*<!-- Testimonials -->/g, '<!-- Testimonials -->');

    // Add mt-6 class to testimonials div wrapper:
    html = html.replace(
        /<div class="animate-fade-in" style="animation-delay: 0\.18s">/,
        `<div class="animate-fade-in mt-6" style="animation-delay: 0.18s">`
    );

    fs.writeFileSync(filePath, html, 'utf-8');
    console.log(`✅ Transformed ${product}/index.html`);
});

console.log('\nDone!');
