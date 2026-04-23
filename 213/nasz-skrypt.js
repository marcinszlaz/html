var menu = ''; //zmienna przetrzymująca menu
var rozmiarStosu = ''; // rozmiar stosu może się zmieniać, dlatego warto mieć jego początkowy rozmiar zapisany

$("document").ready(
	function()
	{	
		menu += "<ul><li><a href='#etykieta1'>"+$("h1").text()+"</a><ul>";	//rozpoczęcie menu	
				
		var stos = new Array(); //tworzymy stos, na który wrzucimy wszystkie nagłówki
		
		$(":header").each(
			function(i)
			{
				stos.push($(this).get(0).nodeName); //wrzucamy nazwę węzła, czyli H1,H2, etc.
				
				$(this).html("<a href='#top' name='etykieta"+(i+1)+"'>" + $(this).html()+"</a>"); //dopisujemy do każdego nagłówka etykietę
				
			}
		);
		
		rozmiarStosu = stos.length; //rozmiar stosu
		
		stworzPrzyporzadkowania(stos); //tworzymy globalne przyporządkowania
		
		list(0);
	
		menu += "</ul></li></ul>";		

		$("body").prepend(menu);
		$("body").prepend($("<a name='top'> </a>"));
	}
);
function list(pozycjaStartowa)
{
	var tmpLength = window['item' + pozycjaStartowa].wartosci.length;
	var naglowki = $(":header");
	for (var i = tmpLength-1; i >= 0; i--)
	{
		var ktory = window['item' + pozycjaStartowa].wartosci[i];
		
		if (window['item' + ktory].wartosci == '') 
		{
			menu += "<li><a href='#etykieta"+(ktory+1)+"'>" + naglowki.get(ktory).firstChild.innerHTML + "</a></li>";
		}
		else 
		{
			menu += "<li><a href='#etykieta"+(ktory+1)+"'>" +  naglowki.get(ktory).firstChild.innerHTML + "</a><ul>";
			list(ktory);
			menu += "</ul></li>";
		}
	} 
}
function stworzPrzyporzadkowania(stos)
{
	for (var i = 0; i < stos.length; i++) 
	{	
		window['item'+i] = new Array(); //tworzymy nową globalną tablicę, dla każdego elementu o innej nazwie
		window['item'+i].push(stos[i]); //aby móc się później odwołać do poszczególnych nagłówków
		window['item'+i].wartosci = new Array(); //dla każdego nagłówka tworzymy pojemnik wartości
	}
	
	przyporzadkujWartosci(stos); //przyporządkowujemy odpowiednie wartości dla nagłówków, czyli bezpośrednie do nagłówka w hierarchi inne nagłówki
}

function przyporzadkujWartosci(stos)
{		
	while(stos.length)
	{	
		var szukany = stos.pop().charAt(1); //pobieramy drugi znak, czyli wielkość nagłówka znajdującego się na samej górze stosu. 
		//metoda .pop() w tym samym momencie USUWA najwyżej położony element, przez co zmniejsza się stos.length;
	
		for (var i = stos.length - 1; i >= 0; i--) //zaczynamy przeszukiwanie przynależności do odpowiednich nagłówków od końca do początku hierarchi
		{		
			//alert(stos.length);
			if ((parseInt(stos[i].charAt(1)) + 1) == szukany) //jezeli numerek jest o JEDEN mniejszy od szukanego, to znacz, że szukany należy do przed chwilą sprawdzanego elementu!
			{				
				window['item' + i].wartosci.push(stos.length); //dodajemy więc do aktualnego znalezionego elementu wartość na stos. Wartość ta jest równa długości stosu, ponieważ, chcemy przyporządkować pozycje szukanego elementu. Pozycja szukanego elementu jest stos.length(), ponieważ wcześniej wykonane zostało stos.pop() 
//				alert(i);
				break; //musimy zakończyć wykonywanie wewnętrznej pętli, ponieważ znaleziono już szukany element
			}
		}
	}	

	//alert(item0.wartosci);		
}