/*var ban = ban || {};

! function (param) {
    var global = param.g,
        $ = param.jQ;

    ban.slider = function (selector, options) {

        var container = $(selector),
            detect = {},
            config = {
                speed: 500,
                isSelected: 'active',
                autoPlay: true,
                duration: 5000
            };

        if (!container.length) {
            return;
        }

        $.extend(config, options);

        function setting() {

            detect.$listBox = container.find('.imgs');
            detect.$lists = detect.$listBox.children('li');
            detect.width = detect.$listBox.width();
            detect.$indicate = container.find('.indi a');
            detect.view = '.imgs';
            detect.indicate = '.indi a';
            detect.prev = '.btn-prev';
            detect.next = '.btn-next';
            detect.ctrl = '.btn-ctrl';
            detect.max = detect.$indicate.length - 1;
            detect.min = 0;
            detect.currentIndex = 0;
            detect.selectedIndex = null;
            detect.intervalId = null;

        }
        setting();


        function next(evt) {

            if (evt.type === 'mouseenter') {
                clearInterval(detect.intervalId);
                return false;
            }

            detect.selectedIndex = detect.currentIndex + 1;
            if (detect.selectedIndex > detect.max) {
                detect.selectedIndex = 0;
            }

            toMove(detect.selectedIndex, detect.width);

        }

        function prev(evt) {

            if (evt.type === 'mouseenter') {
                clearInterval(detect.intervalId);
                return false;
            }

            detect.selectedIndex = detect.currentIndex - 1;
            if (detect.selectedIndex < detect.min) {
                detect.selectedIndex = detect.max;
            }
            toMove(detect.selectedIndex, -detect.width);
        }

        function direction(selectedIndex) {
            return detect.currentIndex < selectedIndex ? 'goToRight' : 'goToLeft';
        }

        function toMove(selectedIndex, offset) {

            if (detect.selectedIndex == detect.currentIndex) return;
            if (detect.$lists.is(':animated')) return;

            detect.$lists.eq(selectedIndex).css({
                'left': offset
            }).addClass(config.isSelected);
            detect.$lists.eq(selectedIndex).animate({
                'left': 0
            }, config.speed);

            detect.$indicate.eq(detect.currentIndex).removeClass(config.isSelected);
            detect.$indicate.eq(selectedIndex).addClass(config.isSelected);

            detect.$lists.eq(detect.currentIndex).animate({
                'left': -offset
            }, config.speed, function () {
                afterMoving(selectedIndex);
            });
        }

        function afterMoving(selectedIndex) {
            detect.$lists.eq(detect.currentIndex).removeClass(config.isSelected);
            detect.currentIndex = selectedIndex;
        }


        $(document)
            .on('click.slide.indicate', detect.indicate, function () {
                detect.selectedIndex = $(this).index();
                var position = direction(detect.selectedIndex),
                    offset = null;

                switch (position) {
                    case 'goToRight':
                        offset = detect.width;
                        break;
                    case 'goToLeft':
                        offset = -detect.width;
                }
                toMove(detect.selectedIndex, offset);
            })
            .on('click.slide.next, mouseenter', detect.next, next)
            .on('click.slide.prev, mouseenter', detect.prev, prev)
            .on('click.slide.ctrl', detect.ctrl, controller);

        function startInterval() {
            detect.intervalId = setInterval(autoMoving, config.duration);
        }

        function autoMoving() {
            $(detect.next).trigger('click');
        }

        config.autoPlay ? startInterval() : controlState();

        function controller() {
            var $target = $(this);
            if ($target.is('.auto')) {
                clearInterval(detect.intervalId);
                $target.removeClass('auto').text('재생');
            } else {
                $target.addClass('auto').text('정지');
                startInterval();
            }
        }

        /*  function controlState() {
              $(detect.ctrl).removeClass('auto').text('재생')
          }*/

/*$(detect.view + "," + detect.indicate).on({
            'mouseenter': function () {
                clearInterval(detect.intervalId);
            },
            'mouseleave': function () {
                if (!$(detect.ctrl).is('.auto')) {
                    return;
                }
                startInterval();
            }
        });

    };

}({
    g: window,
    jQ: window.jQuery
});



$(function () {
    ban.slider('#slider01');
})  */

/*
$(function () {
    //start
   

    var slide = $('.banner .imgs');
    var len = $('.banner .imgs li').length;
    var num = 0;

    var first = $('.imgs li:first').clone();
    var last = $('.imgs li:last').clone();

    slide.append(first);
    slide.prepend(last);

    $('.imgs li').each(function (i) {
        if (i == 0) {
            pos = '-100%';
        } else {
            pos = 100 * (i - 1) + '%';
        }

        $(this).css({
            left: pos
        });
    });

    function aniFun() {
        $('.banner .imgs').animate({
            left: -100 * num + '%'
        }, 800, callbak);

        function callbak() {
            console.log(num)
            if (num == len) {
                num = 0;

                $('.banner .imgs').animate({
                    left: -100 * num + '%'
                }, 0);
            }

            if (num == -1) {
                num = len - 1;

                $('.banner .imgs').animate({
                    left: -100 * num + '%'
                }, 0);
            }
        }
    }


    $('.butn a').on('click', function () {
        var idx = $(this).index();

        if (idx == 0) {
            num--;
            aniFun();
        } else {
            num++;
            aniFun();
        }
    });





    //end
});
*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
