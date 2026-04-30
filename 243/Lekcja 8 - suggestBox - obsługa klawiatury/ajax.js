window.onload = init;
var XMLMainElement = null;
var licznik = 0;
var wybrany = 0;
var tmpCode;
function init()
{
	document.getElementById("suggestBoxField").style.left = document.getElementById("wojewodztwo").offsetLeft + "px";
	document.getElementById("suggestBoxField").style.top = document.getElementById("wojewodztwo").offsetTop 
	+document.getElementById("wojewodztwo").offsetHeight + "px";
	
	document.getElementById("wojewodztwo").onkeyup = function(evt) 
	{
		showBox(evt);
		checkKey(evt);
	}
	suggestBox();
}
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
function suggestBox() 
{
	var XHR = ajaxInit();
	if (XHR != null) 
	{
		XHR.open("GET", "wojewodztwa.xml" + "?random=" + Math.random(), true);
		
		XHR.onreadystatechange = function() {
		
			if (XHR.readyState == 4) 
			{
				if (XHR.status == 200) 
				{
					XMLMainElement = XHR.responseXML.documentElement;
				}
				else alert("Wystąpił błąd " + XHR.status);
			}
		}
		
		XHR.send(null);
	}
}

function showBox(evt)
{
	var evt = (evt) ? evt : window.event;
	
	if (evt.keyCode != 13 && evt.keyCode != 38 && evt.keyCode != 40 && evt.keyCode != 8)
	  licznik = 0;
	
	if (XMLMainElement != null)
	{
		
		document.getElementById("suggestBoxField").style.visibility = 'hidden';
		document.getElementById("suggestBoxField").innerHTML = '';
		document.getElementById("wojewodztwo").className = '';
		
		var wojewodztwa = XMLMainElement.getElementsByTagName("Województwo");
		
		if (document.getElementById("wojewodztwo").value != "") 
		{
		
			for (var i = 0; i < wojewodztwa.length; i++) 
				if (wojewodztwa[i].getElementsByTagName("Nazwa")[0].firstChild.nodeValue.toLowerCase().indexOf(document.getElementById("wojewodztwo").value.toLowerCase()) == 0) 
				{
					var suggestBoxField = document.getElementById("suggestBoxField");
					suggestBoxField.style.visibility = 'visible';
					
					var tmpDiv = document.createElement("div");
					
					tmpDiv.className = 'podpowiedzi';
					
					tmpDiv.onmouseover = function()
					{
						this.className ='podpowiedzihover';
					}
					tmpDiv.onmouseout = function()
					{
						this.className ='podpowiedzi';
					}	
					tmpDiv.onclick = function()
					{
						document.getElementById("wojewodztwo").value = this.innerHTML;
						suggestBoxField.style.visibility = 'hidden';
					}				
					tmpDiv.innerHTML = wojewodztwa[i].getElementsByTagName("Nazwa")[0].firstChild.nodeValue;
					
					
					suggestBoxField.appendChild(tmpDiv);
				}
				
				if (document.getElementById("suggestBoxField").childNodes.length == 0)
				  document.getElementById("wojewodztwo").className = 'error';
		}
		
		
		
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
		if (tmpCode == 'gora')
		  licznik++;
		  		
		document.getElementById("suggestBoxField").childNodes[licznik%iloscPodpowiedzi].className = "podpowiedzihover";
		
		wybrany = licznik % iloscPodpowiedzi;
		
		licznik++;	
		
		tmpCode = 'dol';	
	}
	else if (evt.keyCode == 38) //strzalka w gore
	{
		if (tmpCode == 'dol')
		  licznik--;
		
		licznik--;
		wybrany = licznik % iloscPodpowiedzi;
		
		document.getElementById("suggestBoxField").childNodes[licznik%iloscPodpowiedzi].className = "podpowiedzihover";
		
		tmpCode = 'gora';
	}
	else if (evt.keyCode == 13) //enter
	{
	    document.getElementById("wojewodztwo").value = document.getElementById("suggestBoxField").childNodes[wybrany].firstChild.nodeValue;
		document.getElementById("suggestBoxField").style.visibility = 'hidden';
		
		licznik = 0;
		wybrany = 0;
		
		tmpCode = 'enter';
	}
	else if (evt.keyCode == 8) //backspace
	{
		licznik = 0;
		wybrany = 0;
		tmpCode = 'backspace;'
	}
}
