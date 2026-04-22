// ============================================================
// firebase.js — Shared Firebase module (Buffer Architecture)
// Digunakan oleh semua halaman web sebagai pengganti fetch() langsung ke Apps Script.
// Apps Script akan menjemput data ini setiap 1 menit via Time-driven Trigger.
//
// OPTIMASI KONEKSI:
// Firebase SDK diset goOffline() saat inisialisasi agar tidak membuka
// koneksi WebSocket secara otomatis. Koneksi hanya dibuka sesaat saat
// user mengirim data (pushOrder/pushConfirmation), lalu langsung ditutup.
// Hasilnya: simultaneous connections mendekati 0 saat tidak ada aktivitas.
// ============================================================

(function () {
    const firebaseConfig = {
        apiKey: "AIzaSyAEkpOJwzD_uOAjc2pXchQFXfCr-gCMyR4",
        authDomain: "prowebs-ce2ee.firebaseapp.com",
        databaseURL: "https://prowebs-ce2ee-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "prowebs-ce2ee",
        storageBucket: "prowebs-ce2ee.firebasestorage.app",
        messagingSenderId: "1074072752701",
        appId: "1:1074072752701:web:cbf3ade85bb1a9de079054"
    };

    // Initialize Firebase (compat SDK, tersedia secara global dari CDN)
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.database();

    // ⚡ Matikan koneksi WebSocket otomatis sejak awal.
    db.goOffline();

    /**
     * Menyimpan data pesanan baru ke antrian /orders di Firebase.
     * Koneksi dibuka sesaat, data dikirim, lalu koneksi ditutup kembali.
     * @param {Object} dataToSend - Objek data pesanan dari form
     * @returns {Promise<void>}
     */
    window.pushOrder = function (dataToSend) {
        const ordersRef = db.ref('orders');
        const payload = Object.assign({}, dataToSend, {
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });

        return new Promise((resolve, reject) => {
            db.goOnline();
            console.log('[Firebase] Membuka koneksi untuk pushOrder...');

            // Beri waktu 300ms agar koneksi WebSocket terbentuk sebelum push
            setTimeout(() => {
                ordersRef.push(payload)
                    .then(() => {
                        console.log('[Firebase] Pesanan berhasil diantrekan.');
                        resolve();
                    })
                    .catch(err => {
                        console.error('[Firebase] Gagal mengantrekan pesanan:', err);
                        reject(err);
                    })
                    .finally(() => {
                        db.goOffline();
                        console.log('[Firebase] Koneksi ditutup setelah pushOrder.');
                    });
            }, 300);
        });
    };

    /**
     * Menyimpan data konfirmasi pembayaran ke antrian /confirmations di Firebase.
     * Koneksi dibuka sesaat, data dikirim, lalu koneksi ditutup kembali.
     * @param {Object} payload - Objek konfirmasi { action, idPembayaran, sheetName }
     * @returns {Promise<void>}
     */
    window.pushConfirmation = function (payload) {
        const confirmRef = db.ref('confirmations');
        const data = Object.assign({}, payload, {
            timestamp: firebase.database.ServerValue.TIMESTAMP
        });

        return new Promise((resolve, reject) => {
            db.goOnline();
            console.log('[Firebase] Membuka koneksi untuk pushConfirmation...');

            // Beri waktu 300ms agar koneksi WebSocket terbentuk sebelum push
            setTimeout(() => {
                confirmRef.push(data)
                    .then(() => {
                        console.log('[Firebase] Konfirmasi berhasil diantrekan.');
                        resolve();
                    })
                    .catch(err => {
                        console.error('[Firebase] Gagal mengantrekan konfirmasi:', err);
                        reject(err);
                    })
                    .finally(() => {
                        db.goOffline();
                        console.log('[Firebase] Koneksi ditutup setelah pushConfirmation.');
                    });
            }, 300);
        });
    };

})();
