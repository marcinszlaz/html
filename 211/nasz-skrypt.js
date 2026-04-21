$("document").ready(
	function()
	{		
		$("#listaKursow tr td:nth-child(2)").addClass("wycentrowaneKomorki");
		$("#listaKursow tr td:nth-child(1)").css("width", 180);
		$("#listaKursow tr:odd").addClass("wzor1");
		$("#listaKursow tr:even").addClass("wzor2");
		
		$("#listaKursow tr:not(#listaKursow tr:first-child)").hover(
			function()
			{
				$(this).addClass("podswietlenie");
			},
			function()
			{
				$(this).removeClass("podswietlenie");
			}
		);
		
	}
);


