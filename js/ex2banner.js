  var mySwiper = new Swiper('.swiper-container',{
    pagination: '.pagination',
    loop:true,
    autoplay: 1000,
    paginationClickable: true
  })
  $('.swiper-container').on('mouseenter', function(e){
    console.log('stop autoplay');
    mySwiper.stopAutoplay();
  })
  $('.swiper-container').on('mouseleave', function(e){
    console.log('start autoplay');
    mySwiper.startAutoplay();
  })