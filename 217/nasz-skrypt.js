$("document").ready(
	function()
	{		
		
		var hint = $("<div class='box'>testowy tekst</div>");
		hint.css("opacity", 0.9);
		$("body").prepend(hint);
		
		
		$(":button[value='Schowaj']").click(
			function()
			{
				hint.animate(
					{
						"left": 100,
						"font-size": 10,
						"borderLeftWidth": 20
					},
					1000					
				).animate(
					{
						"width": 0,
						"height": 0,
						"opacity": 0
					},
					500,
					function()
					{
						hint.css("display", "none");
					}			
				);
			}
		);
		
		$(":button[value='Pokaż']").click(
			function()
			{
				hint.animate(
					{
						"width": 350,
						"height": 350,
						"opacity": 0.9
					},
					200
				).animate(
					{
						"left": 0,
						"font-size": 20,
						"borderLeftWidth": 0
					}
				);
			}
		);		
		
	}
);

