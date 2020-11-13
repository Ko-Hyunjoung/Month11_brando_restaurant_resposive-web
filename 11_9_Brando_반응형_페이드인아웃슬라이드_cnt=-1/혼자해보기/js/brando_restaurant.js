;(function(window,document,$,undefined){
    
    var brando = {
        init: function(){
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
        headerFn: function(){
            var winH = $(window).width();
            var url = null;

            $('.smooth-btn').on({
                click: function(){
                    event.preventDefault();
                    url = $(this).attr('href');
                    $('html,body').stop().animate({ scrollTop: $(url).offset().top },600);
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

            var winH = 969;
            var hunH = $('.hungry').height();
            var hunT = (winH-hunH)/2

                setTimeout(resizeFn,100);

                function resizeFn(){
                    winH = $(window).height();
                    $('#section01').css({ height:winH });  
                    hunH = $('.hungry').height();
                    hunT = (winH-hunH)/2
                    $('.hungry').css({top:hunT});
                }
                $(window).resize(function(){
                    resizeFn();
                });

                $('.arrow-down-btn').on({
                    click: function(){
                        $('html,bosy').stop().animate({ scrollTop: $('#section2').affset().top },500);
                    }
                });

        },
        section234Fn: function(){
        
            var winW = $(window).width();
            var winH = $(window).height();
            var sectionH = winH;
            var boxH = boxW*1.222222
            var boxT = (winH-boxH)/2;
            var boxW = $('.content-wrap').width();
            var x = (winW-boxW)/2

            var rateH3 = 0.0965517;
            var rateH4 = 0.037931;
            var rateP = 0.04827586;
            var textW = $('.text-wrap').width();

            // fontSize = 비율 * 텍스트박스 내부너비
            var fontSizeH3 = rateH3 * textW;
            var fontSizeH4 = rateH4 * textW;
            var fontSizeP  = rateP  * textW;


            setTimeout(resizeFn,100);

            function resizeFn(){
                winW = $(window).width();
                winH = $(window).height();
                sectionH = winH;
                boxH = boxW*1.222222
                boxW = $('.content-wrap').width();
                boxT = (winH-boxH)/2;
                x = (winW-boxW)/2
    
                if( winH < boxH + 60 ){
                    sectionH = boxH + 60;
                    boxT = 30;
                }
                else{
                    sectionH = winH;
                    boxT = (winH-boxH)/2;            
                }

                textW = $('.text-wrap').width();
                fontSizeH3 = rateH3 * textW;
                fontSizeH4 = rateH4 * textW;
                fontSizeP  = rateP  * textW;

                $('.text-wrap h3').css({ fontSize:fontSizeH3 });
                $('.text-wrap h4').css({ fontSize:fontSizeH4 });
                $('.text-wrap p').css({ fontSize:fontSizeP });

                $('.content-wrap').css({ top:boxT, height:boxH});
                $('.section234').css({height:sectionH});


                if( winW <= 1170 ){
                    $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({right:x-15}, 300);
                    $('#section03 .content-wrap').stop().animate({left:x-15}, 300);
                }
                else{
                    $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({right:0},100);
                    $('#section03 .content-wrap').stop().animate({left:0},100);
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
          
        }
    };

    brando.init();

})(window,document,jQuery);