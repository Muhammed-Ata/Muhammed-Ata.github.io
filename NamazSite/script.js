function fetchNamazTimes() {
    fetch('https://api.diyanet.gov.tr/namazvakti/api/times?city=iskenderun')
        .then(response => response.json())
        .then(data => {
            document.getElementById('imsak').textContent = data.imsak;
            document.getElementById('gunes').textContent = data.gunes;
            document.getElementById('ogle').textContent = data.ogle;
            document.getElementById('ikindi').textContent = data.ikindi;
            document.getElementById('aksam').textContent = data.aksam;
            document.getElementById('yatsi').textContent = data.yatsi;
        })
        .catch(error => console.error('API Hatası:', error));
}
