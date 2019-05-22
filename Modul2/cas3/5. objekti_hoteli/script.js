var hoteli = [
	{
		naziv: "Hotel Park",
		adresa: "Novosadskog sajma 35",
		brojSoba: 140,
		rezervisano: 57,
		teretana: true,
		brojSlobodnihSoba: function() {
			var slobodno = this.brojSoba - this.rezervisano;
			return slobodno;
		}
	},
	{
		naziv: "Centar",
		adresa: "Uspenska 1",
		brojSoba: 90,
		rezervisano: 68,
		teretana: false,
		brojSlobodnihSoba: function() {
			var slobodno = this.brojSoba - this.rezervisano;
			return slobodno;
		}
	}
]

for(var i=0; i<hoteli.length; i++) {
	var hotel = hoteli[i]
	document.write("<br><b>Podaci o hotelu:</b><br>");
	document.write("Naziv: " + hotel.naziv + "<br>");
	document.write("Adresa: " + hotel.adresa + "<br>");
	document.write("Kapacitet: " + hotel.brojSoba + "<br>");
	document.write("Teretana: ")
	if(hotel.teretana == true) {
		document.write("DA<br>");
	}else {
		document.write("NE<br>");
	}
	document.write("Broj slobodnih soba: " + hotel.brojSlobodnihSoba() + "<br>");
}