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

        },
        headerFn:   function(){
            var winW = $(window).width();
            var url = null;  
            var t=0;  
                //Smooth Scrolling Event : <a href= #해시태그 가져와서 부드럽게 해당 섹션으로 이동
                $('.smooth-btn').on({
                    click:  function(event){
                        event.preventDefault();
                        url = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop: $( url ).offset().top  }, 600);
                        $('.mobile-menu').hide();
                        $('.mobile-btn').removeClass('addClose');                        
                    }
                });

                

                $(window).scroll(function(){
                    if( $(window).scrollTop() >= 30 ) {
                        $('#header').addClass('addMobile');
                        $('.goTop').addClass('addGotop');
                    }
                    else{
                        $('#header').removeClass('addMobile');
                        $('.goTop').removeClass('addGotop');
                    }
                });


                $(window).resize(function(){
                    winW = $(window).width();                    
                    if( winW>990 ){
                        $('.mobile-btn').removeClass('addClose');
                        $('.mobile-menu').stop().slideUp(0);
                    }    
                });

                $('.mobile-btn').on({
                    click:  function(event){
                        event.preventDefault();
                        $(this).toggleClass('addClose');
                        if(t==0){
                            t=1;
                            $('.mobile-menu').stop().animate({right:0},400);
                        }
                        else{
                            t=0;
                            $('.mobile-menu').stop().animate({right:-100+'%'},400);
                        }
                        
                        
                    }
                });



        },
        section01Fn: function(){

            //섹션1의 높이는 창(Window) 높이(Height)로 설정
            //반응형 설정 $(window).scroll();
            //반응형 설정 $(window).resize();
            var winH = 969;
            var imgH = $('.hungry img').height();
            var imgTop = (winH-imgH)/2;
            //탑값 = (창높이-로고이미지높이)/2;
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


                //Smooth Scrolling Event
                $('.arrow-down-btn').on({
                    click:  function(){
                        $('html,body').stop().animate({ scrollTop: $('#section02').offset().top }, 1000);
                    }
                });


        },
        section234Fn: function(){

            //content-wrap 이 박스의 top 값 height 값을 반응형으로 계산
            //top 값은 창 높이가 바뀌면 계산 값도 바뀌어야한다. 자동화 $(window).resize();
            //height 값은 content-wrap 박스의 너비가 바뀌면 높이도 같은 비율로 바뀐다.
            //박스의 높이(550) = 박스의 너비(450) * 높이의비율값 1.222222222
            //boxH = boxW * 1.222222222

            //창높이가 박스 높이보다 작으면 섹션2,3,4의 높이를 박스높이로 설정
            //그렇지 않으면 섹션2,3,4의 높이는 창높이로 설정
            //결론은 섹션2,3,4의 높이는 최소 박스높이 이상 이어야 한다.
            //섹션234의 높이 = 창높이 < 박스높이 ? 박스높이 : 창높이
            //sectionH = winH < boxH ? boxH : winH

            //조건 창 너비가 1170이하이면 박스를 가운데 정렬 애니메이션
            // right값 또는 left값 = (창너비-박스너비)/2
            // x = (winW-boxW)/2 

            // 박스탑값 = (창높이-박스높이)/2
            // boxTop = (winH-boxH)/2

            var winH = $(window).height();  //969
            var sectionH = winH;
            var boxW = $('.content-wrap').width();  //450
            var boxH = boxW * 1.222222222; //550
            var boxTop = (winH-boxH)/2;  // 209.5.=(969-550)/2
            var winW = $(window).width();  //969
            var x = (winW-boxW)/2;

                setTimeout(resizeFn,100);

                function resizeFn(){
                    winH = $(window).height();  //969
                    sectionH = winH;
                    boxW = $('.content-wrap').width();  //450
                    boxH = boxW * 1.222222222; //550   
                    winW = $(window).width();  //969
                    x = (winW-boxW)/2;                                     
                    // boxTop = (winH-boxH)/2;  // 209.5.=(969-550)/2
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
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:x-15 },300);
                        $('#section03 .content-wrap').stop().animate({ left:x-15 },300);   
                    }
                    else{
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:0 },100);
                        $('#section03 .content-wrap').stop().animate({ left:0 },100);    
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
        section14Fn: function(){

        }        
    };

    brando.init();


})(window,document,jQuery);