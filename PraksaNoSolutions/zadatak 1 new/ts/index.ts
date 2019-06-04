
let x1 = 0;
let x2 = 0;
let x3 = 0;
let x4 = 0;

let x = document.getElementById("buttonclick1").addEventListener("click", function () {

    let x1r = x1 += 1;
    let log = console.log("i have been pressed: " + x1r + " times");
    document.getElementById("filltext1").innerHTML = " people love this! " + x1r + " times";
    let x = document.getElementById("slika1") as HTMLImageElement
    x.src = "./images/heart2.png";

})

let y = document.getElementById("buttonclick2").addEventListener("click", function () {
    let x2r = x2 += 1;
    let log = console.log("i have been pressed: " + x2r + " times");
    document.getElementById("filltext2").innerHTML = " people love this! " + x2r + " times";
    let x = document.getElementById("slika2") as HTMLImageElement
    x.src = "./images/heart2.png";
})

let z = document.getElementById("buttonclick3").addEventListener("click", function () {
    let x3r = x3 += 1;
    let log = console.log("i have been pressed: " + x3r + " times");
    document.getElementById("filltext3").innerHTML = " people love this! " + x3r + " times";
    let x = document.getElementById("slika3") as HTMLImageElement
    x.src = "./images/heart2.png";

})

let r = document.getElementById("buttonclick4").addEventListener("click", function () {
    let x4r = x4 += 1;
    let log = console.log("i have been pressed: " + x4r + " times");
    document.getElementById("filltext4").innerHTML = " people love this! " + x4r + " times";
    let x = document.getElementById("slika4") as HTMLImageElement
    x.src = "./images/heart2.png";

})