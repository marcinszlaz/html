$("document").ready(
	function()
	{
		//$("img[alt]").css("border", "2px solid black"); //istnieje atrybut o kluczu alt
		//$("img[src='zdjecie1.jpg']").css("border", "2px solid black"); //jest rowny zdjecie1.jpg
		
		//$("img[alt!='jakies zdjecie']").css("border", "2px solid black");//jest rozny od jakies zdjecie
		
		//$("img[src$='.gif']").css("border", "2px solid black"); //konczy sie na .gif
		
		//$("img[src^='zdjecie']").css("border", "2px solid black"); //zaczyna sie od zdjecie
		
		//$("img[src*='.']").css("border", "2px solid black"); //zawiera kropkę
		
		//$("img[alt][src='zdjecie1.jpg']").css("border", "2px solid black"); //wybierz takie obrazki w ktorych istnieje atrybut o kluczu alt i atrybut o kluczu src ma wartosc zdjecie1.jpg
		
	}
);
