$(function(){
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 3800);
    event.preventDefault();
  });
});