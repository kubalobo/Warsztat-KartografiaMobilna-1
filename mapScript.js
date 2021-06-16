const mymap = L.map('mapid').setView([52.230701, 21.005249], 25);

const Stamen_Watercolor = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: '',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'jpg'
});

Stamen_Watercolor.addTo(mymap);


// L.tileLayer('https://api.mapbox.com/styles/v1/kubalobo/ckpzrkq5t250g18qvf81yrrt7.html?fresh=true&title=view&access_token=pk.eyJ1Ijoia3ViYWxvYm8iLCJhIjoiY2tlYTM3ZzBxMjJ6dzJzbDY4MGo0Z3E2ZSJ9.bUY1hv2zymhH_-HU0p84-A', {
//     attribution: '',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
// }).addTo(mymap);