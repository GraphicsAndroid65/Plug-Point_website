// Initialize the map
const map = L.map('map').setView([18.5204, 73.8567], 12); // Centered on Pune

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Sample data for charging stations
const stations = [
    { name: "Station 1", lat: 18.5204, lng: 73.8567, info: "Fast charging available." },
    { name: "Station 2", lat: 18.5294, lng: 73.8557, info: "Standard charging available." },
    { name: "Station 3", lat: 18.5114, lng: 73.8457, info: "Fast charging available." }
];

// Add markers for each station
stations.forEach(station => {
    const marker = L.marker([station.lat, station.lng]).addTo(map);
    marker.bindPopup(`<b>${station.name}</b><br>${station.info}`);
});
