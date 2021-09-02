$(document).ready(function () {
// sticky nav scroll

$(window).on('scroll',function() {
  if($(window).scrollTop()){
    $('.scroll-header').addClass('white');
  }
  else{
    $('.scroll-header').removeClass('white');
  }
  
});

// scroll btn
$(function(){
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 1000, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 400, // Animation in speed (ms)
    animationOutSpeed: 400, // Animation out speed (ms)
    scrollText: 'Scroll to top', // Text for element
    activeOverlay:false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});

  // button animation
  $( ".button_su_inner" ).mouseenter(function(e) {
    var parentOffset = $(this).offset(); 
   
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
 
 });
 
 $( ".button_su_inner" ).mouseleave(function(e) {
 
      var parentOffset = $(this).offset(); 
 
      var relX = e.pageX - parentOffset.left;
      var relY = e.pageY - parentOffset.top;
      $(this).prev(".su_button_circle").css({"left": relX, "top": relY });
      $(this).prev(".su_button_circle").removeClass("explode-circle");
      $(this).prev(".su_button_circle").addClass("desplode-circle");
 
 });
 

      });

