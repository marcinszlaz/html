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

function osoba(imie, nazwisko, age)
{
    this.name = imie;
    this.surname =  nazwisko;
    this.age = age;
    //this.specifiedValue = 12;
    this.toString = function()
    {        
        return this.name + " " + this.surname;
    };
}

var x = new osoba("Arek", "Włodarczyk", 15);
var y = new osoba("Wiola", "asfasf", 16);
var z = new osoba("Agnieszka", "fasf", 20);

osoba.prototype.specifiedValue = 12; // a tutaj modyfkujesz klase
// cala klase, podmieniasz sobie, czyli nie musisz opjedynczych obiektow

//x.specifiedValue = 12; // mozna na szybko dodac specyficzna wartosc
// do pojedynczego obiektu, bez modyfikacji klasy z ktorej zostal stworzony

div.innerHTML = x.specifiedValue + "<br>" + y.specifiedValue + "<br>" + z.specifiedValue;

osoba.imie = "Wiola";