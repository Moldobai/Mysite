 
  

 $(document).ready(function(){

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:true
  });
//  Menu 
   

$(function(){
  $('.nav-link').on('click', function(event){
      event.preventDefault();
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 0
      }, 1000)

  })
})

  

















})