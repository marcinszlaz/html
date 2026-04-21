$(document).ready(function()
{  
    if (Modernizr.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showLocation, 
                                                geoError, 
                                                {
                                                  maximumAge: 0, //w ms
                                                  timeout: 9000, 
                                                  enableHighAccuracy: true
                                                });
        
        //var id = watchPosition, to samo co getCurrent ale pobiera wartości na bieżąco (wtedy gdy pozycja użytkownika się zmienia)
        //clearWatch(id); - wyłączenie
        
    }
    else
    {
        $("#info").html("Twoja przeglądarka niestety nie wspiera geolokalizacji");
    }
    
    function showLocation(position)
    {        
        var latitude = position.coords.latitude; // szerokość
        
        var longitude = position.coords.longitude; // wysokość
        
        var accuracy = position.coords.accuracy; // dokładność w metrach
        
        //position.coords.speed - szybkość poruszania
        //position.timestamp - czas odpowiedzi
        //position.coords.altitude - wysokość nad poziomem morza
        //coords.altitudeAccuracy - dokładność pomiaru nad poziomem morza        
        
        var pos = new google.maps.LatLng(latitude, longitude);
        //ustawienie opcji mapy
        var myOptions = {
            zoom: 10,
            center: pos,
            mapTypeId: google.maps.MapTypeId.HYBRID //SATELLITE, ROADMAP, TERRAIN    
          };
          
         var map = new google.maps.Map(document.getElementById("info"), myOptions);

         //stworzenie okienka informującego
         var infowindow = new google.maps.InfoWindow({
              map: map,
              position: pos,
              content: 'Jesteś w okolicy '+accuracy+' m od tego punktu'
            });                  
    }
    function geoError(error)
    {
        switch(error.code) 
        {
        case error.PERMISSION_DENIED:
         $("#info").html("Użytkownik nie zezwolił na sprawdzenie lokalizacji");
          break;
        case error.POSITION_UNAVAILABLE:
          $("#info").html("Pozycja nie możliwa do pobrania.");
          break;
        case error.TIMEOUT:
          $("#info").html("Odpowiedź nie doszła, przekroczono czas (timeout)");
          break;
        case error.UNKNOWN_ERROR:
          $("#info").html("Nieznany błąd");
          break;
        }
    }

});
