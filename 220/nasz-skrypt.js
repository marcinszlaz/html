$("document").ready(
	function()
	{	
		$("#dragMe").draggable({"addClasses": false , cancel:  "span.nieruszalny"});
		
		//$("#dragMe").draggable("option", "cancel");
		$(".ui-draggable").css("font-size", 10);
		//$("#dragMe").draggable("option", "axis", "y");
		$("#dragMe").draggable("option", "cursor", "crosshair");
		
		$("#dragMe").draggable("option", "helper", "clone");
		$("#dragMe").draggable("option", "opacity", 0.8);
		
		
		$( "#dragMe" ).draggable({
		   stop: function(evt, ui) {
		   		$("#dragMe").draggable("option", "disabled", true);
				$("#dragMe").offset(ui.offset);
				$("#dragMe").position(ui.position);
			 }
		
		});
		
		
	}
);

