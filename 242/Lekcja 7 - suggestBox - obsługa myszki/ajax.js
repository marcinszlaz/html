window.onload = init;
var XMLMainElement = null;
function init()
{
	document.getElementById("suggestBoxField").style.left = document.getElementById("wojewodztwo").offsetLeft + "px";
	document.getElementById("suggestBoxField").style.top = document.getElementById("wojewodztwo").offsetTop 
	+document.getElementById("wojewodztwo").offsetHeight + "px";
	
	document.getElementById("wojewodztwo").onkeyup = showBox;
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

function showBox()
{

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

