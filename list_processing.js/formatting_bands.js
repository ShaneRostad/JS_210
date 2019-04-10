var bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  data.map(function(band) {
    updateCountryName(band);
    capitalizeBandName(band);
    removeDotsInBandName(band);
  })
  return data;
}

function capitalizeBandName(band) {
  band.name = band.name.toUpperCase();
}

function removeDotsInBandName(band) {
  band.name = band.name.replace('.', '');
}

function updateCountryName(band) {
  band.country = 'Canada';
}


console.log(processBands(bands));
