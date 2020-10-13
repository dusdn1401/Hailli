window.addEventListener('DOMContentLoaded', function () {
    $(function () {

        $('.imgs a').not(':first').hide();

        var idx = 0;
        var loop;

        function fade(a) {
            $('.imgs a').eq(idx).fadeOut(5000);

            if (a == 'banner2') {
                idx--
            } else {
                idx++;
            }
            update();
            $('.imgs a').eq(idx).fadeIn(5000);
        }

        function update() {
            var len = $('a').length;
            if (idx >= len) idx = 0;
            if (idx == -1) idx = len - 1;
        }

        function clearFun() {
            clearInterval(loop);
        }

        function interFun() {
            loop = setInterval(fade, 2000);
        }

        function btn() {
            if ($(this).index() == 0) {
                button(0);
            } else {
                button[1];
            }
        }


        $('.imgs ,.butn').on({
            mouseenter: clearFun,
            mouseleave: interFun
        });

        //prev, next click event
        $('.butn').on('click', btn);

        interFun();

    })
});


 $(function() {
            //start

            //          preppend, append;
            var slide = $('.banner .imgs');
            var len = $('.banner .imgs li').length;
            var num = 0;

            var first = $('.imgs li:first').clone();
            var last = $('.imgs li:last').clone();

            slide.append(first);
            slide.prepend(last);

            $('.imgs li').each(function(i) {
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


            $('.butn a').on('click', function() {
                var idx = $(this).index();

                if (idx == 0) {
                    //prev
                    num--;
                    aniFun();
                } else {
                    num++;
                    aniFun();
                }
            });





            //end
        });
