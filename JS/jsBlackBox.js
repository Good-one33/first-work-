
// the ready fucnciton !!
 $(document).ready(function(){
  
// switch betwen boxes 
$(".btn").click(function(){
 let i = $(this).attr('id');            
 $("#displayContent").html($("#pc"+i).html()); 


//////--------- pc7 --------\\\\\\

 // function to get the value from radio buttons
 function check() {
   if ($("#pc6rb1").prop("checked") == true)
     return $("#pc6rb1").attr("value");
   else if ($("#pc6rb2").prop("checked") == true)
     return $("#pc6rb2").attr("value");
   else {
     alert(" please select gender");
   }
 }
 //  function to get user input and store them in js object and do some other stuff with data
 function addName() {
   let verify = localStorage.getItem("user");

   if (verify == null) {
     $("#pc6input").show();

     // get input on a click
     $("#pc6click1").click(function () {
       let inName = $("#pc6Name").val();
       let inAge = $("#pc6Age").val();
       let inGender = check();
       let inColor = $("#pc6Color").val();
       let mode = document.getElementById("pc6Mode");
       let inCurrentMode = mode.options[mode.selectedIndex].value; // I will do it later on pure jquery
       //store them in js object in local storage
       let user = {
         name: inName,
         age: inAge,
         gender: inGender,
         color: inColor,
         currentMode: inCurrentMode,
         countVisit: 0,
       };
       localStorage.setItem("user", JSON.stringify(user));
       let userObject = JSON.parse(localStorage.getItem("user"));

       $("#pc6input").text(
         " Hello " + userObject.name + "Thanks  for joining us !"
       );
     });
   } else {
     let userObject = JSON.parse(localStorage.getItem("user"));
     userObject.countVisit++;

     $("#pc6demo")
       .text(
         "  welcome back " +
           userObject.name +
           " we know your are  " +
           userObject.age +
           " years old and your are a " +
           userObject.gender +
           ", mode is " +
           userObject.currentMode
       )
       .addClass("testClass")
       .show();

     $("#pc6demo1")
       .text("visit number " + localStorage.getItem("visit"))
       .addClass("testClass2")
       .show();
   }
 }

 function visit() {
   let visitCount = localStorage.getItem("visit");

   visitCount++;
   localStorage.setItem("visit", visitCount);
 }
 $("#pc6demo").hide();

 $("#pc6input").hide();
 addName();
 visit();



//////--------- pc7 --------\\\\\\
$("#pc7btn1").click(function () {
  $("#pc7txt1")
    .text(" visit number " + localStorage.visit)
    .addClass("testClass");
});


 //////--------- pc9 --------\\\\\\
$("#pc9btn1").click(function(){
$("#pc9test").addClass("testClass2");
});
});


}); 
   
   

   
 

  
 