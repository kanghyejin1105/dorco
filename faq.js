$(document).ready(function(){
    $(".faq_title").click(function(){
        if($(this).hasClass("active")){
            $(".faq_title").removeClass("active").siblings().slideUp();
        }else{
            $(".faq_title").removeClass("active").siblings().slideUp();
            $(this).addClass("active").siblings().slideDown();
        }
    });
    $(".tabmenu>li").click(function(){
        let list = $(this).index();
        $(".tab_conts>ul").stop().fadeOut();
        $(".tab_conts>ul").eq(list).stop().fadeIn();
        $(".tabmenu>li").toggleClass("on")
    });

    $(".website").click(function(){
        $(".dorco").toggle();
    });

    $(".langbox").click(function(){
        $(".lang").slideToggle();
    });

});