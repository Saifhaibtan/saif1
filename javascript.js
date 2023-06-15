$(document).ready(function(){
    $(".head-top-loc").mouseover(function(){
      $(".head-top-maps").css("display","block");
    });
    $(".head-top-loc").mouseleave(function(){
      $(".head-top-maps").css("display","none")
    });
    $("#register-drop").mouseover(function(){
      $(".register").css("display","block");
    });
    $("#register-drop").mouseleave(function(){
      $(".register").css("display","none")
    });
    $(".register").mouseover(function(){
      $(".register").css("display","block");
    });
    $(".register").mouseleave(function(){
      $(".register").css("display","none")
    })
    $(".chairsdropdown").mouseover(function(){
      $(".chairTableMenu").css("display","inline");
    });
    $(".chairTableMenu").mouseover(function(){
      $(".chairTableMenu").css("display","inline");
    });
    $(".chairsdropdown").mouseleave(function(){
      $(".chairTableMenu").css("display","none");
    });
    $(".chairTableMenu").mouseleave(function(){
      $(".chairTableMenu").css("display","none")
    });
  
 
  });  
  $(function(){
    $("#moree").click(function(){
        $(".moreData").show();
    })
    $('#moree').click(function(){
        $('#moree').hide();
    })
});
  window.onscroll = function() {myFunction()};
    
  var navbar = document.getElementById("navbar");
  var navbarbuttom = document.getElementById("navbar-buttom");
  var sticky = navbar.offsetTop;
  var sticky = navbarbuttom.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
      navbarbuttom.classList.add("stickybuttom")
    } else {
      navbar.classList.remove("sticky");
      navbarbuttom.classList.remove("stickybuttom");
    }
  }
  function opennav(){
    document.getElementById("navbar-buttom").style.zIndex="999";
    document.getElementById("navbar-buttom").style.height="auto";
    document.getElementById("navbar-buttom").style.backgroundColor="rgb(80, 40, 1)";
    document.getElementById("navbar-buttom").style.display="block";
    document.getElementsByClassName("close-navbar")[0].style.display="block";

    document.getElementById("bars").style.display="none";
  }
  function closenav(){
    document.getElementById("navbar-buttom").style.display="none";
    document.getElementById("bars").style.display="inline";
  }





////////sign up and login codes////////

function abccc(){  alert('hgjgsj')

}


function signinbutton() {


  var loginemail = document.getElementById('loginemail').value;
  var loginpass = document.getElementById('loginpass').value;

  if (loginemail == "saif@gmail.com" && loginpass == "s123") {

    window.location.href = "index.html";
    
  } else {
    window.location.href = "login.html";
    alert("Incorect Pass")
  }
}
function logout(){
  document.getElementById('mainbody').style.display="none";
    document.getElementById('container').style.display="inline";
    window.location.href = "login.html";
    
}
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});



// function signupbutton(){
//   var signupname = document.getElementById("signupname").value;
//   var signupemail = document.getElementById("signupemail").value;
//   var signuppass = document.getElementById("signuppass").value;
  
//   document.getElementById("username").innerHTML = signupname;
//   document.getElementById("useremail").innerHTML = signupemail;
//   document.getElementById("userpass").innerHTML = signuppass;
  
  
  
  
  
  
//       }
      // function signinbutton() {
  
      //   var loginemail = document.getElementById('loginemail').value;
      //   var loginpass = document.getElementById('loginpass').value;

        
      //   if (loginemail == "saif" && loginpass == "123"){
        
       
      //      window.location.href="index.html";
      //      alert("thanks");
         
      
      
      //   }else {
      //     window.location.href = "login.html";
      //     alert("increct pass or uesr")
          
      //   }
      // }
      
      
      // function logout(){
      //   document.getElementById('mainbody').style.display="none";
      //     document.getElementById('container').style.display="inline";
      //     window.location.href = "login.html";
          
      // }
      // const signUpButton = document.getElementById('signUp');
      // const signInButton = document.getElementById('signIn');
      // const container = document.getElementById('container');
  
      // signUpButton.addEventListener('click', () => {
      //   container.classList.add("right-panel-active");
      // });
  
      // signInButton.addEventListener('click', () => {
      //   container.classList.remove("right-panel-active");
      // });



      ////////sign up and login codes close////////


      function adminsigninbutton() {
  
        var aloginemail = document.getElementById('adminloginemail').value;
        var aloginpass = document.getElementById('adminloginpass').value;
 
        
        if (aloginemail == "saif" && aloginpass == "1234"){
        
       document.getElementById('adminlogin').style.display="none";
       document.getElementById('userdata').style.display="block";
       document.getElementById('adminout').style.display="block";
          
          
         
         
      
        }
 
        else {
          document.getElementById('adminlogin').style.display="block";
          document.getElementById('userdata').style.display="none";
          document.getElementById('adminout').style.display="none";
        
          alert("increct pass or uesr")
          
        }
      }
      
      
      function adminout(){
        document.getElementById('adminlogin').style.display="block";
          document.getElementById('userdata').style.display="none";
          document.getElementById('adminout').style.display="none";
          
      } 
/////geolocation/////
