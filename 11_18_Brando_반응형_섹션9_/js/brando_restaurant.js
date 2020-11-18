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
                that.section09GalleryFn();
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
            var fileName = null;
            var endNum = null;
            var fileNum = null;
            var winH = $(window).innerHeight();

                 setTimeout(resizeFn,100);

                function resizeFn(){
                    winH = $(window).innerHeight();
                    $('.img-wrap').css({lineHeight:winH + 'px'}); 
                }

                $(window).resize(function(){
                    resizeFn();
                });

    
                //모달창 구현 
                $('.gallery-img-btn').on({
                    click: function(event){
                        event.preventDefault();
    
                        //파일번호
                        fileName = $(this).find('img').attr('src');
                        endNum = fileName.indexOf('.jpg');
                        fileNum = Number(fileName.slice(endNum-2, endNum));
                        console.log( fileName, fileNum );
    
                        //모달창 메인 슬라이드
                        modalSlidefn();
                    }
                });
    
                function modalSlidefn(){             
                    $('.modal').stop().fadeIn(300);
                    $('.img-wrap img').stop().fadeOut(0).attr('src', './img/restaurant-img' + fileNum + '.jpg').fadeIn(1000);
                }
    
                $('.close-btn, .img-wrap').on({
                    click: function(){
                        $('.modal').stop().fadeOut(300);
                    }
                });
    
                $('.arrow-right-btn, .img-btn').on({
                    click: function(event){
                        event.stopPropagation();
                        fileNum++;
                        if(fileNum>32){
                            fileNum=25;
                        }   
                        modalSlidefn();
                    }
                });
                $('.arrow-left-btn').on({
                    click: function(){
                        fileNum--;
                        // fileNum<25? fileNum=32 : fileNum;
                        if(fileNum<25){
                            fileNum=32;
                        }                    
                        modalSlidefn();
                    }
                });
        },

        section09GalleryFn: function(){
                    var hRate = 0.75; // 600/800;  이미지높이/이미지너비  초기 고정된 값 (상수값:const)
                    var winW = $(window).innerWidth();

                    var cols = 4; //칸수 해상도별 변수 사용 예정
                    var n = $('.gallery li').length; //8 갯수 세어주는 length
                    var rows = Math.ceil(n/cols); // 줄수 = 올림 (갤러리갯수 / 칸수) 
                  
                    var imgW = winW / cols;  // 창너비/칸수
                    var imgH = imgW * hRate; // 이미지너비*이미지높이비율값

                    var hide = []; //초기값은 감추기 없음
                    var show = [0,1,2,3,4,5,6,7]; //초기값은 8개 보이기, li 제이쿼리 번호

                        setTimeout(galleryFn,100) //부팅하고 로딩시에 무조건 실행해라 0.1초후에
    
                        function galleryFn(){
    
                            winW = $(window).innerWidth();  // 변수가 필요할 때는 반드시 필요한 변수가 위에 있어야해요
    
                            if( winW > 1200){
                                cols = 4;
                            }
                            else if( winW <= 1200 && winW > 980 ){
                                cols = 3;
                            }
                            else if( winW <= 980 && winW > 760){
                                cols = 2;
                            }                        
                            else if( winW <= 760 && winW >= 0){
                                cols = 1;
                            }
    
                            // n = $('.gallery li').length; 목록의 갯수
                            n = show.length; //클릭한 버튼 내용 이미지 갯수
                            rows = Math.ceil(n/cols); // 줄수 = 올림 (갤러리갯수 / 칸수) 
                        
                            
                            imgW = winW / cols;  // 창너비/칸수
                            imgH = imgW * hRate; // 이미지너비*이미지높이비율값
    
                                $('.gallery').addClass('addZoom');
                                $('.gallery').css({height:imgH*rows}); //이미지높이 * 줄수
                                
                                
                                // 갤러리 숨김 hide();
                                for(var i=0; i<숨겨진배열길이; i++){
                                    $('.gallery li').eq(hide[i]).hide();
                                }
                                
    
                                // 갤러리 보이기 show();
                                var cnt=-1;
                                for(var i=0;i<rows;i++){   // 0~2
                                    for(var j=0;j<cols;j++){ //0~2
                                        cnt++;  // 0~8
                                        if(cnt>show.length) //보이는 갯수에 따라서 변경
                                        break;
                                        $('.gallery li').eq(show[cnt]).show().stop().animate({top:(imgH*i), left:(imgW*j), width:imgW, height:imgH },300);
                                    }
                                }
                                $('.gallery').addClass('addZoom');
                        }
    
                        $(window).resize(function(){
                            galleryFn();
                        });
    
                        //버튼이벤트
                        $('.gallery-btn').eq(1).on({
                            click: function(){
                                $('.gallery').removeClass('addZoom');
    
                                $('.gallery li').eq(0).hide();
                                $('.gallery li').eq(2).hide();
    
                                $('.gallery li').eq(1).show().stop().animate({top:(imgH*0), left:(imgW*0), width:imgW, height:imgH },300);
                                $('.gallery li').eq(3).show().stop().animate({top:(imgH*0), left:(imgW*1), width:imgW, height:imgH },300);
                                $('.gallery li').eq(4).show().stop().animate({top:(imgH*0), left:(imgW*2), width:imgW, height:imgH },300);
                                $('.gallery li').eq(5).show().stop().animate({top:(imgH*0), left:(imgW*3), width:imgW, height:imgH },300);
                                $('.gallery li').eq(6).show().stop().animate({top:(imgH*1), left:(imgW*0), width:imgW, height:imgH },300);
                                $('.gallery li').eq(7).show().stop().animate({top:(imgH*1), left:(imgW*1), width:imgW, height:imgH },300);
    
                                $('.gallery').addClass('addZoom');
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