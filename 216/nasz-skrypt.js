var poczatek;
var koniec;
$("document").ready(
	function()
	{		

		$("#listaKursow tr td:nth-child(2)").addClass("wycentrowaneKomorki");
		$("#listaKursow tr td:nth-child(1)").css("width", 180);
		$("#listaKursow tr:odd").addClass("wzor1");
		$("#listaKursow tr:even").addClass("wzor2");
	
		$("#listaKursow tr").each(
			function(i)
			{
				$(this).attr("id", "nr" + i)
			}
		);
		
		$("#otoczka div").each(
			function(i)
			{
				$(this).attr("class", "nr" + (i+1))
			}
		);		
		var hint = $("<div class='box'>testowy tekst</div>");
	
		hint.mouseleave(
			function()
			{
				$(this).hide("fast");
			}
		
		);
		hint.css("opacity", 0.9);
		$("body").prepend(hint);
		
		$("#listaKursow tr:not(#listaKursow tr:first-child)").hover(
			function(evt)
			{
				$(this).addClass("podswietlenie");
				
				poczatek = evt.timeStamp;
					hint.css(
					{
						"left": evt.pageX+20,
						"top": evt.pageY
					}
				).html($("."+$(this).attr("id")).html()).show(200);
				
			},
			function(evt)
			{	
				koniec = evt.timeStamp;	
				$(this).removeClass("podswietlenie");
				
				if (koniec - poczatek > 500)
				 if (evt.relatedTarget.nodeName != "DIV")
					hint.hide(200);
			}
		);
		
		
	
	}
);

