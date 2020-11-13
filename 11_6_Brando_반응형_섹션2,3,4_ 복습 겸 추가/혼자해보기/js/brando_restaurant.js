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
            var boxW = $('.content').width();
            var x = (winW-boxW)/2

            setTimeout(resizeFn,100);

            function resizeFn(){
                winW = $(window).width();
                winH = $(window).height();
                sectionH = winH;
                boxH = boxW*1.222222
                boxW = $('.content').width();
                boxT = (winH-boxH)/2;
                x = (winW-boxW)/2
    
                if( winH < boxH ){
                    sectionH = boxH;
                    boxT = 0;
                }
                else{
                    sectionH = winH;
                    boxT = (winH-boxH)/2;            
                }

                $('.content').css({ top:boxT, height:boxH});
                $('.section234').css({height:sectionH});


                if( winW <= 1170 ){
                    $('#section02 .content, #section04 .content').stop().animate({right:x-15}, 300);
                    $('#section03 .content').stop().animate({left:x-15}, 300);
                }
                else{
                    $('#section02 .content, #section04 .content').stop().animate({right:0},100);
                    $('#section03 .content').stop().animate({left:0},100);
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