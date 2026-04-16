/*
var kursyProgramowania  = [
"C++",
"Java",
"C#",
"Pascal",
"lubie cycki",
"i nie tylko"
];
*/
// console.log(kursyProgramowania) t ojest Pythonowe print()

var rezultat = document.getElementById("rezultat"); // uchwyt diva z id rezultat
var kursyProgramowania = document.getElementById("kursyTworzeniaStronWWW").getElementsByTagName("li");
// to wyzej to lista wartosci textowych z tagow <li> ul'a o id kursyTworzeniaStronWWW
// console.log(kursyProgramowania.length)
var i = 0;

while(i < kursyProgramowania.length)
{
    rezultat.innerHTML += kursyProgramowania[i].innerText + "<br>";
    
    i++;
}

/*
var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");

var i = 0;

while(i < kursyProgramowania.length)
{
    if (kursyProgramowania[i].innerHTML === "C++")
        kursyProgramowania[i].innerHTML += " HIT";
    else
        kursyProgramowania[i].innerHTML += " PROMOCJA";
    
    i++;
}
*/

/*
do
{
    alert(i);
    i++;
}while(i < 5);
*/