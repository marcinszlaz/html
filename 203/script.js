$(document).ready(function()
{ 
    $("#dropfilebox").dragover(function(evt)
    {
        evt.preventDefault();
    }).drop(function(evt){
       
       evt.preventDefault();
       
       var files = evt.dataTransfer.files;
       
       if (files.length)
       {
          var file = files[0];
          
          reader = new FileReader();
          
          reader.readAsDataURL(file);
          
          reader.onloadend = function(evt)
          {
              onLoadEndReaderHandler(evt, file);
          }
          
          formData = new FormData();
          
          formData.append('file', file);
          
          var xhr = new XMLHttpRequest();
          
          xhr.open('POST', 'upload_file.php', true);
          
          xhr.onload = function()
          {
            if (xhr.status == 200)
            {
                alert(xhr.responseText);
            }
            else
                alert("Something went wrong");
          }
          
          if (xhr.upload)
              xhr.upload.onprogress = progressHandler;
          
          xhr.onloadend = onLoadXHRHandler;
          xhr.send(formData)
          
          
          
          
       }
       
       
    });
    
    function onLoadXHRHandler(evt)
    {
        $("#info_load").text("Obrazek został załadowany...");
            $("progress").attr(
             {
                 value: 100,
                 max: 100
             });
             
        $("#percent_loaded").text("100");
    }
    function progressHandler(evt)
    {
        if (evt.lengthComputable)
        {
            var percent_loaded = ((evt.loaded / evt.total) * 100).toFixed(2);
            $("progress").attr(
             {
                 value: evt.loaded,
                 max: evt.total
             });
             
           $("#info_load").text("Ładowanie...");
           $("#percent_loaded").text(percent_loaded);
        }
    }
    function onLoadEndReaderHandler(evt, file)
    {
        $("#preview").attr("src",evt.target.result);
        $("#preview").attr("width", "200");
        
        var fileSize = 0;
        
        if (file.size > 1024 * 1024)
          fileSize = (file.size / (1048576)).toFixed(2) + 'MB';    
        else
          fileSize = (file.size / 1024).toFixed(0) + 'kB';
      
        $("#fileName").text("Name: " + file.name);
        $("#fileType").text("Type: " + file.type);
        $("#fileSize").text("Size: " + fileSize);
        

        
    }
        
});