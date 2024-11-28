$(document).ready(function() {
    //Menambahkan baris baru ke table
    $('#addRow').on('click', function() {
        const newRow = `
            <tr>
                <td>No</td>
                <td>Nama Baru</td>
                <td>email@baru.com</td>
                <td><button class="edit">Edit</button><button class="delete">Hapus</button></td>
            </tr>
        `;
        $('#alumniTable tbody').append(newRow);
    });

    //Mengedit baris yang ada
    $('#alumniTable').on('click', '.edit', function() {
        const row = $(this).closest('tr');
        const no = row.find('td').eq(0).text();
        const nama = row.find('td').eq(1).text();
        const email = row.find('td').eq(2).text();

        //Tampilkan prompt untuk mengedit
        const newNomor = prompt('Edit Nomor:', no);
        const newNama = prompt('Edit Nama:', nama);
        const newEmail = prompt('Edit Email:', email);

        if (newNomor !== null && newNama !== null && newEmail !== null) {
            row.find('td').eq(0).text(newNomor);
            row.find('td').eq(1).text(newNama);
            row.find('td').eq(2).text(newEmail);
        }
    });

    //Menghapus baris dari table
    $('#alumniTable').on('click', '.delete', function() {
        if (confirm('Apakah Anda yakin ingin menghapus baris ini?')) {
            $(this).closest('tr').remove();
        }
    });
});