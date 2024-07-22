const prayerNames = ["İmsak", "Sabah", "Öğle", "İkindi", "Akşam", "Yatsı"];

async function getPrayerTimes() {
    const response = await fetch('https://vakit.vercel.app/api/timesFromCoordinates?lat=36.58718&lng=36.17347&date=2024-7-22&days=3&timezoneOffset=180&calculationMethod=Turkey');
    const data = await response.json();
    const times = data.items[0].times;
    const now = new Date();

    let nextPrayerTime = null;
    let nextPrayerName = "";

    for (const [index, time] of Object.entries(times)) {
        const prayerTime = new Date(now.toDateString() + ' ' + time);
        if (prayerTime > now) {
            nextPrayerTime = prayerTime;
            nextPrayerName = prayerNames[index];
            break;
        }
    }

    if (nextPrayerTime) {
        const diff = (nextPrayerTime - now) / 1000;
        const hours = Math.floor(diff / 3600);
        const minutes = Math.floor((diff % 3600) / 60);
        const seconds = Math.floor(diff % 60);

        document.getElementById('remaining-time').innerText = `${nextPrayerName} vaktine kalan süre: ${hours} saat, ${minutes} dakika, ${seconds} saniye`;
    } else {
        document.getElementById('remaining-time').innerText = 'Tüm namaz vakitleri geçti';
    }
}
