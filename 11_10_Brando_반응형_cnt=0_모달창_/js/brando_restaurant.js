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
            var cnt = 0;
            var n = $('.slide').length-1; //3-1 인덱스번호는 0부터 시작하니까
            var winH = 969;
            var imgH = $('.hungry img').height();
            var imgTop = (winH-imgH)/2;

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

                //메인 다음 슬라이드
                //포인트: 현재 슬라이드 위에 다음 슬라이드가 서서히 나타난다.
                function mainNextSlideFn(){
                    $('.slide').css({zIndex:1});
                    $('.slide').eq(cnt==0?2:cnt-1).css({zIndex:2});
                    $('.slide').eq(cnt).css({zIndex:3}).animate({opacity:0},0).animate({opacity:1},600);
                }

                //메인 이전 슬라이드
                function mainPrevSlideFn(){
                    $('.slide').css({zIndex:1}).animate({opacity:1},0);   //z-index 초기화
                    //이전 슬라이드
                    $('.slide').eq(cnt).css({zIndex:2}); // 사라지고 보일거니까 2번
                    //현재 슬라이드를 사라지게하면 이전 슬라이드가 보인다.
                    $('.slide').eq(cnt==2?0:cnt+1).css({zIndex:3}).animate({opacity:1},0).animate({opacity:0},600);
                }
                
                //다음 카운드 함수
                function nextCountFn(){
                    cnt++;
                    if(cnt>2){cnt=0;}
                    mainNextSlideFn();
                }   

                //이전 카운트 함수
                function prevCountFn(){
                    cnt--; // 2 1 0 2 1 0
                    if(cnt<0){cnt=2;}
                    mainPrevSlideFn();
                }   

                $('#section01').swipe({
                    swipeLeft: function(){
                        if( !$('.slide').is(':animated') ){
                            nextCountFn();
                        }

                    },
                    swipeRight: function(){
                        if( !$('.slide').is(':animated') ){
                            prevCountFn();
                        }

                    },

                });
          
                setInterval(nextCountFn,3000);

                
        },
        section234Fn: function(){
         
            var winW = $(window).width();
            var winH = $(window).height();  //969
            var sectionH= winH;
            var boxW = $('.content-wrap').width();
            var boxH = boxW*1.222222; //550
            var boxTop = (winH - boxH)/2;  //209.5 = (969-550)/2
            var x = (winW-boxW)/2;
            
            var rateH3 = 0.0965517;
            var rateH4 = 0.037931;  
            var rateP = 0.04827586;
            var textW = $('.text-wrap').width();

            // var fontSize = 비율 * 텍스트박스 내부너비
            var fontSizeH3 = rateH3 * textW;
            var fontSizeH4 = rateH4 * textW;
            var fontSizeP = rateP * textW;

                setTimeout(resizeFn,100);

                function resizeFn(){
                    //창높이 기준으로 섹션높이 변경
                    winH = $(window).height();  //969
                    sectionH= winH; //창너비가 섹션높이
                    //박스너비에 따라 비율로 높이 변경
                    boxW = $('.content-wrap').width();
                    boxH = boxW*1.222222;
                    //창너비에 따라서 x축(left, right) 위치 가운데 정렬 계산
                    winW = $(window).width();
                    x = (winW-boxW)/2;

    
                    if( winH < (boxH + 60) ){
                        sectionH = boxH + 60;
                        boxTop = 30;
                    }
                    else{
                        sectionH = winH;
                        boxTop = (winH-boxH)/2;
                    }

                    //폰트 사이즈 반응형
                    textW = $('.text-wrap').width();
                    fontSizeH3 = rateH3 * textW;
                    fontSizeH4 = rateH4 * textW;
                    fontSizeP = rateP * textW;

                    $('.text-wrap h3').css({ fontSize:fontSizeH3 });
                    $('.text-wrap h4').css({ fontSize:fontSizeH4 });
                    $('.text-wrap p').css({ fontSize:fontSizeP });
                    
                    //박스 탑, 박스 높이
                    $('.content-wrap').css({ top:boxTop, height:boxH });

                    //섹션의 높이
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
            var cnt = 25;

            // 모달창 띄우기
            $('.gallery-img-btn').on({
                click: function(e){
                    e.preventDefault(); /* 창이 이동이 안되고 그자리에서 닫히도록 */
                    $('.modal').stop().fadeIn(300);
                    $('html').addClass('addScroll');
                }
            });

            // 모달창 닫기
            $('.close-btn, .img-wrap').on({
                click: function(e){
                    e.preventDefault();

                    $('.modal').stop().fadeOut(300);
                    $('html').removeClass('addScroll');
                }
            });

            //모달창 이미지버튼
            $('.img-btn, .arrow-right-btn').on({
                click: function(event){
                    event.stopPropagation(); //클릭 이벤트가 부모영역으로의 전파하는 걸 차단
                    cnt++; //1 2 3 ...
                    if(cnt>32){
                        cnt=25;
                    }

                    var txt = '<img src="./img/restaurant-img' + cnt + '.jpg" alt="">';

                        $('.img-btn').html( txt );
                }
            });

            //모달창 레프트버튼
            $('.arrow-left-btn').on({
                click: function(){
                    cnt--; 
                    if(cnt<25){
                        cnt=32;
                    }

                    var txt = '<img src="./img/restaurant-img' + cnt + '.jpg" alt="">';

                        $('.img-btn').html( txt );
                }
            });
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