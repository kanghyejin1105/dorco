$(document).ready(function(){
    
    let i = 0;
    let count = $(".con_group>li").length;


    let auto = setInterval(function(){
        asd();

        if( i == count-1){
            i = 0;
        }else{
            i++;
        }
        slide();
        
    },3000);

    slide();
    
    $(".wrap_main").mouseenter(function(){
        clearInterval(auto);
    });
    $(".wrap_main").mouseleave(function(){
        auto = setInterval(function(){
            asd();
    
            if( i == count-1){
                i = 0;
            }else{
                i++;
            }
            slide();
            
        },3000);
    });
    

    $(".langbox").click(function(){
        $(".lang").slideToggle();
    });
    $(document).mouseup(function (e){
        if(!$(".lang").has(e.target).length) 
            $(".lang").slideUp();
        if(!$(".dorco").has(e.target).length) 
            $(".dorco").hide();
        $(".fa-chevron-up").stop().hide();
        $(".fa-chevron-down").stop().show();
    });
    
    $(".next").click(function(){
        $(".main_conts").stop().animate({"margin-top":"-200vh"},1000,function(){
            $(".main_conts>li:first-child").appendTo(".main_conts");
            $(".main_conts").css({"margin-top":"-100vh"});
        });

        if( i == count-1){
            i = 0;
        }else{
            i++;
        }
        slide();
    });

    $(".prev").click(function(){
        asd()

        if(i == 0){
            i = count - 1;
        }else{
            i -= 1;
        }
        slide();
    });

    
    $(".website").click(function(){
        $(".dorco").toggle();
        $(".fa-chevron-down").toggle();
        $(".fa-chevron-up").toggle();
    });



    $(window).scroll(function(){
        if($(this).scrollTop() > 400){
            $("#top").stop().fadeIn(0);
        }else{
            $("#top").stop().fadeOut(0);
        }
    });

    $("#top").click(function(){
        $("html,body").stop().animate({scrollTop : 0}, 800);
    });

    function slide(){
        $(".con_box_top").stop().css({"top":"-210px"});
        $(".con_txt").stop().css({"top":"-60px"});
        $(".con_group>li").stop().fadeOut();
        $(".con_group>li").eq(i).stop().fadeIn(function(){
            $(".con_box_top").stop().animate({"top":"0px"},500);
            $(".con_txt").stop().animate({"top":"0px"},500);
        });
    }
    function asd(){
        $(".main_conts").stop().animate({"margin-top":"-200vh"},1000,function(){
            $(".main_conts>li:first-child").appendTo(".main_conts");
            $(".main_conts").css({"margin-top":"-100vh"});
        });
    }
});


