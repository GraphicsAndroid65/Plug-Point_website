const map = L.map('map').setView([18.5204, 73.8567], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

const stations = [
    { lat: 18.5204, lng: 73.8567, name: "Tata Power EV Charging Station" },
    { lat: 18.5205, lng: 73.8590, name: "Ather Grid Charging Station" },
    { lat: 18.5220, lng: 73.8601, name: "Mahindra Electric Charging Station" },
    { lat: 18.5174, lng: 73.8713, name: "MG Motor Charging Station" },
    { lat: 18.5201, lng: 73.8548, name: "Ion Energy Charging Station" },
    { lat: 18.5300, lng: 73.8630, name: "ChargeGrid EV Charging Station" },
    { lat: 18.5215, lng: 73.8459, name: "Fortum EV Charging Station" },
    { lat: 18.5312, lng: 73.8484, name: "Tata Power EZ Charge" },
    { lat: 18.5278, lng: 73.8635, name: "Powergrid EV Charging Station" },
    { lat: 18.5153, lng: 73.8521, name: "Bosch Charging Station" },
    { lat: 18.5310, lng: 73.8455, name: "EV Solutions (EESL) Charging Station" },
    { lat: 18.5260, lng: 73.8602, name: "BSES EV Charging Station" },
    { lat: 18.5190, lng: 73.8684, name: "Jio Charging Station" },
    { lat: 18.5333, lng: 73.8472, name: "Battery Swapping Station (Ather Energy)" },
    { lat: 18.5264, lng: 73.8641, name: "Sundaram Fasteners EV Charging Station" },
    { lat: 18.5172, lng: 73.8557, name: "Ola Electric Charging Station" },
    { lat: 18.5100, lng: 73.8479, name: "Pune Municipal Corporation Charging Station" },
    { lat: 18.5208, lng: 73.8596, name: "Ather Energy Charging Station" },
    { lat: 18.5231, lng: 73.8605, name: "Tata Power Charging Station (Commercial Complex)" },
    { lat: 18.5228, lng: 73.8569, name: "Revolt Motors EV Charging Station" },
];

stations.forEach((station) => {
    L.marker([station.lat, station.lng]).addTo(map)
        .bindPopup("Electric Vehicle Charging Station");
});

map.on('zoomend', () => {
    const zoomLevel = map.getZoom();
    console.log("Zoom level: " + zoomLevel);
});
