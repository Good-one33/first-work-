// the ready fucnciton !!
$(document).ready(function () {
  //  function to add a specific animation to each box  according to it's title
  for (var i = 0; i < 12; i++) {
    var boxTitle = $(".box").eq(i).attr("title");

    if (boxTitle == "image") {
      var animationTen = bodymovin.loadAnimation({
        container: document.getElementById(i),
        path: "https://assets7.lottiefiles.com/temp/lf20_D0nz3r.json",
        renderer: "svg",
        loop: false,
        autoplay: true,
      });
    } else if (boxTitle == "text") {
      var animationTen = bodymovin.loadAnimation({
        container: document.getElementById(i),
        path: "https://maxst.icons8.com/vue-static/landings/animated-icons/icons/book/book.json",
        renderer: "svg",
        loop: false,
        autoplay: true,
      });

      currentId = "#" + i;

      $(currentId).hover(function () {
        $(currentId).css("background-color", "aqua");
        animationTen.goToAndPlay(0, true);
      });
    } else if (boxTitle == "code") {
      var animationTen = bodymovin.loadAnimation({
        container: document.getElementById(i),
        path: "Bodymovin/icons8-services.json",
        renderer: "svg",
        loop: false,
        autoplay: true,
      });
    }
  }
  //--------------------pc0
  function f0() {
    alert("f0");
  }
  //--------------------pc1
  function f1() {
    alert("f1");
  }
  //--------------------pc2
  function f2() {
    alert("f2");
  }

  //--------------------pc3
  function f3() {
    alert("f3");
  }
  //--------------------pc4
  function f4() {
    alert("f4");
  }
  //--------------------pc5
  function f5() {
    alert("f5");
  }
  //--------------------pc6
  function f6() {
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
  }
  //--------------------pc7
  function f7() {
    $("#pc7btn1").click(function () {
      $("#pc7txt1")
        .text(" visit number " + localStorage.visit)
        .addClass("testClass");
    });
  }

  //--------------------pc8
  function f8() {
    alert("f8");
  }
  //--------------------pc9
  function f9() {
    $("#pc9btn1").click(function () {
      $("#pc9test").addClass("testClass2");
    });
  }
  //--------------------pc10
  function f10() {
    alert("f10");
  }
  //--------------------pc11
  function f11() {
    alert("f11");
  }
  // function  used to switch between boxes
  function chooseBox() {
    $(".box").click(function () {
      let n = $(this).attr("id");
      $("#displayContent").html($("#pc" + n).html());
      const obj = {
        1: f1,
        2: f2,
        3: f3,
        4: f4,
        5: f5,
        6: f6,
        7: f7,
        8: f8,
        9: f9,
        10: f10,
        11: f11,
      };

      obj[n]();
    });
  }

  chooseBox();
}); // the  and of the read function
