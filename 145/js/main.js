/*function fix_heights(query)
{
      var i = 0;
      var maxHeight = "";
      $(query).each(function()
      {
         var height = $(this).css("height");
         if (i == 0)
            maxHeight = height;

         if (maxHeight < height)
             maxHeight = height;
         i++;
      }).each(function()
      {         
          $(this).css("height", maxHeight);
      });
}

$(document).ready(function()
{
        fix_heights("#middle_flow > *");       

});*/