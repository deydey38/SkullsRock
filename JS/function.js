window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var bandName = document.getElementById("bandName");

function myFunction() {
  if (window.pageYOffset >= 700) {
    navbar.classList.add("sticky");
    bandName.classList.add("sticky-title");
  } else {
    navbar.classList.remove("sticky");
    bandName.classList.remove("sticky-title");
  }
}

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  console.log(wScroll);
  $(".band").css({
    'transform':'translate(0px, '+wScroll+'%)'
  });
  var op = 0.3+wScroll/1000;
  $(".filter").css({
    'background-color' : 'rgba(0, 0, 0, '+op+')'
  });
});
