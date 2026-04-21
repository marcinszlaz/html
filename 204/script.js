$(document).ready(function()
{ 
    function init()
    {
        $("form input.stored").each(function()
        {
            var form = $(this).parent();        
            var idOfForm = form.attr("id");
            var type = $(this).data("type"); 
            
            if (localStorage.getItem("#"+idOfForm+" input[data-type='"+type+"']"))
                $(this).val(localStorage.getItem("#"+idOfForm+" input[data-type='"+type+"']"));
        });
        
        $("form input[type='submit']").click(function(evt)
        {
              evt.preventDefault();
              
              $("input.stored", evt.target.parentNode).each(function()
              {
                    var form = $(this).parent();        
                    var idOfForm = form.attr("id");
                    var type = $(this).data("type"); 
                    
                    localStorage.removeItem("#"+idOfForm+" input[data-type='"+type+"']");
                    $("#"+idOfForm+" input[data-type='"+type+"']").val("");
              });
        });
    }
    
    init();
    
  $("input.stored").keyup(function()
    {
        var form = $(this).parent();
        
        var idOfForm = form.attr("id");
        
        var type = $(this).data("type");
        
        localStorage.setItem("#"+idOfForm+" input[data-type='"+type+"']",$(this).val());
    });
});