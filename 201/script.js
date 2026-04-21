$(document).ready(function()
{ 
    $(".przedmiot").hover(function(){
        $(".opis", this).fadeIn();
    },
    function()
    {
        $(".opis", this).fadeOut();
    })
    .dragstart(function(evt)
    {
        evt.dataTransfer.setData("text", $(this).attr("id"));
        $("#info_przeniesienie").fadeIn();
    }).dragend(function(evt)
    {
        $("#info_przeniesienie").fadeOut();
    })
    ;
    
    var default_color = $("#kontener_koszyka").css("background-color");
    
    $("#kontener_koszyka").dragover(function(evt)
    {
       evt.preventDefault();
       $(this).css("background-color", "teal");
       
    }).dragleave(function(evt){
       $(this).css("background-color", default_color);
    }).drop(function(evt)
    {
        evt.preventDefault();
        $(this).css("background-color", default_color);
        var id_kursu = evt.dataTransfer.getData("text");
        
        var nazwa = $("#"+id_kursu+" .nazwa").text();
        var cena = $("#"+id_kursu+" .cena").text();
        
        var li = "<li class='produkt_w_koszyku'><b>"+nazwa+"</b><span class='cena_w_koszyku'>"+cena+" zł</span></li>";
        
        $("#koszyk").append(li);
        
        var suma = 0;
        
        $("#koszyk .cena_w_koszyku").each(function()
        {
           suma += parseFloat($(this).text());
        })
        
        $("#cena span").text(suma.toFixed(2));
    });
    
    
        
});