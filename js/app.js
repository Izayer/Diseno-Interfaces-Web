$(document).ready(function(){

//desbinkulatzeko li-ko click ebentuak
//$('.navbar-nav li').unbind('click');
//navbar li aktibatu ta deskatibatzeko


//parallax
$('.parallax-window').parallax();


$(window).scroll(function () { 

    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 162) {
      $('#nabigatzailea').addClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() < 162) {
      $('#nabigatzailea').removeClass('navbar-fixed-top');
    }
  });


$('a[href*="#"]:not([href="#"])').click(function() {
    
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});
$('.navbar-nav li').click(function(item){$(this).siblings().removeClass('active');$(this).addClass('active');});

});

$(window).scroll(function () { 

    

    if ($(window).scrollTop() > 1100) {
      $('#gu').addClass('active');
    }

    if ($(window).scrollTop() < 1100|| $(window).scrollTop() > 1776 ) {
      $('#gu').removeClass('active');
    }
    if ($(window).scrollTop() >= 1776) {
      $('#formakuntza').addClass('active');
    }

    if ($(window).scrollTop() < 1776 || $(window).scrollTop() > 2500) {
      $('#formakuntza').removeClass('active');
    }
  });
