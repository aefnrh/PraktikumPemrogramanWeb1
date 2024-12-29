<?php
include 'Latihan_09_config.php'; // Koneksi database

// Proses form jika ada data yang dikirim
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $pesan = $_POST['pesan'];

    // Validasi input
    if (!empty($nama) && !empty($pesan)) {
        $sql = "INSERT INTO bukutamu (nama, email, pesan) VALUES ('$nama', '$email', '$pesan')";
        if ($conn->query($sql) === TRUE) {
            echo "<div class='alert alert-success'>Pesan berhasil disimpan.</div>";
        } else {
            echo "<div class='alert alert-danger'>Error: " . $conn->error . "</div>";
        }
    } else {
        echo "<div class='alert alert-danger'>Nama dan Pesan wajib diisi.</div>";
    }
}
?>

<div class="container mt-5">
    <h2>Buku Tamu</h2>
    <form method="POST" action="">
        <div class="mb-3">
            <label for="nama" class="form-label">Nama:</label>
            <input type="text" class="form-control" id="nama" name="nama" required>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email (opsional):</label>
            <input type="email" class="form-control" id="email" name="email">
        </div>
        <div class="mb-3">
            <label for="pesan" class="form-label">Pesan:</label>
            <textarea class="form-control" id="pesan" name="pesan" rows="4" required></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Kirim</button>
    </form>

    <hr>

    <h3>Daftar Buku Tamu</h3>
    <?php
    // Menampilkan daftar buku tamu
    $sql = "SELECT * FROM bukutamu ORDER BY tanggal DESC";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        echo "<ul class='list-group'>";
        while ($row = $result->fetch_assoc()) {
            echo "<li class='list-group-item'>
                    <strong>" . htmlspecialchars($row['nama']) . "</strong> (" . htmlspecialchars($row['email']) . ")<br>
                    <small>" . $row['tanggal'] . "</small><br>
                    " . nl2br(htmlspecialchars($row['pesan'])) . "
                  </li>";
        }
        echo "</ul>";
    } else {
        echo "<p class='alert alert-warning'>Belum ada pesan.</p>";
    }

    $conn->close();
    ?>
</div>
