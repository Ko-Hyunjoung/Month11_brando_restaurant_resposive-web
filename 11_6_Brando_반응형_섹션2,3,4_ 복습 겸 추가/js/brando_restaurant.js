;(function(window,document,$,undefined){

    var brando = {
        init:       function(){
            var that = this;

                that.headerFn();
                that.section01Fn();
                that.section234Fn();
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
            var imgH = $('.hungry img').height();
            var imgTop = (winH-imgH)/2;
            //탑값 = (창높이 - 로고이미지높이)/2
            //imgTop = (winH-imgH)/2

                setTimeout(resizeFn,100);
                function resizeFn(){
                    winH = $(window).height();
                            $('#section01').css({ height:winH });
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
                        $('html,body').stop().animate({ scrollTop: $('#section02').offset().top },700);     
                    }
                });

        },
        section234Fn: function(){
         
            //content-wrap 이 박스의 top값과 height값을 반응형으로 자동화 계산
            //top값은 창 높이가 바뀌면 계산값도 반응형으로 바뀌어야합니다. resize메서드로
            //height값은 content-wrap 박스의 너비가 바뀌면 높이도 같은 비율로 바뀌어야하죠. 
            //박스의 높이(550) = 박스 너비(450) * 높이 비율값 1.222222222
            //boxH = boxW * boxHRate(1.2222222)

            //창높이가 박스 높이보다 작으면 섹션2,3,4의 높이를 박스높이로 설정
            //그렇지 않으면 섹션2,3,4의 높이는 창높이로 설정
            //결론은 섹션2의 높이는 최소 박스높이 이상이어야 한다.
            //섹션234의 높이 = 창높이 < 박스높이 ? 박스높이 : 창높이
            //sectionH = winH < boxH ? boxH : winH

            //창 너비가 1170이하이면 박스를 가운데 정렬 애니메이션
            // right값 또는 left값 = (창너비-박스너비)/2
            // x = (winW-boxW)/2 
            
            //박스탑값 = (창높이-박스높이)/2
            //boxTop = (winH-boxH)/2
            var winW = $(window).width();
            var winH = $(window).height();  //969
            var sectionH= winH;
            var boxW = $('.content-wrap').width();
            var boxH = boxW*1.222222; //550
            var boxTop = (winH - boxH)/2;  //209.5 = (969-550)/2
            var x = (winW-boxW)/2;

                setTimeout(resizeFn,100);

                function resizeFn(){
                        winW = $(window).width();
                        winH = $(window).height();  //969
                        sectionH= winH;
                        boxW = $('.content-wrap').width();
                        boxH = boxW*1.222222;
                        x = (winW-boxW)/2;
                        // boxTop = (winH - boxH)/2;  //209.5 = (969-550)/2
                        //박스높이보다 창높이가 작을 때 섹션높이는 박스 높이로 설정 됨.
                        //그러니 박스의 탑값은 창높이랑 박스높이랑 같기 때문에 0으로 설정한다.
    
                    if( winH < boxH ){
                        sectionH = boxH;
                        boxTop = 0;
                    }
                    else{
                        sectionH = winH;
                        boxTop = (winH-boxH)/2;
                    }
                    
                    $('.content-wrap').css({ top:boxTop, height:boxH });
                    $('.section234').css({ height:sectionH });
    
                    if( winW <= 1170 ){
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:x-15 }, 300);
                        $('#section03 .content-wrap').stop().animate({ left:x-15 },300);
                    }
                    else{
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:0 },200);
                        $('#section03 .content-wrap').stop().animate({ left:0 },200);
                    }
                }
    
                $(window).resize(function(){
                    resizeFn();
                });
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