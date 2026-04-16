/*
    events - zdarzenia

 */

function zmienKolor()
{
    this.className = "zmienKolor";
};
function zmienKolor2()
{
    this.removeAttribute("class");
};

window.onload = function() // enkapsulacja w funkcji anonimowej
// window pewnie tyczy calego okna xD, onload na ladowaniu xD
// ratuje sytuacje gdy wylaczamy async w <script src="js/script.js" async ></script>
// jeszcze nie rozumiem dlaczego to wyłączamy ale ok xD
// onload powoduje, ze jak cala strona jeszcze sie nie doczyta
// to js nie proboje stosowac funkcji na czyms co jeszcze nie istnieje w DOM

{
    var test = document.getElementById("test");

    test.onmouseover = zmienKolor;
    test.onmouseout = zmienKolor2;
};

// var test = document.getElementById("test");

//     test.onmouseover = zmienKolor;
//     test.onmouseout = zmienKolor2;

