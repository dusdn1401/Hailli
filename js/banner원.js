window.addEventListener('DOMContentLoaded', function () {
    $(function () {
        $('.imgs').not(':first').hide();
        /*첫번째를 제외하고 display:none 처리 하겠다는 의미*/

        /*$('figure').eq(0).show();
        $('figure').eq(1).show();*/

        var idx = 0;
        var loop;


        /*$('button').on('click', function(){}*/
        function fade(p) {
            $('.imgs a').eq(idx).fadeOut(1000);
            if (p == 'next' /*|| p == undefind*/ ) {
                idx++
            } else {
                idx--;
            }
            update();
            $('.imgs a').eq(idx).fadeIn(1000);
        }

        function update() {
            /*    var len = $('figure').length;
                if (idx >= len) idx = 0;*/
            /*이미지 전체수 보다 idx가 작거나 같으면
            idx=0 으로 만들기*/
            /*fade();*/

            var len = $('.imgs a').length;
            if (idx >= len) idx = 0;
            if (idx == -1) idx = len - 1;
            /*  $('code').text('idx = ' + idx);*/


        }

        /* $('.fade div ,button').on('mouseenter', clearFun);*/

        function clearFun() {
            clearInterval(loop);
        }

        function interFun() {
            loop = setInterval(fade, 3000);
        }

        function btn() {
            if ($(this).index() == 0) {
                fade('banner');
            } else {
                fade('banner2');
            }
        }


        $('.imgs a ,indi').on({
            mouseenter: clearFun,
            mouseleave: interFun
        });

        //prev, next click event
        $('.indi').on('click', btn);

        interFun();

    })

    var ban = document.querySelector('.imgs');
    var banEle = document.querySelectorAll('.imgs a');
    var indi = document.querySelector('.indi');

    banEle.forEach(function () {
        var aTag = document.createElement('a');
        indi.appendChild(aTag);
    })

    var indiEle = document.querySelectorAll('.indi a');
    indiEle[0].classList.add('active');


    setTimeout(function () {
        window.scrollTo(0, 0);
    }, 10)

    banEle.forEach(function (el, idx) {
        el.addEventListener('click', function (e) {
            if (e.wheelDelta < 0) {

                try {
                    move = el.nextElementSibling.offsetLeft;
                    indiEle[idx].classList.remove('active');
                    indiEle[idx].nextElementSibling.classList.add('active')
                } catch {}
            } else {


                try {
                    move = el.previousElementSibling.offsetLeft;
                    indiEle[idx].classList.remove('active');
                    indiEle[idx].previousElementSibling.classList.add('active')
                } catch {}
            }
            conEle.style.transform = "translateX(-" + move + "px)";
        });


    })
})
