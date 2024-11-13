function filterAlumni() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const alumniProfiles = document.getElementsByClassName('alumni-profile');

    for (let i = 0; i < alumniProfiles.length; i++) {
        const name = alumniProfiles[i].getAttribute('data-nama').toLowerCase();
        const jurusan = alumniProfiles[i].getAttribute('data-jurusan').toLowerCase();
        
        if (name.includes(filter) || jurusan.includes(filter)) {
            alumniProfiles[i].style.display = ""; 
        } else {
            alumniProfiles[i].style.display = "none"; 
        }
    }
}