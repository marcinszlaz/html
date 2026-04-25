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
		
		$(".news").truncate({moreText: "więcej informacji..."});
	}
);
function nazwa()
{
	
	return "lala";
}

(function($)
{	
	$.fn.truncate = function(options)
	{
		var defaults=
		{
			moreText: "więcej...",
			lessText: "mniej..."
		}
		
		var settings = $.extend({}, defaults, options);
		
		//alert(settings.moreText);
		return this.each(
			function()
			{
				var actualObj = jQuery(this);
				var message = jQuery(this).html();
				var messageLength = message.length;
				
				if (messageLength > 400)
				{
					var splitLocation = message.indexOf(" ", 400);
					var visiblePart = message.substring(0, splitLocation);
					var hiddenPart = message.substring(splitLocation, messageLength);
					
					
					actualObj.html("<span class='visiblePart'>"+visiblePart+"</span> <span class='moreText'>"+settings.moreText+"</span><span class='hiddenPart'>"+hiddenPart+"</span> <span class='lessText'>"+settings.lessText+" </span>");
					
					$(".hiddenPart", actualObj).css("display", "none");
					$(".lessText", actualObj).hide();
					$(".moreText, .lessText").css("color", "blue");
					
					$(".moreText", actualObj).click(
						function()
						{
							$(".hiddenPart", actualObj).toggle();
							$(".moreText", actualObj).hide();
							$(".lessText", actualObj).show();
						}
					);
					$(".lessText", actualObj).click(
						function()
						{
							$(".hiddenPart", actualObj).toggle();
							$(".moreText", actualObj).show();
							$(".lessText", actualObj).hide();
						}
					);
										
					$(".moreText, .lessText", actualObj).hover(
						function()
						{
							$(this).css({
								"color": "green",
								"cursor": "pointer"
							});
							
						}
					);				
					$(".moreText, .lessText", actualObj).mouseout(
						function()
						{
							$(this).css({
								"color": "blue",
								"cursor": "default"
							});
							
						}
					);						
				}
			}
		);
	}
})(jQuery);
