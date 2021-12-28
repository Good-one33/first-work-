
    
      $(document).ready(function(){
          $(".button").click(function(){
            let i = $(this).attr('id');            
            $("#displayContent").html($("#pc"+i).html());    
          });        
      });
   


