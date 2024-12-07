// Harita oluştur
var map = L.map('map').setView([39.92077, 32.85411], 6); // Ankara merkezli bir başlangıç noktası

// Harita katmanı ekle
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Marker ekleme
map.on('click', function (e) {
    var lat = e.latlng.lat;
    var lng = e.latlng.lng;

    L.marker([lat, lng]).addTo(map)
        .bindPopup(`Koordinatlar: ${lat.toFixed(5)}, ${lng.toFixed(5)}`)
        .openPopup();
});
