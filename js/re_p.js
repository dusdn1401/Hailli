/*$(function () {

    var imgAll = document.querySelectorAll('.tab .tab-body a img')

    var imgLarge = document.querySelector('.tab  p img')

    for (var i = 0; i < imgAll.length; i++) {
        imgAll[i].addEventListener('click', changeImg)
        //strImg.src = strFun2.replace;
    }

    function changeImg() {
        var a = this.src
        imgLarge.src = a;
    }
    $('#text').on('keyup', function () {
        if ($(this).val().length < 20) {
            $(this).val($(this).val().substring(0, 20))
        } else {
            alert('한글 15자, 영어 20자까지 가능합니다.(띄어쓰기 포함)')
        }
    })


});*/
/*========================================*/

//$(function () {

/*$('#size').click(function () {
    var value1 = $(this).val();
    
   $('input[name=first]').val(value1);
    console.log(value1);
});*/
/* $('input[name=size]').on('click', function () {
     var value1 = $(this).val();

     $('input[name=first]').val(value1);
     console.log(value1);

 });*/

//var tmp1 = document.getElementsByName("size").value;
//var val2 = 0;
/*
    $('tmp1').on('click', function () {
       val2 = $(this).val();
        consol.log(val2);
        $("#first").val(val2);

    })*/

/*
tmp1.addEventListener('click', function () {
    val2 = this.val();
    consol.log(val2);


})

*/



//});

//window.addEventListener('DOMContentLoaded', sumCheck())

/*

$(function sum_check() {

    //var sum3 = sum1 + sum2;

    $('.re input[name=size]').on('click', function () { //케이크사이즈
        var value1 = $(this).val();

        $('input[name=sum1]').val(value1);
        console.log(value1);
    });

    $('.re input[name=shape]').on('click', function () { //모양
        var value2 = $(this).val();
        $('input[name=sum2]').val(value2);
        console.log(value2);
    });

    $('.re input[name=sheet]').on('click', function () { //시트 맛
        var value3 = $(this).val();
        $('input[name=sum2]').val(value3);
        console.log(value3);
    });

    $('.re input[name=cream]').on('click', function () { //생크림모양
        var value4 = $(this).val();
        $('input[name=sum2]').val(value4);
        console.log(value4);
    });

    $('.re input[name=option]').on('click', function () { //옵션
        var value5 = $(this).val();
        $('input[name=sum2]').val(value5);
        console.log(value5);
    });

    function total() {
        var sum3 = document.getElementById('.re input[name=size]').value + document.getElementById('.re input[name=shape]').value;
        //        document.getElementById('.re input[name=sum3]').value = sum;
    }

    //3자리 수마다 ',' 찍어주는 함수
    // function MoneySwap(mValue)
    // {
    //  var temp_str = String(mValue);
    //  for(var i = 0 , retValue = String() , stop = temp_str.length; i < stop ; i++)
    //  {
    //   retValue = ((i%3) == 0) && i != 0 ? temp_str.charAt((stop - i) -1) + "," + retValue : temp_str.charAt((stop - i) -1) + retValue;
    //  }
    //  return retValue;
    // }
});
*/
/*======================================================*/

$(this).click(
    function sum_check() {
        var val1 = 0;
        var val2 = 0;
        var val3 = 0;
        var val4 = 0;


        var tmp1 = document.getElementsByName("size");
        for (i = 0; tmp1.length > i; i++) {
            if (tmp1[i].checked) {
                var val2 = parseInt(tmp1[i].value, 10);
            }
        }

        $("#first").val(val2);


        var tmp2 = document.getElementsByName("shape");
        for (i = 0; tmp2.length > i; i++) {
            if (tmp2[i].checked) {
                var val3 = val3 + parseInt(tmp2[i].value, 10);
            }
        }

        var tmp3 = document.getElementsByName("cream");
        for (i = 0; tmp3.length > i; i++) {
            if (tmp3[i].checked) {
                var val4 = val4 + parseInt(tmp3[i].value, 10);
            }
        }
        $("#second").val(val3 + val4);

        var sum = val2 + val3 + val4;

        $("#tot").val(sum);
    }
);
