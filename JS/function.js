window.onscroll = function() {myFunction()};


function myFunction() {
  if (window.pageYOffset >= 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  console.log(wScroll);
  $(".band").css({
    'transform':'translate(0px, '+wScroll+'%)'
  });
});
