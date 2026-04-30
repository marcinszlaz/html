window.onload = init;
var XMLMainElement = null;
function init()
{
	document.getElementById("suggestBoxField").style.left = document.getElementById("wojewodztwo").offsetLeft + "px";
	document.getElementById("suggestBoxField").style.top = document.getElementById("wojewodztwo").offsetTop 
	+document.getElementById("wojewodztwo").offsetHeight + "px";
	
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
		XHR.open("GET", "wojewodztwa.xml"+"?random="+Math.random(), true);
		
		XHR.onreadystatechange = function()
		{
			if (XHR.readyState == 4)
			{				
				if (XHR.status == 200)
				{
					XMLMainElement = XHR.resposneXML.documentElement;
				}
				else
				  alert("Wystąpił błąd "+XHR.status);
			}
		}
		
		XHR.send(null);
	}
}


