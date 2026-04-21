$(document).ready(function()
{ 
    $("#playpausebutton").click(function()
    {
        var videoElement = $("#testVideo")[0];
        
        if (videoElement.paused)
        {
            videoElement.play();
            $("#playpausebutton").html("Pause");
        }
        else
        {
            videoElement.pause();
            $("#playpausebutton").html("Play");            
        }    
         
    });
    
    $("#muteunmutebutton").click(function()
    {
        var videoElement = $("#testVideo")[0];
        
        if (!videoElement.muted)
        {
            videoElement.muted = true;
            $("#muteunmutebutton").html("Unmute");
        }
        else
        {
            videoElement.muted = false;
            $("#muteunmutebutton").html("Mute");          
        }    
         
    });  
    
    $("#resizeplus").click(function()
    {
        var videoElement = $("#testVideo")[0];
        videoElement.width += 3;
        videoElement.height += 3;
    });
    
    $("#resizeminus").click(function()
    {
        var videoElement = $("#testVideo")[0];
        videoElement.width -= 3;
        videoElement.height -= 3;
    });    
    
    $("#tescik").click(function()
{
        alert($("#testVideo")[0].currentSrc);
})
});