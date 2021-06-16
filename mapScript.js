const mymap = L.map('mapid').setView([51.9835167, 20.9513169], 22);

// const Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
// 	attribution: '',
// 	subdomains: 'abcd',
// 	minZoom: 1,
// 	maxZoom: 16,
// 	ext: 'jpg'
// });

// Stamen_Watercolor.addTo(mymap);


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '',
    maxZoom: 22,
    id: 'kubalobo/ckpzrkq5t250g18qvf81yrrt7',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia3ViYWxvYm8iLCJhIjoiY2tlYTM3ZzBxMjJ6dzJzbDY4MGo0Z3E2ZSJ9.bUY1hv2zymhH_-HU0p84-A'
}).addTo(mymap);




var gpx = './warsztat1.gpx'; // URL to your GPX file or the GPX itself

new L.GPX(gpx, {async: true}).on('loaded', function(e) {
    mymap.fitBounds(e.target.getBounds());
}).addTo(mymap);
