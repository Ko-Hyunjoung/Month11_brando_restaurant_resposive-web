;(function(window,document,$,undefined){

    var brando = {

        init:       function(){
            var that = this;

                that.headerFn();
                that.section01Fn();
                that.section02Fn();
                that.section03Fn();
                that.section04Fn();
                that.section05Fn();
                that.section06Fn();
                that.section07Fn();
                that.section08Fn();
                that.section09Fn();
                that.section10Fn();
                that.section11Fn();
                that.section12Fn();
                that.section13Fn();
                that.section14Fn();
        },
        headerFn:   function(){
            var winH = $(window).width();
            var url = null;

            //Smooth Scrolling Event: a href 속성값 #해시태그 가져와서 부드럽게 해당 섹션으로 이동
            $('.smooth-btn').on({
                click: function(){
                    event.preventDefault();
                    url = $(this).attr('href');
                    $('html,body').stop().animate({scrollTop: $(url).offset().top }, 600);
                    $('.mobile-menu').hide();
                    $('.mobile-btn').removeClass('addClose');
                }
            });


            $(window).scroll(function(){
                if( $(window).scrollTop() >= 30){
                    $('#header').addClass('addMobile');
                    $('.goTop').addClass('addGoTop');
                }
                else{
                    $('#header').removeClass('addMobile');
                    $('.goTop').removeClass('addGoTop');
                }
            });

            $(window).resize(function(){
                winH = $(window).width();
                if( winH > 990){
                    $('.mobile-btn').removeClass('addClose');
                    $('.mobile-menu').stop().slideUp(0);
                }
            });



            $('.mobile-btn').on({
                click: function(){
                    event.preventDefault();
                    $(this).toggleClass('addClose');
                    $('.mobile-menu').stop().slideToggle(300);
                }
            });
        },





        section01Fn: function(){
            //섹션1의 높이는 창(window) 높이(height)로 설정
            //반응형 설정 $(window).scroll();
            //반응형 설정 $(window).resize(); 크기를 변화시켰을 때의 크기를 찾는 거지
            var winH = 969;
            var imgH = $('.hungry').height();
            var imgTop = (winH-imgH)/2;
            //탑값 = (창높이 - 로고이미지높이)/2
            //imgTop = (winH-imgH)/2

                setTimeout(resizeFn,100);
                function resizeFn(){
                    winH = $(window).height();
                            $('#section01,#section02,#section03,#section04').css({ height:winH });
                            imgH = $('.hungry').height();
                            imgTop = (winH-imgH)/2;
                            $('.hungry').css({ top:imgTop });
                }

                $(window).resize(function(){
                    resizeFn();
                });


                //smooth scrollong event
                $('.arrow-down-btn').on({
                    click: function(){
                        $('html,body').stop().animate({ scrollTop: $('#section02').offset().top },500);     
                    }
                });

        },
        section02Fn: function(){
            var txtBoxW = 0;
            // var fonRateH3 = h3글자크기/텍스트박스너비
            var fonRateH3 = 0.082758621
            var fonRateH4 = 0.03793103;
            var fonRateP = 0.04827586;
            // var fontSizeH3 = 텍스트박스너비*24px짜리의비율
            var fontSizeH3 = 0;
            var fontSizeH4 = 0;
            var fontSizeP = 0;
            var boxHRate = 1.22222222;
            var boxW = 450;
            // var 박스높이 = 박스너비*박스높이의비율;
            var boxH = boxW*boxHRate;
            var winH = $(window).height();
            // var boxT = (창높이 - 박스높이)/2
            var boxT = (winH - boxH)/2
            var winW = $(window).width();
            // 박스right값 = (창너비-박스너비)/2
            var boxR = (winW-boxW)/2;
            // 박스left값 = (창너비-박스너비)/2
            var boxL = (winW-boxW)/2;

                setTimeout(resizeFn,100);
                

            function resizeFn(){
                txtBoxW = $('.content-wrap').width();
                boxW = $('.content').width();
                boxH = boxW*boxHRate;
                fontSizeH3 = txtBoxW*fonRateH3;
                fontSizeH4 = txtBoxW*fonRateH4;
                fontSizeP  = txtBoxW*fonRateP;
                winH = $(window).height();
                boxT = (winH - boxH)/2
                winW = $(window).width(); 
                boxR = (winW-boxW)/2;
                boxL = (winW-boxW)/2;


                    $('.content-wrap h3').css({fontSize:fontSizeH3});
                    $('.content-wrap h4').css({fontSize:fontSizeH4});
                    $('.content-wrap p').css({fontSize:fontSizeP});
                    $('.content').css({height:boxH,top:boxT});

                    //창너비가 1170이하이면 실행
                    if( winW <= 1170 ){
                        $('.content24').stop().animate({right:boxR},300);
                        $('.content3').stop().animate({left:boxL},300);
                    }
                    else{
                        $('.content24').stop().animate({right:0},300);
                        $('.content3').stop().animate({left:0},300);
                    }
            }

            $(window).resize(function(){
                resizeFn();
            });

        },
        section03Fn: function(){

        },
        section04Fn: function(){

        },
        section05Fn: function(){

        },
        section06Fn: function(){

        },
        section07Fn: function(){

        },
        section08Fn: function(){

        },
        section09Fn: function(){

        },
        section10Fn: function(){

        },
        section11Fn: function(){

        },
        section12Fn: function(){

        },
        section13Fn: function(){

        },
        section13Fn: function(){

        },
        section14Fn: function(){

        }
    };

    brando.init();

})(window,document,jQuery);