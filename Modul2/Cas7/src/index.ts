let x: string = "cao";
// tslint:disable-next-line: no-console
console.log(x, "hello world !");

document.getElementById("fill").innerHTML = "typescript yey check console";

function sendGreeting(greeting: string = "Hello World!"): void {
	document.write("<h1>" + greeting + "<h1>");
}

sendGreeting();

let greeting: string = "Good evening!";

sendGreeting(greeting);

window.onload = function() {
    document.getElementById("forma").addEventListener("submit", function(event) {
        const forma: HTMLFormElement = document.getElementById("forma") as HTMLFormElement;
        const ime: HTMLInputElement = document.getElementById("ime") as HTMLInputElement;
        const prezime: HTMLInputElement = document.getElementById("prezime") as HTMLInputElement;
        const jmbg: HTMLInputElement = document.getElementById("jmbg") as HTMLInputElement;
        const registracija: HTMLInputElement = document.getElementById("registracija") as HTMLInputElement;
        let flag = true;
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

function hello(name: string, surname: string, gender: string): void {
    if (gender == "Man") {
        console.log("Hello, Mr. "  + name + " " + surname);
    } else {
        console.log("Hello, Ms. "  + name + " " + surname);
    }
}
// pogledaj ovo za funkciju kasnije
function sayHello(fullname: string, gender: string, helloFunction: (n: string, s: string, g: string) => void): void {
    // Kao u zadatku 1. parametre dobijamo splitovanjem stringa
    const parts: string[] = fullname.split(" ");
    // provera tipa parametra helloFunction, ako je funkcija pozivamo (ova provera nije obavezna)
    if (typeof helloFunction === "function") {
        helloFunction(parts[0], parts[1], gender);
    }
}

sayHello("John Smith", "Man", hello);

class Animal {
    public name: string;
    public gender: string;
    constructor(n: string, g: string) {
        this.name = n;
        this.gender = g;
    }
    public pring() {
        console.log("this is the animal " + this.name + " this is the gender " + this.gender);
    }
}

let animal: Animal = new Animal("Bird", "Male");

animal.pring();

// tslint:disable-next-line: max-classes-per-file
class Krug {
    private _r: number;
    constructor(radius: number) {
    this._r = radius;
    }
    get r(): number{
        return this._r;
    }
    set r(v: number){
        this._r = v;
    }
    getO(): number{
        return 2*this._r * Math.PI;
    }
    getP(): number{
        return this._r * this._r * Math.PI;
    }
}

class Pravougaonik {
    private _a: number;
    private _b: number;
    constructor(poljea: number, poljeb: number) {
        this._a = poljea;
        this._b = poljeb;
    }
    get a(): number{
        return this._a;
    }
    get b(): number{
        return this._b;
    }
    set a(a1:number){
        this._a = a1;
    }
    set b(b1:number){
        this._b = b1;
    }
    GetO(): number{     // bez promenjivih
      return (2*this._a) + (2*this._b); 
    }
    getP(): number{
      return this._a*this._b;
    }
}

let krug: Krug = new Krug(15);
console.log(krug.getO(), krug.getP());

let pravougaonik: Pravougaonik = new Pravougaonik(10, 20);
console.log(pravougaonik.getP(), pravougaonik.GetO());

// tslint:disable-next-line: max-classes-per-file
class Valjak{
    private _krug: Krug;
    private _pravougaonik: Pravougaonik;
    constructor(r: number, h: number) {
        this._krug = new Krug(r);
        this._pravougaonik = new Pravougaonik(r*2,h);
    }
    get r(): number{
        return this._krug.r;
    }
    get k(): number{
        return this._pravougaonik.b;
    }
    getP(): number{
        return 2*this.r*this.r*Math.PI+2*this.r*Math.PI*this.k;
    }
    getV(): number{
        return this.r*this.r*Math.PI*this.k
    }
}
