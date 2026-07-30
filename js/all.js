

$(document).ready(function() {
    
    // [響應式字體大小設定]依視窗寬度動態設定html根字體大小 => 1920px設計稿時，1rem=100px，最小以 1000px 計算），讓 rem 版面隨螢幕等比例縮放
    function fontSize() {
      var a = document.documentElement.clientWidth < 1000 ? 1000 : document.documentElement.clientWidth;
      document.documentElement.style.fontSize = (a / 19.2) + "px"
    }
    fontSize();
    window.addEventListener('resize', fontSize);

    // sideBar
    $('.switch').click(function(e) {
      e.preventDefault();
      $('.sideBar').toggleClass('barClose');
    });


    // eve2-popUp
    $('.event2 li, .popUp1 a, .popUp2 a, .popUp-history-close').click(function(e){
      e.preventDefault();
    });

    // eve2-popUp3 - history5
    $('#revealed-history #history_5').click(function() {
     $('.popUp-history5').fadeIn(250);
    });
    $('.popUp-history-close').click(function() {
     $('.popUp-history5').fadeOut(250);
    });

    // eve2-popUp3 - history4
    $('#revealed-history #history_4').click(function() {
     $('.popUp-history4').fadeIn(250);
    });
    $('.popUp-history-close').click(function() {
     $('.popUp-history4').fadeOut(250);
    });
    
    // eve2-popUp3 - history3
    $('#revealed-history #history_3').click(function() {
     $('.popUp-history3').fadeIn(250);
    });
    $('.popUp-history-close').click(function() {
     $('.popUp-history3').fadeOut(250);
    });

    // eve2-popUp3 - history2
    $('#revealed-history #history_2').click(function() {
      $('.popUp-history2').fadeIn(250);
     });
     $('.popUp-history-close').click(function() {
      $('.popUp-history2').fadeOut(250);
     });

    // eve2-popUp3 - history1
    $('#revealed-history #history_1').click(function() {
     $('.popUp-history1').fadeIn(250);
    });
    $('.popUp-history-close').click(function() {
     $('.popUp-history1').fadeOut(250);
    });

    // eve2-popUp2 - received
    $('#revealed li').click(function() {
     $('.popUp2').show();
    });
    $('.popUp-recived-close').click(function() {
     $('.popUp2').hide();
    });

    // eve2-popUp1 - login
    $('#revealed li').click(function() {
     $('.popUp1').show();
    });
    $('.popUp-login-close').click(function() {
     $('.popUp1').hide();
    });


    // scroll fadeIn
    // $(window).scroll(function(){
    //     var scrollPos = $(window).scrollTop();
    //     var windowHeight = $(window).height(); 
        
    //     // sideBar
    //     if ($(window).scrollTop() > 1200) {
    //         $('aside').fadeIn(500);
    //       } else {
    //         $('aside').fadeOut(500);
    //     };

    //     // section - title & text
    //     $('.hide').each(function(){
    //     var thisPos = $(this).offset().top;
    //     if((windowHeight + scrollPos) >= thisPos + 300) {
    //     $(this).addClass('fadeIn');
    //     }
    //     }); 
   
    // Create a MediaQueryList object
    var x = window.matchMedia('(max-width: 999px)')
        
    });  



