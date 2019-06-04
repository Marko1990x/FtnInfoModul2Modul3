var x1 = 0;
var x2 = 0;
var x3 = 0;
var x4 = 0;
var x = document.getElementById("buttonclick1").addEventListener("click", function () {
    var x1r = x1 += 1;
    var log = console.log("i have been pressed: " + x1r + " times");
    document.getElementById("filltext1").innerHTML = " people love this! " + x1r + " times";
    var x = document.getElementById("slika1");
    x.src = "./images/heart2.png";
});
var y = document.getElementById("buttonclick2").addEventListener("click", function () {
    var x2r = x2 += 1;
    var log = console.log("i have been pressed: " + x2r + " times");
    document.getElementById("filltext2").innerHTML = " people love this! " + x2r + " times";
    var x = document.getElementById("slika2");
    x.src = "./images/heart2.png";
});
var z = document.getElementById("buttonclick3").addEventListener("click", function () {
    var x3r = x3 += 1;
    var log = console.log("i have been pressed: " + x3r + " times");
    document.getElementById("filltext3").innerHTML = " people love this! " + x3r + " times";
    var x = document.getElementById("slika3");
    x.src = "./images/heart2.png";
});
var r = document.getElementById("buttonclick4").addEventListener("click", function () {
    var x4r = x4 += 1;
    var log = console.log("i have been pressed: " + x4r + " times");
    document.getElementById("filltext4").innerHTML = " people love this! " + x4r + " times";
    var x = document.getElementById("slika4");
    x.src = "./images/heart2.png";
});
//# sourceMappingURL=index.js.map