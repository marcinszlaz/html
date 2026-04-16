/*
 * pętla for / in
 * 
 */

person = { // to jest obiekt xD ale zachowuje sie jak slownik w Python
// w js nie ma czegos takiego jak slownik, to sa obiekty xD
   imie: "Arek",
   nazwisko: "Włodarczyk",
   wiek: "26"
};

var kursyProgramowania = document.getElementById("kursyProgramowania").getElementsByTagName("li");

kursy = [ // to tez obiekt, nie lista jak w python
// tylko Array - tablica, inna nazwa ale oblsuga jak lista w Python xD
    "Java",
    "C++",
    "PHP"
];


for (var property in kursyProgramowania)
{
   if (typeof(kursyProgramowania[property]) !== "object")
        break;
    
   alert(kursyProgramowania[property].innerHTML); // alert wywala alert na stronce
   // nie da sie polaczyc obslugi document ze stronki z node.js, albo to albo to xD
}

