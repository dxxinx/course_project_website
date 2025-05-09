const map = L.map('map', { preferCanvas: true }).setView([46.2160, 6.1520], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const hotelIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
    shadowSize: [41, 41]
});

const fixedCoordinates = [46.2160, 6.1520];
const marker = L.marker(fixedCoordinates, { icon: hotelIcon }).addTo(map);
marker.bindPopup('<b>Отель President Wilson</b><br>Роскошная коллекция, Женева').openPopup();

map.on('load', function() {
    map.setView(fixedCoordinates, 13);
});
 function toggleDropdown(id) {
    const content = document.getElementById(id + '-content');
    const header = content.previousElementSibling;
    content.classList.toggle('show');
    header.classList.toggle('active');
}