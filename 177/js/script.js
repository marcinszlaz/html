/*
    events - zdarzenia

 */ 

function zmienKolor()
{
    this.className = "zmienKolor"; // dodaje klase do wybranego obiektu
    // this.className tu jak dla mnie bardziej by pasowało
    // this.addAttribiute ale nie , jest className
    // mozna wpisac by było nazwe zmiennej np
    // `test.className =` zamiast nazwy zmiennej wstawia sie wskaznik `this` wtedy
    // uniwersalnie wskazuje na kazdy element na ktorym zastosowano funkcj
}

function zmienKolor2()
{
    this.removeAttribute("class"); // usuwa atrybut class z wybranego obiektu
}

var test = document.getElementById("test"); // wybierasz sobie element z DOM

test.onmouseover = zmienKolor; //event myszka nad, aktywacja funkcji
test.onmouseout = zmienKolor2; //event myszka zjezdza z nad xD, aktywacja funkcji

