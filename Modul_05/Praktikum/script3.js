$(document).ready(function() {
  // Event Mouse: Click dan Hover
  $('#contactButton').on('click', function() {
    alert('Anda akan menghubungi alumni!');
  });

  $('#hoverProfile').hover(
    function() { // mouseenter
      $(this).addClass('hover-effect');
    },
    function() { // mouseleave
      $(this).removeClass('hover-effect');
    }
  );

  // Event Keyboard: Keydown
  $('#searchAlumni').on('keydown', function(event) {
    $('#output').text('Anda mengetik: ' + event.key);
  });

  // Event Form: Submit
  $('#alumniForm').on('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form
    const name = $('#name').val();
    const year = $('#year').val();
    const photo = $('#photo')[0].files[0];

    if (name && year && photo) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const newRow = `
          <tr>
            <td class="name">${name}</td>
            <td class="year">${year}</td>
            <td><img src="${e.target.result}" alt="Photo ${name}" class="alumni-photo"></td>
            <td class="action-buttons">
              <button class="delete">Hapus</button>
            </td>
          </tr>
        `;
        $('#alumniTable tbody').append(newRow);

        // Bersihkan form
        $('#name').val('');
        $('#year').val('');
        $('#photo').val('');
        alert('Data alumni ditambahkan!\nNama: ' + name + '\nTahun: ' + year);
      };
      reader.readAsDataURL(photo);
    } else {
      alert('Harap isi semua kolom!');
    }
  });

  // Event Dokumen/Window: Resize
  $(window).on('resize', function() {
    const width = $(window).width();
    const height = $(window).height();
    $('#windowSize').text('Ukuran jendela: ' + width + ' x ' + height);
  });

  // Event Miscellaneous: Ready
  $(document).ready(function() {
    $('#output').text('Dokumen siap! Semua event siap digunakan.');
  });

  // Event Kustom: Trigger custom event
  $('#contactButton').on('click', function() {
    $('#output').trigger('customEvent', ['Kontak alumni diklik!']);
  });

  $('#output').on('customEvent', function(event, message) {
    $(this).append('<p>Event kustom dipicu: ' + message + '</p>');
  });

  // Animasi Foto: Fokus, Hilang Fokus, Digeser, Klik, Klik Dua Kali
  $('#alumniTable').on('mouseenter', 'img', function() {
    $(this).addClass('foto-effect');
  }).on('mouseleave', 'img', function() {
    $(this).removeClass('foto-effect');
  }).on('mousedown', 'img', function() {
    $(this).addClass('foto-click');
  }).on('mouseup', 'img', function() {
    $(this).removeClass('foto-click');
  }).on('dblclick', 'img', function() {
    $(this).addClass('foto-dblclick');
    setTimeout(() => {
      $(this).removeClass('foto-dblclick');
    }, 500);
  });

  // Event Select, Mouseup, Mousemove, Resize pada gambar
  $('#alumniTable').on('selectstart', 'img', function() {
    $('#output').text('Gambar sedang dipilih...');
  }).on('mouseup', 'img', function() {
    $('#output').text('Mouse button dilepaskan pada gambar.');
  }).on('mousemove', 'img', function(event) {
    const offsetX = event.offsetX;
    const offsetY = event.offsetY;
    $('#output').text('Gerakkan mouse: X=' + offsetX + ', Y=' + offsetY);
  }).on('resize', function() {
    $('#windowSize').text('Ukuran jendela: ' + $(window).width() + ' x ' + $(window).height());
  });

  // Hapus Alumni
  $('#alumniTable').on('click', '.delete', function() {
    $(this).closest('tr').remove();
  });
});