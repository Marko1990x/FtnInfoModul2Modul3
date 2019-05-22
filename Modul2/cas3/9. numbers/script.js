var broj = 10.48351831;

document.write("<h1>Analiza broja: " + broj + "</h1>");
document.write("<br><b>Da li je broj:</b> ");
// isNaN će raditi i ako je broj prosleđen kao string "10.48351831"
if(isNaN(broj) == true) {
	document.write("NIJE");
}else {
	document.write("JESTE");
}
document.write("<br><b>Na dve decimale:</b> " + broj.toFixed(2));
document.write("<br><b>Na 5 cifara:</b> " + broj.toPrecision(5));