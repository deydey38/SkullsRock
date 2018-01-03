window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");

function myFunction() {
  if (window.pageYOffset >= 10) {
    navbar.classList.add("sticky");
    logo.classList.add("sticky-title");
  } else {
    navbar.classList.remove("sticky");
    logo.classList.remove("sticky-title");
  }
}

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  var op = 0.3+wScroll/1000;

  console.log(wScroll);
  $(".logo").css({
    'transform':'translate(0px, '+wScroll/1.75+'px)'
  });

  $(".filter").css({
    'background-color' : 'rgba(0, 0, 0, '+op+')'
  });

  if(wScroll > $('.groupe-h1').offset().top - $(window).height()/1.5){
    $('.groupe-h1').addClass("is-showing");
  }

  if(wScroll > $('.row').offset().top - $(window).height()/1.5){
    $('.row').addClass("is-showing");
  }

});
