$(function () {
    $(".banner .imgs").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    });

    var bnData = [];
    var bnMdata = [];
    var bnLen = $('.bn').length;

    $('.bn a img').each(function (i) {
        bnData.push($(this).attr('src'));
        bnMdata.push(bnData[i].replace('.jpg', '_m.jpg'));
    });

    function aa() {
        console.log('aa');

        if ($(window).width() > 720) {
            $('.slick-slide').each(function (i) {
                if (i == 0) {
                    $(this).find('img').attr('src', bnData[1]);
                } else {
                    if (i <= bnLen) {
                        $(this).find('img').attr('src', bnData[i - 1]);
                    } else {
                        $(this).find('img').attr('src', bnData[i - (bnLen + 1)]);
                    }
                }

            });
        } else {
            $('.slick-slide').each(function (i) {
                if (i == 0) {
                    $(this).find('img').attr('src', bnMdata[1]);
                } else {
                    if (i <= bnLen) {
                        $(this).find('img').attr('src', bnMdata[i - 1]);
                    } else {
                        $(this).find('img').attr('src', bnMdata[i - (bnLen + 1)]);
                    }
                }

            });



        }


    }

aa();
    $(window).resize(aa);


});
