objekti mogu da sadrze druge promenjive, funkcije i omogucavaju lancanje elemenata.
objektima se pristupa preko kljuca.
su strukture koje imaju kljucev a na vrednostima pristupamo preko kljuceva.

https://www.w3schools.com/js/js_object_definition.asp

objekti se guraju u niz podataka json

razlika izmedju innerHtml and value 
https://stackoverflow.com/questions/31225901/difference-between-innerhtml-and-value-in-js


var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  imePrezmime: function (){
      return this.firstname + " " + this.lastname;
  }
};

var person = new Object();  // pristup objektima
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

this.nesto atribut se trazi u okviru objekta this.lastname trazi taj atribut u okviru person a da nema this onda bi ga trazio negde u kodu.