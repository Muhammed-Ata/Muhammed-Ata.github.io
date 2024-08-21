document.getElementById('fetchButton').addEventListener('click', getPrayerTimes);

const apiUrl = "https://api.aladhan.com/v1/timings?latitude=36.188333&longitude=36.147778&method=2";

async function getPrayerTimes() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const times = data.data.timings;

    document.getElementById('imsak').textContent = times.Imsak;
    document.getElementById('gunes').textContent = times.Sunrise;
    document.getElementById('ogle').textContent = times.Dhuhr;
    document.getElementById('ikindi').textContent = times.Asr;
    document.getElementById('aksam').textContent = times.Maghrib;
    document.getElementById('yatsi').textContent = times.Isha;

    updateRemainingTime(times);
}

function updateRemainingTime(times) {
    const currentTime = new Date();
    const prayerTimes = [
        { name: 'İmsak', time: times.Imsak },
        { name: 'Güneş', time: times.Sunrise },
        { name: 'Öğle', time: times.Dhuhr },
        { name: 'İkindi', time: times.Asr },
        { name: 'Akşam', time: times.Maghrib },
        { name: 'Yatsı', time: times.Isha }
    ];

    for (let i = 0; i < prayerTimes.length; i++) {
        const [hour, minute] = prayerTimes[i].time.split(':');
        const prayerDate = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate(), hour, minute);
        if (currentTime < prayerDate) {
            const diffMs = prayerDate - currentTime;
            const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
            const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
            const diffSecs = Math.floor((diffMs % (1000 * 60)) / 1000);

            document.getElementById('remaining').textContent = `${diffHrs} Saat ${diffMins} Dakika ${diffSecs} Saniye`;

            setTimeout(() => updateRemainingTime(times), 1000);
            break;
        }
    }
}
