// Tarih bilgilerini alma
const todayDate = new Date().toISOString().split('T')[0];

// API URL ve parametreler
const url = 'https://vakit.vercel.app/api/timesFromCoordinates';
const params = new URLSearchParams({
    lat: 36.58718,
    lng: 36.17347,
    date: todayDate,
    days: 3,
    timezoneOffset: 180,
    calculationMethod: 'Turkey'
});

// API isteği yapma
fetch(`${url}?${params}`)
    .then(response => response.json())
    .then(data => {
        const todayTimes = data.times[todayDate];

        if (todayTimes) {
            // Tarihi ve namaz vakitlerini yazdırma
            const todayDateObj = new Date(todayDate);
            const formattedTodayDate = todayDateObj.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' });

            document.getElementById('date').textContent = `Tarih: ${formattedTodayDate}`;

            const prayerTimesList = document.getElementById('prayer-times');
            prayerTimesList.innerHTML = '';
            Object.keys(todayTimes).forEach(prayer => {
                const listItem = document.createElement('li');
                listItem.textContent = `${prayer}: ${todayTimes[prayer]}`;
                prayerTimesList.appendChild(listItem);
            });

            // Bir sonraki ezan vakti için kalan süreyi hesaplama
            const getNextPrayerTime = () => {
                const now = new Date();
                let nextPrayerTime = null;

                Object.keys(todayTimes).some(prayer => {
                    const [hours, minutes] = todayTimes[prayer].split(':').map(Number);
                    const prayerDateTime = new Date(todayDateObj.getFullYear(), todayDateObj.getMonth(), todayDateObj.getDate(), hours, minutes);

                    if (prayerDateTime > now) {
                        nextPrayerTime = prayerDateTime;
                        return true; // 'some' döngüsünden çıkmak için
                    }
                    return false;
                });

                return nextPrayerTime;
            };

            document.getElementById('show-next-prayer-time').addEventListener('click', () => {
                const nextPrayerTime = getNextPrayerTime();
                const nextPrayerElement = document.getElementById('next-prayer');
                if (nextPrayerTime) {
                    const timeUntilNextPrayer = new Date(nextPrayerTime - new Date());
                    nextPrayerElement.textContent = `Bir sonraki ezana kalan süre: ${timeUntilNextPrayer.getUTCHours()} saat ${timeUntilNextPrayer.getUTCMinutes()} dakika ${timeUntilNextPrayer.getUTCSeconds()} saniye`;
                } else {
                    nextPrayerElement.textContent = "Bugün için kalan ezan vakti yok.";
                }
            });

        } else {
            document.getElementById('date').textContent = "Bugünün namaz vakitleri bulunamadı.";
        }
    })
    .catch(error => {
        console.error("Bir hata oluştu:", error);
        document.getElementById('date').textContent = "Bir hata oluştu, namaz vakitleri alınamadı.";
    });
