$(document).ready(function() {
    $(window).on('mousewheel DOMMouseScroll', function(){
        if(event.wheelDelta < 0) {
            $('#header').css({
                top: -$('#header').height(),
                boxShadow: "none"
            });
        }
        else if(event.wheelDelta > 0) {
            if($(window).scrollTop() != 0) {
                $('#header').css({
                    top: 0,
                    boxShadow: "1px 1px 5px 0 rgba(0,0,0,0.1)"
                });
            }
        }
    });
    let sec_title_height = $('.section_title').height();
    $(window).scroll(function() {
        let w_s_top = $(window).scrollTop();
        let w_height = $(window).height();
        let w_s_bot = w_s_top + w_height;
        
        if(w_s_top <= 0) {
            $('#header').css({
                top: 0,
                boxShadow: "none"
            });
        }

        if(w_s_top > 0) {
            $('.top_btn').css({
                pointerEvents: "auto",
                opacity: 1
            })
        }
        else {
            $('.top_btn').css({
                pointerEvents: "none",
                opacity: 0
            })
        }
    })

    $(document).on('click', '#ham', function() {
        $('.ham_slide').css ({
            transform: "translateX(0)"
        });
        $('.slide_close_pan').css({
            opacity: 1,
            pointerEvents: "auto"
        });
    })
    $(document).on('click', '.slide_close_btn, .slide_close_pan', function() {
        $('.ham_slide').css ({
            transform: "translateX(-100%)"
        });
        $('.slide_close_pan').css({
            opacity: 0,
            pointerEvents: "none"
        });
        $('.slide_menu_title').css({
            color: "#333",
            fontStyle: "normal",
            transition: "all 0s"
        });
        $('.slide_menu_item').css({
            opacity: 0,
            transform: "translateX(-10px)",
            transition: "all 0s",
            zIndex: 0
        });
    });

    $(document).on('click', '.slide_menu_title', function() {
        $('.slide_menu_title').css({
            color: "#333",
            fontStyle: "normal",
            transition: "all 0s"
        });
        $('.slide_menu_item').css({
            opacity: 0,
            transform: "translateX(-10px)",
            transition: "all 0s",
            zIndex: 0
        });
        $(this).css({
            color: "#c9ab81",
            fontStyle: "italic",
            transition: "all 0.3s"
        });
        $(this).nextAll('.slide_menu_item').css({
            opacity: 1,
            transform: "translateX(0)",
            transition: "all 0.3s",
            zIndex: 100
        });
    });


    $('.slide_menu_item_list a').hover(function() {
        $(this).children('.bar').css({
            left:0,
            width: "100%"
        });
    }, function() {
        $(this).children('.bar').css({
            left: "auto",
            width: 0
        });
    });

    $(document).on('click', '.top_btn a', function() {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    $('.more_line_btn a').hover(function() {
        $(this).children('.more_line_L').css({
            transform: "scaleX(1)",
            transitionDelay: "0.2s"
        });
        $(this).children('.more_line_R').css({
            transform: "scaleX(0)",
            transitionDelay: "0s"
        });
        
    }, function() {
        $('.more_line_L').css({
            transform: "scaleX(0)",
            transitionDelay: "0s"
        });
        $('.more_line_R').css({
            transform: "scaleX(1)",
            transitionDelay: "0.2s"
        });
    });
});