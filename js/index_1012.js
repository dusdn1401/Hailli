/* $(function () {
     //start

     //          preppend, append;
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
             //prev
             num--;
             aniFun();
         } else {
             num++;
             aniFun();
         }
     });
     //end
 });*/
 /*=========================*/


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
