// script.js
$(document).ready(function () {
    // 1. Fade-in efek saat halaman dimuat
    $('.gallery img').each(function (index) {
      $(this).delay(200 * index).animate({ opacity: 1 }, 500);
    });
  
    // 2. Modal untuk menampilkan gambar dalam ukuran penuh
    $('.gallery img').on('click', function () {
      const src = $(this).attr('src');
      $('.modal-image').attr('src', src);
      $('.modal').fadeIn();
    });
  
    // 3. Menutup modal
    $('.close-btn, .modal').on('click', function (e) {
      if (e.target !== this) return; // Mencegah modal tertutup jika area gambar di-klik
      $('.modal').fadeOut();
    });
  });