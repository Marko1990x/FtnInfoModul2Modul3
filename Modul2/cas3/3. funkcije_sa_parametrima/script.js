function izracunajPovrsinu(sirina, visina) {
	var povrsina = visina * sirina;
	return povrsina;
}

var sirinaSobe = 5;
var duzinaSobe = 3.75;

var povrsina1 = izracunajPovrsinu(3, 5);
var povrsina2 = izracunajPovrsinu(sirinaSobe, duzinaSobe);

document.write("Povrsina1: " + povrsina1);
document.write("<br>")
document.write("Povrsina2: " + povrsina2);