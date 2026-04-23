var menu = '';

$("document").ready(
	function()
	{		
	
		menu += "<ul><li><a href='#etykieta1'>"+$("h1").text()+"</a><ul>";	
		var stos = new Array();
		
		$(":header").each
		(
			function(i)
			{				
				stos.push($(this)[0].nodeName);
				$(this).html("<a href='#top' name='etykieta"+(i+1)+"'>"+$(this).html()+"</a>");
			}
		);
		
		stworzPrzyporzadkowania(stos);
		stworzMenu(0);
		
		
		menu += "</ul></li></ul>";
		$("body").prepend(menu);
		$("body").prepend($("<a name='top'> </a>"));
	}
);

function stworzMenu(pozycjaStartowa) // 0
{
	var tmpLength = window['item'+pozycjaStartowa].wartosci.length;//3 
	
	for (var i = tmpLength - 1; i >= 0; i--) //i = 0
	{
		var pozycjaNaglowka = window['item'+pozycjaStartowa].wartosci[i]; //1 
		
		if (window['item'+pozycjaNaglowka].wartosci == '')
		  menu += "<li><a href='#etykieta"+(pozycjaNaglowka+1)+"'>"+$(":header")[pozycjaNaglowka].firstChild.innerHTML+"</a></li>";
		else
		{
		  menu += "<li><a href='#etykieta"+(pozycjaNaglowka+1)+"'>"+$(":header")[pozycjaNaglowka].firstChild.innerHTML+"</a><ul>"
		  
		  stworzMenu(pozycjaNaglowka);
		  
		  menu += "</ul></li>";	
		}
	}
}

function stworzPrzyporzadkowania(stos)
{
	/*tab = new Array();
	tab['nazwa'+1] = 6;
	
	alert(tab['nazwa1']);
	*/
	/*
	window['item'+1] = 5;
	alert(item1);
	*/
	for (var  i = 0; i < stos.length; i++)
	{
		window['item'+i] = new Array();
		window['item'+i].push(stos[i]);
		window['item'+i].wartosci = new Array();
	}
	
	przyporzadkujWartosci(stos);
}

function przyporzadkujWartosci(stos)
{
	while (stos.length) 
	{
		var szukany = stos.pop().charAt(1);
		for (var i = stos.length - 1; i >= 0; i--) 
		{
			if ((parseInt(stos[i].charAt(1)) + 1) == szukany) 
			{
				window['item' + i].wartosci.push(stos.length);
				break;
			}
		}
	}
}
