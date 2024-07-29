// Tambahkan interaksi JavaScript jika diperlukan
document.addEventListener('DOMContentLoaded', function() {
    // Contoh: Menangani klik pada tombol 'Cari'
    document.querySelector('.search-bar button').addEventListener('click', function() {
        alert('Fungsi pencarian belum diimplementasikan.');
    });

    // Contoh: Menangani klik pada tombol 'Tambah ke Keranjang'
    document.querySelectorAll('.product button').forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Produk telah ditambahkan ke keranjang.');
        });
    });
});
