<?php

 if(isset($_FILES['file']))
{       
    switch($_FILES['file']['error'])
    {
        case 0:
            if ($_FILES['file']['type'] == "image/jpeg" || $_FILES['file']['type'] == "image/gif" || $_FILES['file']['type'] == "image/png")
            {
                move_uploaded_file($_FILES['file']['tmp_name'], "images/".md5(rand()*rand()+rand()).$_FILES['file']['name']);
                echo "plik został pomyślnie zuploadowany";
            }
            else  
                echo "niedozwolone rozszerzenie piku";
            break;
        case 1:
            echo "Za duży plik (php.ini)";
            break;
        case 2:
            echo "Za duży plik";
            break;
        case 3:
            echo "Niepełny plik";
            break;
        case 4:
            echo "Nie wybrano pliku";
            break;                    
        default:
            echo "Błąd którego nie przewidziano prosimy o kontakt";                        
    }
}
else
    echo "nima";
?>
