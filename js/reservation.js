  $(function () {

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
          }else{alert('한글 15자, 영어 20자까지 가능합니다.(띄어쓰기 포함)')}
      })


  });
  /*========================================*/
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


      var tmp2 = document.getElementsByName("op");
      for (i = 0; tmp2.length > i; i++) {
          if (tmp2[i].checked) {
              var val3 = val3 + parseInt(tmp2[i].value, 10);
          }
      }

      var tmp3 = document.getElementsByName("sheet");
      for (i = 0; tmp3.length > i; i++) {
          if (tmp3[i].checked) {
              var val4 = val4 + parseInt(tmp3[i].value, 10);
          }
      }
      $("#second").val(val3 + val4);

      var sum = val2 + val3 + val4;

      $("#tot").val(sum);
  }
