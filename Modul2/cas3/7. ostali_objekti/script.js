var ekran_sirina = screen.width;
var ekran_visina = screen.height;
var ekran_orijentacija = screen.orientation.type;
var ekran_ugao = screen.orientation.angle;

document.write("<h1>Podaci o ekranu (screen objekat)</h1>");
document.write("<b>Dimenzije: </b>" + ekran_sirina + "x" + ekran_visina);
document.write("<br><b>Orijentacija: </b>" + ekran_orijentacija);
document.write("<br><b>Ugao: </b>" + ekran_ugao);

var user_agent = navigator.userAgent;
var jezici = navigator.languages;
var os = navigator.platform;

document.write("<h1>Podaci o browseru (navigator objekat)</h1>");
document.write("<b>Ime programa: </b>" + user_agent);
document.write("<br><b>Instalirani jezici: </b>" + jezici);
document.write("<br><b>Operativni sistem: </b>" + os);

var u_istoriji = history.length;
var istorija = history;

document.write("<h1>Istorija pregleda (history objekat)</h1>");
document.write("<b>Elemenata: </b>" + u_istoriji);

var trenutni_url = location.href;

document.write("<h1>Trenutna adresa (location objekat)</h1>");
document.write("<b>URL: </b>" + trenutni_url);

console.log(document)