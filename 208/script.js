$(document).ready(function()
{  
    var canvas = document.getElementById("plotno");
    
    ctx = canvas.getContext("2d");
    
    $("#plotno").mousemove(function(e)
    {
        var x = countOffsetX(e, $(this));
        var y = countOffsetY(e, $(this));
        
        $("#info").html("("+x+","+y+")")
    });
    
    var i = 0;
    
          
    ctx.fillStyle="green";
    ctx.fillRect(50,50, 100, 300);

    ctx.stroke();    
    
    $("#plotno").click(function(e)
    {
        var x = countOffsetX(e, $(this));
        var y = countOffsetY(e, $(this)); 
        
        if (++i % 2)
            ctx.moveTo(x, y);
        else
        {
            ctx.lineTo(x, y);
            ctx.strokeStyle="green";
            ctx.stroke();
        }
        
       // ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
    
    function countOffsetX(event, object)
    {
        return event.pageX - object.offset().left;
    }
    function countOffsetY(event, object)
    {
        return event.pageY - object.offset().top;
    }    
    
    
});
