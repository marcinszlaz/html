/*
    events - zdarzenia

 */


function wypiszTekst(tekst)
{
    
    alert(tekst + " !!!!!!!!!!!!");
}

function wypiszCosTam()
{
    alert("Przykladowy onClick Alert");
}

var test = document.getElementById("test");
test.onclick = wypiszCosTam; // jak w Python, jak wywołasz z () to od razu wykona
// jak wybierzesz bez () samo wypiszCosTam to odnosi sie do adresu i wywoluje po kliknieciu (evencie)

var test2 = document.getElementById("button");

test2.onclick = function() {
    wypiszTekst('\tZeby uzyc funkcji z argumentem przy\n '+
            'wywolaniu eventa musisz uzyc funkcji\n' +
            'anonimowej function () { mojaFunc("text")}'
                )
}

var test3 = document.getElementById("zmienKolor")

function zmieniamKolorki() {
    test3.style.color = "green";
}
function backToBlack() {
    test3.style.color = "black";
}

test3.onmouseover = zmieniamKolorki;
test3.onmouseout  = backToBlack;

var test4 = document.getElementById("zmienKolor2");


function zmieniamKolorkiThis() {
    this.className = "zmienKolor";
}

function zmieniamKolorkiThisBack() {
    this.removeAttribute("class");   
}

test4.onmouseover = zmieniamKolorkiThis;
test4.onmouseout = zmieniamKolorkiThisBack;


function podaj_xy(event) {
    var e = event || window.event;
    var x_y = document.getElementById("x_y");
    x_y.innerHTML =  e.clientX +" "+ e.clientY;
}

window.onload = function () {
    var test = document.getElementById("button");
    test.onmousemove = podaj_xy;
}
