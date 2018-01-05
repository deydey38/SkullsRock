$(document).ready(function(){

  setTimeout(function(){
    $(".arrow").css({
      'color' : 'rgba(255, 255, 255, '+1+')'
    });
  },500);

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
    var arrowOpa = 1-wScroll/100;

    console.log(wScroll);
    $(".logo").css({
      'transform':'translate(0px, '+wScroll/1.75+'px)'
    });

    $(".filter").css({
      'background-color' : 'rgba(0, 0, 0, '+op+')'
    });

    $(".arrow").css({
      'color' : 'rgba(255, 255, 255, '+arrowOpa+')'
    });

    if(wScroll > $('.groupe-h1').offset().top - $(window).height()/1.5){
      $('.groupe-h1').addClass("is-showing");
    }

    if(wScroll > $('.group-row').offset().top - $(window).height()/1.5){
      $('.group-row').addClass("is-showing");
    }

    if(wScroll > $('.img-container').offset().top -100- $(window).height()/1.5){
      $('.img-row .portrait').each(function(i){
        setTimeout(function(){
          $('.img-row .portrait').eq(i).addClass("is-showing");
        }, 150 * (i+1));
      });
    }

    if(wScroll > $('.tour-h1').offset().top - $(window).height()/1.5){
      $('.tour-h1').addClass("is-showing");
    }

    if(wScroll > $('.contact-h1').offset().top - $(window).height()/1.5){
      $('.contact-h1').addClass("is-showing");
    }

    if(wScroll > $('.contact-row').offset().top - $(window).height()/1.5){
      $('.contact-row').addClass("is-showing");
    }

    if(wScroll > $('.tour-row').offset().top - $(window).height()){

      var offset = Math.min(0, wScroll - $('.tour-row').offset().top + $(window).height()-350);

      $('.date-1').css({'transform': 'translate('+offset+'px, '+Math.abs(offset*0.2)+'px)'});
      $('.date-3').css({'transform': 'translate('+Math.abs(offset)+'px, '+Math.abs(offset*0.2)+'px)'});
    }

  });

  $('.arrow').on('click', function (e) {
      e.preventDefault();
      var targetSec = "#groupe";
      var off = $(targetSec).offset();
      console.log("offset "+off);
      $('html, body').animate({'scrollTop': off.top}, 1500, 'swing');
    });
});
