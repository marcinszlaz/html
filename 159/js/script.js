/*
 * 
 *  OPERATORY LOGICZNE
 *  
 *  ! - negacji
 *  
 *  1 to zmieni w 0
 *  0 to zmieni w 1
 *  
 *  && - koniunkcja "I" - W TYM SAMYM MOMENCIE SPEŁNIONE (AND from sql und python)
 *  
 *  1 1 - 1
 *  1 0 - 0
 *  0 1 - 0
 *  0 0 - 0
 *  
 *  koniunkcja jest PRAWDZIWA wtedy i tylko wtedy gdy oba wyrażenia są prawdziwe
 *  
 *  || - alternatywa "lub" - to lub też to (OR python/sql)
 *  1 1 - 1
 *  1 0 - 1
 *  0 1 - 1
 *  0 0 - 0
 *  
 *  alternatywa jest FAŁSZYWA wtedy i tylko wtedy gdy oba wyrażenia są fałszywe
 *   
 */

var a = 1,
    b = 2;
    //true  //false
if (a < b || b == 3)
    alert("test");
    





