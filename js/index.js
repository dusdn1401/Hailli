
$(function () {
    $(".banner .imgs").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    });

   /* if ($(window).width() <= 720) {
        $('.bn a img').eq(1).attr('src', 'img/m1banner.jpg');

        $('.bn a img').eq(2).attr('src', 'img/m2banner.jpg');

    }
*/

});
