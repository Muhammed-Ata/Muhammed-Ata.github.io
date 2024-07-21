document.getElementById('launchButton').addEventListener('click', function() {
    const rocket = document.getElementById('rocket');
    
    // Rastgele bir yükseklik hesapla (1 ile 10 arasında)
    const randomHeight = Math.floor(Math.random() * 10) + 1;
    
    // Animasyon sınıfını ekle
    rocket.classList.add('launch');
    
    // Animasyon süresi kadar sonra sınıfı kaldır
    setTimeout(() => {
        rocket.classList.remove('launch');
    }, 1000); // Bu süre CSS animasyon süresi ile aynı olmalı
});
