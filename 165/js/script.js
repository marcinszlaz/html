/*  
 * Obiekty - to pojemniki do przechowywania zmiennych i funkcji tematycznie 
 *           ze sobą związanych do dalszego łatwiejszego ponownego użycia
 *           
 * Klasa -  W skrócie klasa to forma do wytwarzania obiektów.
 *          Ta foremka służy do zebrania obiektów w jedną "klasę". 
 *          Daje możliwość stworzenia z tej formy wielu nowych różniących się 
 *          minimalnie od siebie obiektów, 
 *          ale będących dalej do siebie podobnych cechami i metodami.
 *          
 */

var div = document.getElementById("test");

div.innerHTML = "nowa treść";
/*
var osoba = {
    imie: "Arek", 
    nazwisko: "Włodarczyk",
    pobierzInformacje: function()
    {        
        return this.imie + " " + this.nazwisko;
    },
    toString: function()
    {
        return this.imie + " " + this.nazwisko;
    }
};
*/
function osoba(imie, nazwisko, age)  // a tak sie robi klase xD
{
    this.name = imie;
    this.surname =  nazwisko;
    this.age = age;
    this.toString = function()
    {        
        return this.name + " " + this.surname;
    };
}

var x = new osoba("Arek", "Włodarczyk", 15); // tutaj mamy konstruktor obiektu klasy xD
var y = new osoba("Wiola", "asfasf", 16);
var z = new osoba("Agnieszka", "fasf", 20);

div.innerHTML = x + "<br>" + y + "<br>" + z;

osoba.imie = "Wiola";