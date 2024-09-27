document.addEventListener('DOMContentLoaded', function() {
    fetchNamazTimes();

    // API'den namaz vakitlerini çek
    function fetchNamazTimes() {
        // Gerçek bir API kullanarak namaz vakitlerini çekebilirsin.
        // Burada örnek bir JSON simülasyonu yapıyoruz.

        const namazVakitleri = {
            imsak: "05:00",
            gunes: "06:20",
            ogle: "12:30",
            ikindi: "15:45",
            aksam: "18:20",
            yatsi: "19:40"
        };

        // Verileri HTML elementlerine yerleştir
        document.getElementById('imsak').textContent = namazVakitleri.imsak;
        document.getElementById('gunes').textContent = namazVakitleri.gunes;
        document.getElementById('ogle').textContent = namazVakitleri.ogle;
        document.getElementById('ikindi').textContent = namazVakitleri.ikindi;
        document.getElementById('aksam').textContent = namazVakitleri.aksam;
        document.getElementById('yatsi').textContent = namazVakitleri.yatsi;
    }

    // Verileri her gün güncellemek için zamanı ayarlayabilirsin (örn. günde bir defa API'den veri çekmek).
});
