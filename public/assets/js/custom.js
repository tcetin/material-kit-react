$().ready(function(){
    // the body of this function is in assets/material-kit.js
    // materialKit.initSliders();
    window_width = $(window).width();

    if (window_width >= 992){
        big_image = $('.wrapper > .header');

        $(window).on('scroll', materialKitDemo.checkScrollForParallax);
    }

});