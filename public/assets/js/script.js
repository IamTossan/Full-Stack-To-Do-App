$(document).ready(function(){

  if( $(window).width() < 768) {
    $('.link').addClass('btn btn-default');
    $('#contact h3').addClass('h4');

  }


  $(window).resize(function() {

    if($(window).width() < 768) {
      $('.link').addClass('btn btn-default');
      $('#contact h3').addClass('h4');

    }
    else{
      $('.link').removeClass('btn btn-default');
      $('#contact h3').removeClass('h4');
      
    }
  });

});
