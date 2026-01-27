# Static Site Refactor

This project has been refactored from single-file HTMLs into a structured static site.

## Structure

*   `/adobe/`, `/gdrive/`, etc.: Contains the `index.html` for each product page.
*   `/assets/`: Shared resources.
    *   `css/`:
        *   `shared.css`: Common styles across all pages.
        *   `page-*.css`: Page-specific variables (colors) and overrides.
        *   `tailwind-built.min.css`: Compiled Tailwind CSS (no CDN runtime).
    *   `js/`:
        *   `shared.js`: Common logic (validation, UI utils, payment rendering, OCR).
        *   `page-*.js`: Page-specific data (prices, testimonials) and logic.
        *   `vendor-loader.js`: Lazy loader for heavy libraries (QRCode, Tesseract).

## Build Instructions

To rebuild the CSS (Tailwind):

1.  Install dependencies:
    ```bash
    npm install
    ```

2.  Build CSS:
    ```bash
    npm run build
    ```

    For development (watch mode):
    ```bash
    npm run dev
    ```

## Deployment

### GitHub Pages / Cloudflare Pages

1.  **Source:** Set the root of the repository as the source.
2.  **Build Command:** `npm run build` (optional, if you commit the built CSS).
3.  **Output Directory:** `/` (root).

The pages will be accessible at:
*   `yourdomain.com/adobe/`
*   `yourdomain.com/nfxid/`
*   etc.

## Performance Optimizations

*   **Tailwind:** CDN removed. CSS is now pre-built and minified.
*   **Lazy Loading:** `qrcode.min.js` and `tesseract.min.js` are only loaded when needed (when user clicks "QRIS" or uploads a payment proof).
*   **CLS:** Image dimensions are preserved or handled via CSS to prevent layout shifts.
*   **Caching:** Assets are separate files, allowing better browser caching.
