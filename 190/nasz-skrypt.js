$("document").ready(
	function()
	{
		//$("div > b").css("color", "blue"); //pobieramy bezpośredni tag b w tagu div
		//$("div.a, li.b").css("color", "blue"); //pobieramy takie divy ktorych klasa jest a oraz wszystkie li ktorych kalsa jest b 
		//$("#wyjatkowy > div").css("color", "blue"); //pobierz tagi DIV, które są obok tagu z identyfikatorem #wyjatkowy
		
		$("div").click(
			function()
			{
				$(this).css("font-weight", "bold");
			}		
		).css("color", "blue");
	}
);
