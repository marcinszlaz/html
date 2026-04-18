$("document").ready(
	function()
	{
		/*	  
			:button - wybiera wszystkie elementy których nazwa tagu to button lub typ to button.			
			:checkbox - wybiera wszystkie elementy, których type to checkbox	
			:checked - dobiera elementy, które są zaznaczone.			
			:disabled - wybiera elementy, które są disabled.			
			:enabled - wybiera elementy, które są enabled.			
			:file - wybiera elementy, których typ to file			
			:image - wybiera elementy, których typ to image			
			:input - wybiera elementy, w których można coś wpisywać (input, textarea, select, button)			
			:password - wybiera elementy, których typ to hasło
			:radio - wybiera elementy, których typ to radio			
			:reset - wybiera elementy, których typ to reset			
			:selected - wybiera elementy, które są zaznaczone			
			:submit - wybiera elementy, których typ to submit			
			:text - wybiera elementy, których typ to text			
		 */
		
		//$("#formularz_o_uzytkowniku :text").css("width", 100).css("position", "absolute").css("left", 100);
		$("#formularz_o_uzytkowniku :text").css({"width": 100, "position": "absolute", "left": 100});
		
		$("#formularz_o_uzytkowniku :checkbox").click(
			function()
			{
				var ilosc = $("#formularz_o_uzytkowniku :checked").length;
				
				$("#info").text("Aktualnie jest zaznaczonych "+ilosc+" odpowiedzi");
			}
		);
		
		
	}
);
