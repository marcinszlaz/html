function count_down(count_from)
{    
    postMessage(count_from--);
    
    if (count_from < 0)
    {
        postMessage("end");
        return;
    }
    
    setTimeout("count_down("+count_from+")", 1000);
}

onmessage = function(e)
{
    switch(e.data.cmd)
    {
        case "start":
            count_down(e.data.count_from);
            break;
        default:
            postMessage("Nieznana komenda");
    }
    
    
    
    //importScripts('nazwa.js', 'aaa.js');
    
    //close();
}