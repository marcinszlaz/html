$("document").ready(
	function()
	{
		//FILTRY PODSTAWOE
		//$("div:first").css("border", "2px solid black"); // pierwszy element
		//$("div:last").css("border", "2px solid black"); // ostatni element
		
		//$("div:even").css("border", "2px solid black"); // parzyste elementy
		//$("div:odd").css("border", "2px solid black"); // nieparzyste elementy
		//$("div:eq(2)").css("border", "2px solid black"); // equal - rowny 
		//$("div:gt(1)").css("border", "2px solid black"); // gt - greater than ...
		//$("div:lt(3)").css("border", "2px solid black"); // lt - less than
		
		//$("div:not(div:eq(2))").css("border", "2px solid black"); // not(selektor) nie taki jak
		
		//$("*:header").css("border", "2px solid black"); // naglowki
		//:animated - tylko gdy jest aktualnie animowany
		
		//FILTRY ZAWARTOŚCI
		
		//$("div:contains('To jest')").css("border", "2px solid black"); //contains czyli zawiera
		//$("div:empty").css("border", "2px solid black"); // puste
		
		//$("div:has(b.nazwaKlasy)").css("border", "2px solid black"); // has(selektor) posiada selektor
		
		//$("div:parent").css("border", "2px solid black"); // sa rodzicami
		
		//FILTRY WIDOCZNOŚCI
		
		//$("*:visible").css("border", "2px solid black"); // visible - widoczne, hidden - ukryte
		
		//FILTRY DZIECI
		
		$("ol li:nth-child(3n+2)").css("border", "2px solid black");     
	}
);
