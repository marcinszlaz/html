$(document).ready(function()
{ 
  // var value = $("#AG input[data-type='name']").data("type");
   $("#AG input:eq(1)").data("type", "wartosc");
   $("#AG input:eq(1)").data("type");
   

   

    var value =  document.getElementById("AG").childNodes[1].dataset.required = "lala";

    alert(value);
});