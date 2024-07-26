document.addEventListener("DOMContentLoaded", function () {
    const vakitler = ["İmsak", "Sabah", "Öğle", "İkindi", "Akşam", "Yatsı"];
    const vakitlerElement = document.getElementById("vakitler");
    const updateButton = document.getElementById("updateButton");
    const remainingTimeElement = document.getElementById("remainingTime");
    
    const API_URL = 'https://vakit.vercel.app/api/timesFromCoordinates?lat=36.58718&lng=36.17347&date=2024-7-22&days=3&timezoneOffset=180&calculationMethod=Turkey';
    
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const times = data.items[0].times;
            vakitler.forEach((vakit, index) => {
                document.getElementById(index.toString()).querySelector(".time").innerText = times[vakit.toLowerCase()];
            });
        })
        .catch(error => console.error("Error fetching data:", error));
    
    updateButton.addEventListener("click", function () {
        const now = new Date();
        let nextTime, nextVakit;

        vakitler.forEach((vakit, index) => {
            const timeString = document.getElementById(index.toString()).querySelector(".time").innerText;
            const vakitTime = new Date(`${now.toISOString().split("T")[0]}T${timeString}:00+03:00`);

            if (vakitTime > now && !nextTime) {
                nextTime = vakitTime;
                nextVakit = vakit;
            }
        });

        if (nextTime) {
            const remainingTime = Math.floor((nextTime - now) / 1000);
            const hours = Math.floor(remainingTime / 3600);
            const minutes = Math.floor((remainingTime % 3600) / 60);
            const seconds = remainingTime % 60;
            remainingTimeElement.innerText = `${nextVakit} namazına kalan süre: ${hours} saat, ${minutes} dakika, ${seconds} saniye`;
        } else {
            remainingTimeElement.innerText = "Günlük tüm namaz vakitleri geçti.";
        }
    });
});
