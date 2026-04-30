window.onload = init;
var XMLMainElement; //root element of XML
var wybrany = 0; //wskazuje wybrana wartosc z suggest boxa
var licznik = 0; //licznik skaczacy
var tmpCode; //tymczasowa wartosc pomocnicza naprawiajaca bug przesuwania sie w gore w dol
function init()
{	

	document.getElementsByTagName("p")[0].firstChild.nodeValue = 'ala';
	

	suggestBox(); //inicjalizacja ajaxowa suggestboxa
	
	//ustawienie suggestboxa w taki sposob aby zawsze byl w odpowiednim miejscu
	document.getElementById("suggestBoxField").style.left = document.getElementById("wojewodztwo").offsetLeft +"px";
	document.getElementById("suggestBoxField").style.top = document.getElementById("wojewodztwo").offsetTop + document.getElementById("wojewodztwo").offsetHeight +"px";
	
	document.getElementById("wojewodztwo").onkeyup = function(evt)
	{
		showBox(evt); //pokazanie boxa, gdy zostanie znaleziona wartosc
		checkKey(evt); //sprawdzenie czy ktos nie kliknal strzalki w dol w gore i reakcja na to
	}
}
//inicjalizacja ajaxa
function ajaxInit() 
{
	var XHR = null;

	try 
	{
		XHR = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			XHR = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch(e2)
		{
			try
			{
				XHR = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e3)
			{
				alert("Niestety Twoja przeglądarka nie obsługuje AJAXA");
			}
		}
	}
	
	return XHR;	
}
//inicjalizacja dokumentu XML
function suggestBox()
{
	var XHR = ajaxInit();
	
	if (XHR != null)
	{
		XHR.open("GET", "wojewodztwa.xml"+"?random="+Math.random(), true);
		
		XHR.onreadystatechange = function()
		{
		    if (XHR.readyState == 4)
			{
				if (XHR.status == 200) 
				{
					XMLMainElement = XHR.responseXML.documentElement;
				}
				else alert("Wystąpił błąd " + XHR.status + " proszę o kontakt na...");
			}
		}
		
		XHR.send(null);
	}
	
}
function showBox(evt)
{

	var evt = (evt) ? evt : window.event;
	
	//sprawia, że licznik się zeruje przez co po dopisaniu litery, suggestBox zaczyna się od początku
	if (evt.keyCode != 40 && evt.keyCode != 38 && evt.keyCode != 13 && evt.keyCode != 8) 
		licznik = 0;
	     
	//pobieramy wszystkie województwa
	var wojewodztwa = XMLMainElement.getElementsByTagName("Województwo");
	//ukrywamy poprzedni suggestbox
	document.getElementById("suggestBoxField").style.visibility = 'hidden';
	//zerujemy mu zawartosc
	document.getElementById("suggestBoxField").innerHTML = '';
	//zerujemy mu klase
	document.getElementById("wojewodztwo").className = '';
	
	//jezeli cokolwiek zostalo wpisane do pola to
	if (document.getElementById("wojewodztwo").value != "") 
	{		
		//przejdz przez wszystkie wojewodztwa az napotkasz na kawalek, ktory bedzie odpowiadal
		for (var i = 0; i < wojewodztwa.length; i++) 
			if (wojewodztwa[i].getElementsByTagName("Nazwa")[0].firstChild.nodeValue.toLowerCase().indexOf(document.getElementById("wojewodztwo").value.toLowerCase()) == 0) 
			{
				//pobranie pola z podpwiedziami
				var suggestBoxField = document.getElementById("suggestBoxField");	
				//ukazanie go
				suggestBoxField.style.visibility = 'visible';
				
				//tworzymy tymczasowego diva do ktorego
				var tmpDiv = document.createElement("div");
				
				//wkladamy w srodek znaleziona wartosc
				tmpDiv.innerHTML = wojewodztwa[i].getElementsByTagName("Nazwa")[0].firstChild.nodeValue.toLowerCase();
				
				//ustawiamy ogolny className	
				tmpDiv.className = 'podpowiedzi';
				
				//ustawiamy event onmouseover i onmouseout na klase, ktora sprawi ze zmieni sie kolor
				tmpDiv.onmouseover = function()
				{
					this.className = 'podpowiedzihover';
				}
				tmpDiv.onmouseout = function()
				{
					this.className = 'podpowiedzi';
				}			
				
				//po kliknieciu na wybrany field trzeba zmienic wartosci
				tmpDiv.onclick = function()
				{
						document.getElementById("wojewodztwo").value = this.innerHTML;
						wybraniePodpowiedzi(this.innerHTML);
				}
				
				suggestBoxField.appendChild(tmpDiv);				
			}			
	}
	
	//jezeli nic nie znaleziono to zmien kolor
	if (document.getElementById("suggestBoxField").childNodes.length == 0)
	{
		document.getElementById("wojewodztwo").className = 'error';
	}
}

function checkKey(evt)
{		 
	var evt = (evt) ? evt : window.event;
	var iloscPodpowiedzi = document.getElementById("suggestBoxField").childNodes.length;
	if (licznik == 0) 
	{
		licznik = iloscPodpowiedzi;
		wybrany = 0;
	}
	if (evt.keyCode == 40) //strzalka w dol
	{
		if (iloscPodpowiedzi != 0)
		{		
			if (tmpCode == 'gora')
			  licznik++;			
    		document.getElementById("suggestBoxField").childNodes[licznik%iloscPodpowiedzi].className = 'podpowiedzihover';
			wybrany = licznik%iloscPodpowiedzi;
			
			licznik++;
			tmpCode = 'dol';
		}
	}
	else if (evt.keyCode == 38) //strzalka w gore
	{	
		if (iloscPodpowiedzi != 0) 
		{
			if (tmpCode == 'dol')
			  licznik--;
			  					
			licznik--;
			wybrany = licznik%iloscPodpowiedzi;
			document.getElementById("suggestBoxField").childNodes[licznik%iloscPodpowiedzi].className = 'podpowiedzihover';
			tmpCode = 'gora';		
			
			//document.getElementById("wojewodztwo").selectionEnd = document.getElementById("wojewodztwo").value.length;
			//document.getElementById("wojewodztwo").selectionStart = document.getElementById("wojewodztwo").value.length;						
		}
	}
	else if (evt.keyCode == 13) //enter
	{
		
	    document.getElementById("wojewodztwo").value = document.getElementById("suggestBoxField").childNodes[wybrany].firstChild.nodeValue;
		wybraniePodpowiedzi(document.getElementById("suggestBoxField").childNodes[wybrany].firstChild.nodeValue);
		wybrany = 0;
		licznik = 0;
		tmpCode = 'enter';
	}
	else if (evt.keyCode == 8) //backspace
	{
		tmpcode = 'backspace';
		wybrany = 0;
		licznik = 0;
	}

}

function wybraniePodpowiedzi(wybranyRekord)
{	
		document.getElementById("tekst").innerHTML = '';
		document.getElementById("suggestBoxField").style.visibility = 'hidden';

		var i = 0;
		for (; i < XMLMainElement.getElementsByTagName("Województwo").length; i++)
		  if (XMLMainElement.getElementsByTagName("Nazwa")[i].firstChild.nodeValue == wybranyRekord)
		    break;
		
		var table = document.createElement("table");	
		
		table.className="daneOWojewodztwie";
		
		
		var tableBody = document.createElement("tbody");
		
		var wybraneWojewodztwo = XMLMainElement.getElementsByTagName("Nazwa")[i].parentNode;
		
		for (var j = 0; j < wybraneWojewodztwo.childNodes.length; j++) 
		{
			var row = document.createElement("tr");
			
			
			if (wybraneWojewodztwo.childNodes[j].firstChild != null) 
			{
				var cell = document.createElement("td");
				
				var nazwa = document.createTextNode(wybraneWojewodztwo.childNodes[j].nodeName+": ");
							
				cell.appendChild(nazwa);
				cell.className="cellHeader";
				row.appendChild(cell);				
				
				var cell = document.createElement("td");
				
				var wartosc = document.createTextNode(wybraneWojewodztwo.childNodes[j].firstChild.nodeValue);
				
				cell.appendChild(wartosc);
				
				row.appendChild(cell);
				
				tableBody.appendChild(row);
			}
		}
	
	
	
		table.appendChild(tableBody);
		
		document.getElementById("tekst").appendChild(table);

}