<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tracer Alumni</title>
    <link rel="stylesheet" href="css/styles.css">
    <script src="https:
    <script src="js/scripts.js"></script>
</head>
<body>
    <div class="container">
        <h1>Tracer Alumni</h1>
        <form id="alumniForm">
            <input type="text" name="name" placeholder="Nama Lengkap" required>
            <input type="number" name="graduation_year" placeholder="Tahun Lulus" required>
            <input type="email" name="email" placeholder="Email" required>
            <select name="job_status" required>
                <option value="">Status Pekerjaan</option>
                <option value="Bekerja">Bekerja</option>
                <option value="Belum Bekerja">Belum Bekerja</option>
            </select>
            <button type="submit">Simpan</button>
        </form>
        <h2>Data Alumni</h2>
        <table id="alumniTable">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Tahun Lulus</th>
                    <th>Email</th>
                    <th>Status Pekerjaan</th>
                </tr>
            </thead>
            <tbody>
                <!-- Data alumni akan dimuat di sini -->
            </tbody>
        </table>
    </div>
</body>
</html>
