/*  
 *  Funkcje - zasięg zmiennych
 *  
 *  zmienne globalne i lokalne
 *  
 */

var a = 5; // to jest globalna

function test(a) 
{
    // przyjecie argumentu przez funkcje jest równoważne deklaracji zmiennej lokalnej w scope funkcji, czyli
    // test(a) jest równoważne var a;
    // ale bez test(a) i np z a = 3 (bez var) jest to traktowane jak odwolanie do zmiennej globalnej var a = 5 o góry
    // i zmieni jej wartosc, wewnatrz scope funkcji bezpieczniej jest uzywac var a albo uzywac test(a) zeby nie 
    // modyfikowac globalnych
    //var a;
    a = 3;

    
 
}

test();

alert(a);