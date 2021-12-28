
    
     function displayDate() {
        document.getElementById("demo").innerHTML = Date();
        document.getElementById("demo2").style.color = "red";
      }

 function myFunction(){
    document.getElementById("demo2").style.color = "blue";
 }
     
 

 // don't forget the ready fucnciton !!
 $(document).ready(function(){
   $(".button").click(function(){
     let i = $(this).attr('id');            
     $("#displayContent").html($("#pc"+i).html());    
   });        
});
