;(function(window,document,$,undefined){
    
    var brando = {
        init: function(){
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
                    $('#section01,#section02,#section03,#section04').css({ height:winH });  
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
        section02Fn: function(){

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
          
        }
    };

    brando.init();

})(window,document,jQuery);