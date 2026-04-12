/*
 * 
 *  Instrukcje warunkowe
 *  
 *  JEŻELI (WARUNEK)
 *      to zrób coś
 *  W INNYM WYPADKU JEZELI (warunek)
 *      to zrob cos innego
 *  A CALKOWICIE W INNYM WYPADKU jak WSZYSTKIE inne warunki powyzej nie byly spelnione
 *      to zrob cos totalnie innego
 *  
 *  
 */
var a = 5,
    b = 7;
    
if (a < b)
{
    alert("a jest mniejsze od b");
    alert("lalala");
}
else if (a > b)
    alert("a jest większe od b");
else
{
    alert("a nie jest ani większe ani mniejsze od b");
    alert("to jest jakiś tekst");
}

// W JS 0 jest FALSE, wszystko inne (ujemne liczby też) jest PRAWDĄ !
// klamry nie sa obowiazkowe w if else if ALE bez nich wykona sie
// tylko jedna instrukcja bezposrednio po if () else if(), jak chcesz blok instrukcji
// to musisz użyć  { }