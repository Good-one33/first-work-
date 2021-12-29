
// the ready fucnciton !!
 $(document).ready(function(){
  
  $(".btn").click(function(){
     let i = $(this).attr('id');            
     $("#displayContent").html($("#pc"+i).html()); 
   });     
  });

  // blackBoxWelcomeTextAnimation
 var animation = bodymovin.loadAnimation({
  container: document.getElementById("animationBackground"),
  path: "Bodymovin/blackBoxWelcomeAnimation.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
  name: "Demo ",
});