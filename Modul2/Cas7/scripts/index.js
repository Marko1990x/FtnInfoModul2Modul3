var x = "cao";
// tslint:disable-next-line: no-console
console.log(x, "hello world !");
document.getElementById("fill").innerHTML = "typescript yey check console";
function sendGreeting(greeting) {
    if (greeting === void 0) { greeting = "Hello World!"; }
    document.write("<h1>" + greeting + "<h1>");
}
sendGreeting();
var greeting = "Good evening!";
sendGreeting(greeting);
window.onload = function () {
    document.getElementById("forma").addEventListener("submit", function (event) {
        var forma = document.getElementById("forma");
        var ime = document.getElementById("ime");
        var prezime = document.getElementById("prezime");
        var jmbg = document.getElementById("jmbg");
        var registracija = document.getElementById("registracija");
        var flag = true;
        if (ime.value.trim() == "" || ime.value[0] != ime.value[0].toUpperCase()) {
            flag = false;
        }
        if (prezime.value.trim() == "" || prezime.value[0] != prezime.value[0].toUpperCase()) {
            flag = false;
        }
        if (jmbg.value.trim() == "" || jmbg.value.length != 13) {
            flag = false;
        }
        if (registracija.value.trim() == "") {
            flag = false;
        }
        if (!flag) {
            event.preventDefault();
        }
    });
};
/*
window.onload = function(){
    let search = window.location.search;

    if(!search){
        return;
    }
    let items = search.substring(1).split("&");
    let tabela = document.getElementById("tabela");

    if(!tabela) {
        return;
    }

    let ime: string = "";
    let prezime: string = "";
    let jmbg: string = "";

    for (let i = 0; i < items.length; i++) {
        let values = items[i].split("=");
        if(values[0]=="ime"){
            ime = values[1];
        }else if(values[0]=="prezime"){
            prezime = values[1];
        }else if(values[0]=="jmbg"){
            jmbg = values[1];
        }
    }

    if(ime == "" || prezime == "" || jmbg == "") return;
        tabela.innerHTML = tabela.innerHTML + "<tr><td>"+ime+"</td><td>"+prezime+"</td><td>"+jmbg +"</tr>";
}; */
function hello(name, surname, gender) {
    if (gender == "Man") {
        console.log("Hello, Mr. " + name + " " + surname);
    }
    else {
        console.log("Hello, Ms. " + name + " " + surname);
    }
}
// pogledaj ovo za funkciju kasnije
function sayHello(fullname, gender, helloFunction) {
    // Kao u zadatku 1. parametre dobijamo splitovanjem stringa
    var parts = fullname.split(" ");
    // provera tipa parametra helloFunction, ako je funkcija pozivamo (ova provera nije obavezna)
    if (typeof helloFunction === "function") {
        helloFunction(parts[0], parts[1], gender);
    }
}
sayHello("John Smith", "Man", hello);
var Animal = /** @class */ (function () {
    function Animal(n, g) {
        this.name = n;
        this.gender = g;
    }
    Animal.prototype.pring = function () {
        console.log("this is the animal " + this.name + " this is the gender " + this.gender);
    };
    return Animal;
}());
var animal = new Animal("Bird", "Male");
animal.pring();
// tslint:disable-next-line: max-classes-per-file
var Krug = /** @class */ (function () {
    function Krug(radius) {
        this._r = radius;
    }
    Object.defineProperty(Krug.prototype, "r", {
        get: function () {
            return this._r;
        },
        set: function (v) {
            this._r = v;
        },
        enumerable: true,
        configurable: true
    });
    Krug.prototype.getO = function () {
        return 2 * this._r * Math.PI;
    };
    Krug.prototype.getP = function () {
        return this._r * this._r * Math.PI;
    };
    return Krug;
}());
var Pravougaonik = /** @class */ (function () {
    function Pravougaonik(poljea, poljeb) {
        this._a = poljea;
        this._b = poljeb;
    }
    Object.defineProperty(Pravougaonik.prototype, "a", {
        get: function () {
            return this._a;
        },
        set: function (a1) {
            this._a = a1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pravougaonik.prototype, "b", {
        get: function () {
            return this._b;
        },
        set: function (b1) {
            this._b = b1;
        },
        enumerable: true,
        configurable: true
    });
    Pravougaonik.prototype.GetO = function () {
        return (2 * this._a) + (2 * this._b);
    };
    Pravougaonik.prototype.getP = function () {
        return this._a * this._b;
    };
    return Pravougaonik;
}());
var krug = new Krug(15);
console.log(krug.getO(), krug.getP());
var pravougaonik = new Pravougaonik(10, 20);
console.log(pravougaonik.getP(), pravougaonik.GetO());
// tslint:disable-next-line: max-classes-per-file
var Valjak = /** @class */ (function () {
    function Valjak(r, h) {
        this._krug = new Krug(r);
        this._pravougaonik = new Pravougaonik(r * 2, h);
    }
    Object.defineProperty(Valjak.prototype, "r", {
        get: function () {
            return this._krug.r;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Valjak.prototype, "k", {
        get: function () {
            return this._pravougaonik.b;
        },
        enumerable: true,
        configurable: true
    });
    Valjak.prototype.getP = function () {
        return 2 * this.r * this.r * Math.PI + 2 * this.r * Math.PI * this.k;
    };
    Valjak.prototype.getV = function () {
        return this.r * this.r * Math.PI * this.k;
    };
    return Valjak;
}());

//# sourceMappingURL=index.js.map
