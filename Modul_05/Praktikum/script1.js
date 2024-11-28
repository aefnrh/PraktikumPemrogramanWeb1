$(document).ready(function() {
    //1.Dasar Selektor
    $('#header').css('text-align', 'center'); //Mengubah align text pada header
    $('li').css('margin', '5px'); //Mengubah margin pada semua <li>

    //2. Selektor Atribut
    $('img[alt="Alumni Photo1"]').css('border', '2px solid red'); //Mengubah border pada img dengan alt="Alumni Photo1"

    //3. Selektor Hirarki
    $('#alumniList li').css('font-size', '18px'); //Mengubah font size pada semua element <li> di dalam #alumniList

    //4. Selektor Filter
    $('li:even').css('color', 'blue'); //Mengubah warna text pada element <li> genap
    $('.featured').addClass('highlight'); //Menambahkan class highlight pada element dengan class featured

    //Event Handling untuk Galeri Foto
    $('.gallery img').on('click', function() {
        var src = $(this).attr('src');
        $('#modalImage').attr('src', src);
        $('#MyModal').fadeIn();
    });

    $('#modal .close').on('click', function() {
        $('#MyModal').fadeOut();
    });

    $(window).on('click', function(event) {
        if ($(event.target).is('#MyModal')) {
            $('#MyModal').fadeOut();
        }
    });
});