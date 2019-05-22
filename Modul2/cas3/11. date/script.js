var now = new Date();
var established = new Date(1996, 11, 26);

var razlika = now.getTime() - established.getTime();
var godina = razlika / 31536000000;

document.write("Osnovani smo pre " + godina.toFixed(0) + " godina.");