$("document").ready(
	function()
	{	
	/*window.lala = 44;
	nazwa.prototype.lala = 100;
		 var obiekt = new nazwa();
		  
		 var obiekt2 = new nazwa();
		
		 
		 obiekt.test =
		 {
		 	lala: "tralala",
			krzycz: function()
			{
				alert("aaaaaaaa");
			}
		 }
		 
		 alert($.fn.jquery);
		 */
		
		$(".news").truncate();
	}
);
function nazwa()
{
	
	return "lala";
}

(function($)
{	
	$.fn.truncate = function()
	{
		
		alert("aaa");
	}
})(jQuery);
