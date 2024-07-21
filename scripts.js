document.getElementById('explodeButton').addEventListener('click', function() {
    const container = document.querySelector('.container');
    for (let i = 0; i < 5; i++) {  // 5 adet roket oluşturuyoruz
        const rocket = document.createElement('div');
        rocket.classList.add('rocket');
        rocket.style.left = `${Math.random() * (window.innerWidth - 50)}px`;  // Rocket genişliğini hesaba katıyoruz
        rocket.style.top = `${Math.random() * (window.innerHeight - 100)}px`;  // Rocket yüksekliğini hesaba katıyoruz
        container.appendChild(rocket);
        setTimeout(() => {
            rocket.remove();
        }, 1000);
    }
});
