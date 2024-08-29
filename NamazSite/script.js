document.addEventListener('DOMContentLoaded', () => {
    const vakitlerDiv = document.getElementById('vakitler');
    const kalanSureDiv = document.getElementById('kalanSure');
    const kalanSureButton = document.getElementById('kalanSureButton');

    // Namaz vakitlerini API'den çekme
    fetch('https://ezanvakti.herokuapp.com/vakitler?ilce=9516')  // İstanbul kodu örnektir, değiştirilebilir
        .then(response => response.json())
        .then(data => {
            displayVakitler(data);
        })
        .catch(error => console.error('Hata:', error));

    // Namaz vakitlerini ekrana yazdırma
    function displayVakitler(vakitler) {
        vakitlerDiv.innerHTML = '';
        vakitler.forEach(vakit => {
            vakitlerDiv.innerHTML += `
                <div class="vakit-item">
                    <strong>${vakit.Vakit}:</strong> ${vakit.Saat}
                </div>
            `;
        });
    }

    // Butona tıklayınca bir sonraki namaza kalan süreyi hesaplama
    kalanSureButton.addEventListener('click', () => {
        fetch('https://ezanvakti.herokuapp.com/vakitler?ilce=9516')  // API'den tekrar veri çekme
            .then(response => response.json())
            .then(data => {
                const kalanSure = calculateKalanSure(data);
                kalanSureDiv.textContent = kalanSure;
            })
            .catch(error => console.error('Hata:', error));
    });

    // Bir sonraki namaza kalan süreyi hesaplama
    function calculateKalanSure(vakitler) {
        const now = new Date();
        for (let i = 0; i < vakitler.length; i++) {
            const [hour, minute] = vakitler[i].Saat.split(':');
            const vakitTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute);
            if (vakitTime > now) {
                const diff = vakitTime - now;
                const diffMinutes = Math.floor((diff / 1000 / 60) % 60);
                const diffHours = Math.floor((diff / 1000 / 60 / 60) % 24);
                return `${vakitler[i].Vakit} vaktine ${diffHours} saat, ${diffMinutes} dakika kaldı.`;
            }
        }
        return 'Bugün başka namaz vakti yok.';
    }
});
