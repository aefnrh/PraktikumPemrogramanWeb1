$(document).ready(function() {
    // Muat data alumni
    function loadAlumni() {
        $.get("process.php", function(data) {
            const alumni = JSON.parse(data);
            const rows = alumni.map(alumnus => `
                <tr>
                    <td>${alumnus.name}</td>
                    <td>${alumnus.graduation_year}</td>
                    <td>${alumnus.email}</td>
                    <td>${alumnus.job_status}</td>
                </tr>
            `);
            $("#alumniTable tbody").html(rows.join(""));
        });
    }

    loadAlumni();

    // Tangani submit form
    $("#alumniForm").submit(function(e) {
        e.preventDefault();
        const formData = $(this).serialize();
        $.post("process.php", formData, function(response) {
            alert(response);
            loadAlumni();
        });
        $(this).trigger("reset");
    });
});
