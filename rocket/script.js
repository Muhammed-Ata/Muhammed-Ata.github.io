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

// Namaz vakitlerinin isimleri
const prayerNames = ['İmsak', 'Sabah', 'Öğle', 'İkindi', 'Akşam', 'Yatsı'];

// API isteği yapma
function fetchPrayerTimes() {
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
                prayerNames.forEach((prayer, index) => {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${prayer}: ${todayTimes[index] || 'Bilgi Yok'}`;
                    prayerTimesList.appendChild(listItem);
                });

                // Bir sonraki ezan vakti için kalan süreyi hesaplama
                const getNextPrayerTime = () => {
                    const now = new Date();
                    let nextPrayerTime = null;

                    prayerNames.forEach((prayer, index) => {
                        if (todayTimes[index]) {
                            const [hours, minutes] = todayTimes[index].split(':').map(Number);
                            const prayerDateTime = new Date(todayDateObj.getFullYear(), todayDateObj.getMonth(), todayDateObj.getDate(), hours, minutes);

                            if (prayerDateTime > now) {
                                nextPrayerTime = prayerDateTime;
                                return; // Dönüş, döngüden çıkmak için
                            }
                        }
                    });

                    return nextPrayerTime;
                };

                const nextPrayerElement = document.getElementById('next-prayer');
                const nextPrayerButton = document.getElementById('show-next-prayer-time');

                nextPrayerButton.addEventListener('click', () => {
                    const nextPrayerTime = getNextPrayerTime();
                    if (nextPrayerTime) {
                        const timeUntilNextPrayer = new Date(nextPrayerTime - new Date());
                        nextPrayerElement.textContent = `Bir sonraki ezana kalan süre: ${timeUntilNextPrayer.getUTCHours()} saat ${timeUntilNextPrayer.getUTCMinutes()} dakika ${timeUntilNextPrayer.getUTCSeconds()} saniye`;
                    } else {
                        nextPrayerElement.textContent = "Bugün için kalan ezan vakti yok.";
                    }
                });

                // Otomatik güncelleme
                nextPrayerButton.click();
            } else {
                document.getElementById('date').textContent = "Bugünün namaz vakitleri bulunamadı.";
            }
        })
        .catch(error => {
            console.error("Bir hata oluştu:", error);
            document.getElementById('date').textContent = "Bir hata oluştu, namaz vakitleri alınamadı.";
        });
}

// Sayfa yüklendiğinde namaz vakitlerini al
document.addEventListener('DOMContentLoaded', fetchPrayerTimes);
