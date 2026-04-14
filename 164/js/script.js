/*  
 * Obiekty - to pojemniki do przechowywania zmiennych i funkcji tematycznie 
 *           ze sobą związanych do dalszego łatwiejszego ponownego użycia
 *           
 * 
 */

var div = document.getElementById("test");



div.innerHTML = "nowa treść";

var osoba = { // tak sie tworzy obiekt w js
    imie: "Areks", // argumenty obiektu
    nazwisko: "Włodarczyk",
    pobierzInformacje: function() // w zasadzie to metoda obiektu
    {        
        return this.imie + " " + this.nazwisko; 
        // this. to odwołanie do obiektu jak self. w Python
        // w tym przypadku this. odwoluje sie do argumentu obiektu
        // var osoba w ktorym tworzona jest dynamicznie funkcja anonimowa
        // pobierzInformacje: function() obiektu var osoba xD
    },
    toString: function() // anonimowa funkcja jak lambda w Python
                         // ta funkcja robi overload standardowej funkcji builtin
    {
        return this.imie + " " + this.nazwisko;
    }
};
/*
var osoba = new Object({
    imie: "Areks", 
    nazwisko: "Włodarczyk",
    pobierzInformacje: function()
    {        
        return this.imie + " " + this.nazwisko;
    },
    toString: function()
    {
        return this.imie + " " + this.nazwisko;
    }        
}
);
*/

div.innerHTML = osoba; //bez overloudowanej metody toString zwrocil object Object

osoba.imie = "Wiola";