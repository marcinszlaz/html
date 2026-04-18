$(document).ready(function()
{
   Modernizr.load(
   {
       test: Modernizr.input.placeholder,
       nope: ["http://html5form.googlecode.com/svn/trunk/jquery.html5form-1.5-min.js"],
       complete:
           function()
            {
                if (!Modernizr.input.placeholder)
                    $('#myform').html5form();
            }
   }
    );
   
   $("#myform").submit(function(e){
       var searchedValue = $("input[name='searchedValue']").attr("value");
       
       if(searchedValue)
           window.location.href = "http://www.google.pl/#hl=plf&output=search&q=site:videokurs.pl "+searchedValue;
       else
           alert("empty string");
       
       e.preventDefault();
   });

    $("#rangeTest").change(function()
 {
    $("#valueFromRange").attr("value", $(this).attr("value"));
 });
});