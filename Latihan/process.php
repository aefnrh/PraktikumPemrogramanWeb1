<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $graduation_year = $_POST['graduation_year'];
    $email = $_POST['email'];
    $job_status = $_POST['job_status'];

    $stmt = $conn->prepare("INSERT INTO alumni (name, graduation_year, email, job_status) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("siss", $name, $graduation_year, $email, $job_status);

    if ($stmt->execute()) {
        echo "Data berhasil disimpan!";
    } else {
        echo "Gagal menyimpan data.";
    }
    $stmt->close();
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM alumni");
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
}
?>
