$(document).ready(function()
{ 
    var worker = new Worker("task.js");
   
     
    worker.onmessage = function(e)
    {
        if (e.data == "end")
            $("#start_counting").removeAttr("disabled");
        else
            $("#counter").html(e.data);
    }
    
    worker.onerror = function(e)
    {
        alert(e.message + " Linia: " + e.lineo + " w pliku " + e.filename);
    }
    
    //worker.terminate();
    $("#start_counting").click(function()
    {
        $(this).attr("disabled", "disabled");
        var count_from = $("#count_from").val();
        //JSON key - value, key - value
        worker.postMessage({
            'cmd': 'start',
            'count_from': count_from
        });
    });
});
