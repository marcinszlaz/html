$("document").ready(
	function()
	{
		$("div.naglowek span").each(
			function(i)
			{			
				$(this).addClass("gh"+i);
			}
		);
		$("div.ukryty_tekst").each(
			function(i)
			{			
				$(this).addClass("gh"+i);
			}
		);		
		
		
		$("div.naglowek span").click(
			function()
			{
				$("div."+$(this).attr("class")).toggle("fast");
			}
		
		).toggle(
			function()
			{
				$(this).text("schowaj");
			},
			function()
			{
				$(this).text("więcej");
			}
		
		);
	
	}
);
