// eslint-disable-next-line no-var
var hotel = {
  naziv: 'Hotel Park',
  adresa: 'Novosadskog sajma 35',
  brojSoba: 140,
  rezervisano: 57,
  teretana: false,
  brojSlobodnihSoba: function() {
    const slobodno = this.brojSoba - this.rezervisano;
    return slobodno;
  },
};

document.getElementById('hotelName').textContent = hotel.naziv;
document.getElementById('hotelAddress').textContent = hotel.adresa;
document.getElementById('hotelCapacity').textContent = hotel.brojSoba;
// eslint-disable-next-line max-len
document.getElementById('hotelAvailability').textContent = hotel.brojSlobodnihSoba();

if (hotel.teretana == true) {
  document.getElementById('hotelGym').setAttribute('class', 'hotelData green');
  document.getElementById('hotelGym').textContent = 'Da';
} else {
  document.getElementById('hotelGym').setAttribute('class', 'hotelData red');
  document.getElementById('hotelGym').textContent = 'Ne';
}
