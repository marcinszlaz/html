/*
    dodawanie i usuwanie elementów znajdujących się na stronie

    createElement("nazwa_tagu");

    appendChild

    removeChild

    tmp.parentNode.removeChild(tmp);
    
 */


var x = document.createElement("p");

x.style.color = "red";
x.className = "tesciur";
x.innerHTML = "<p id='testowy2'>nowy tekst<p> 4";

var body = document.querySelector("body");

var newChildNode = body.appendChild(x);

// body.innerHTML += "<p class='tesciur'>zupa</p>"; można i tak ale tak sie nie robi
// bo przegladark a musi sie odswieżyć / przeladować

var testowy2 = document.getElementById("testowy2");

testowy2.style.color = "green";


var kursyProgramowania = document.getElementById("kursyProgramowania");

kursyProgramowania.parentNode.removeChild(kursyProgramowania); //
// zeby usunac dany element musisz przejsc do niego, potem przejsc do jego rodzica
// czyli parentNode (camelCase, nie mogę się przestawić z camel_case_python)
// a potem go usunąć removeChild, ale lepiej zmieniać display: none; niż
// usuwać