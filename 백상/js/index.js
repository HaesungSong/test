$(document).ready(function() {
    /********************스크롤 이벤트**********************/
        $(window).scroll(function() {
            let w_s_top = $(window).scrollTop();
            let w_height = $(window).height();
            let w_s_bot = w_s_top + w_height;
    
            let sec_title_best_offset_t = $('.section_title_best').offset().top;
            if(w_s_bot > sec_title_best_offset_t) {
                $('.section_title_best').css({
                    opacity: 1,
                    transform: "translateY(0)"
                });
                $('.best_title_line_L, .best_title_line_R').addClass('title_ani');
            }
            else {
                $('.section_title_best').css({
                    opacity: 0,
                    transform: "translateY(100px)"
                });
                $('.best_title_line_L, .best_title_line_R').removeClass('title_ani');
            }
            
            let best_sec_offset_t = $('.best_section').offset().top;
            if(w_s_bot > best_sec_offset_t) {
                $('.best_section, .best_pagination').css({
                    opacity: 1,
                    transform: "translateY(0)"
                })
                $('.best_swiper-button').css({
                    transform: "translateY(0)"
                })
            }
            else {
                $('.best_section, .best_pagination').css({
                    opacity: 0,
                    transform: "translateY(100px)"
                })
                $('.best_swiper-button').css({
                    transform: "translateY(100px)"
                })
            }
    
            let sec_title_pick_offset_t = $('.section_title_pick').offset().top;
            if(w_s_bot > sec_title_pick_offset_t) {
                $('.section_title_pick').css({
                    opacity: 1,
                    transform: "translateY(0)"
                });
                $('.pick_title_line_L, .pick_title_line_R').addClass('title_ani');
            }
            else {
                $('.section_title_pick').css({
                    opacity: 0,
                    transform: "translateY(100px)"
                });
                $('.pick_title_line_L, .pick_title_line_R').removeClass('title_ani');
            }
    
            let pick_tab_offset_t = $('.pick_tab').offset().top;
            if(w_s_bot > pick_tab_offset_t) {
                $('.pick_tab').css({
                    opacity: 1,
                    transform: "translateY(0)"
                })
            }
            else {
                $('.pick_tab').css({
                    opacity: 0,
                    transform: "translateY(100px)"
                })
            }
    
            let pick_con_offset_t = $('.pick_container').offset().top;
            if(w_s_bot > pick_con_offset_t) {
                $('.pick_container').css({
                    opacity: 1,
                    transform: "translateY(0)"
                })
            }
            else {
                $('.pick_container').css({
                    opacity: 0,
                    transform: "translateY(100px)"
                })
            }
    
    
    
            
            let sec_title_new_offset_t = $('.section_title_new').offset().top;
            if(w_s_bot > sec_title_new_offset_t) {
                $('.section_title_new').css({
                    opacity: 1,
                    transform: "translateY(0)"
                });
                $('.new_title_line_L, .new_title_line_R').addClass('title_ani');
            }
            else {
                $('.section_title_new').css({
                    opacity: 0,
                    transform: "translateY(100px)"
                });
                $('.new_title_line_L, .new_title_line_R').removeClass('title_ani');
            }
            
    
            let new_sec_offset_t = $('.new_section').offset().top;
            if(w_s_bot > new_sec_offset_t) {
                $('.new_section').css({
                    opacity: 1,
                    transform: "translateY(0)"
                });
                $('.new_swiper-button').css({
                    transform: "translateY(0)"
                });
            }
            else {
                $('.new_section').css({
                    opacity: 0,
                    transform: "translateY(100px)"
                });
                $('.new_swiper-button').css({
                    transform: "translateY(100px)"
                });
            }
    
    
    
            let gallery_con_offset_t = $('.gallery_container > h2').offset().top;
            if(w_s_bot > gallery_con_offset_t) {
                $('.gallery_container > h2 > span').addClass('rotate_ani');
            }
            else {
                $('.gallery_container > h2 > span').removeClass('rotate_ani');
            }
    
    
            let sec_title_review_offset_t = $('.section_title_review').offset().top;
            if(w_s_bot > sec_title_review_offset_t) {
                $('.section_title_review').css({
                    opacity: 1,
                    transform: "translateY(0)"
                });
                $('.review_title_line_L, .review_title_line_R').addClass('title_ani');
            }
            else {
                $('.section_title_review').css({
                    opacity: 0,
                    transform: "translateY(100px)"
                });
                $('.review_title_line_L, .review_title_line_R').removeClass('title_ani');
            }
    
    
            let review_con_offset_t = $('.review_container').offset().top;
            if(w_s_bot > review_con_offset_t) {
                $('.review_container').css({
                    opacity: 1,
                    transform: "translateY(0)"
                })
            }
            else {
                $('.review_container').css({
                    opacity: 0,
                    transform: "translateY(100px)"
                })
            }
    
    
    
        });
    
    
    
    
    /********************메인베너 슬라이드**********************/
        let curr_idx = 0;
        let s_b_count = $('.slide_banner').length;
        let timer = 1000;
        let ani_delay = 3000;
    
        function slide() {
            $('.slide_banner').css({
                zIndex: 0
            });
            $('.banner_bg').css({
                transform: "scale(1.1)"
            });
    
            $('.slide_banner').eq(curr_idx % s_b_count).animate({
                zIndex: 10
            }, 0).animate({
                left: "-100%"
            }, timer);
            $('.slide_banner').eq((curr_idx + 1) % s_b_count).animate({
                left: "100%",
                zIndex: 100
            }, 0).animate({
                left: 0
            }, timer);
            
            $('.main_banner_indi').eq(curr_idx % s_b_count).removeClass('clicked_indi');
            $('.main_banner_indi').eq((curr_idx + 1) % s_b_count).addClass('clicked_indi');
    
            setTimeout(function() {
                $('.banner_bg').css({
                    transform: "scale(1)"
                });
            }, timer);
    
            $('.banner_txt span').css({
                opacity: 0,
                transform: "translateY(20px)",
                transition: "transform 0s, opacity 0s"
            });
            $('.banner_txt h2').css({
                opacity: 0,
                transform: "translateY(20px)",
                transition: "transform 0s, opacity 0s"
            });
            setTimeout(function() {
                $('.banner_txt span').css({
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "transform 0.5s, opacity 0.5s"
                });
            }, timer + 500);
            setTimeout(function() {
                $('.banner_txt h2').css({
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "transform 0.5s, opacity 0.5s"
                });
            }, timer + 600);
    
            curr_idx += 1;
        }
    
        $('.right_button_area').click(function() {
            btn_disable();
    
            slide();
        });
    
        $('.left_button_area').click(function() {
            btn_disable();
            
            $('.slide_banner').css({
                zIndex: 0
            });
            $('.banner_bg').css({
                transform: "scale(1.1)"
            });
    
            $('.slide_banner').eq(curr_idx % s_b_count).animate({
                zIndex: 10
            }, 0).animate({
                left: "100%"
            }, timer);
            $('.slide_banner').eq((curr_idx - 1) % s_b_count).animate({
                left: "-100%",
                zIndex: 100
            }, 0).animate({
                left: 0
            }, timer);
            
            $('.main_banner_indi').eq(curr_idx % s_b_count).removeClass('clicked_indi');
            $('.main_banner_indi').eq((curr_idx - 1) % s_b_count).addClass('clicked_indi');
    
            setTimeout(function() {
                $('.banner_bg').css({
                    transform: "scale(1)"
                })
            }, timer);
    
            $('.banner_txt span').css({
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0s"
            });
            $('.banner_txt h2').css({
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0s"
            });
            setTimeout(function() {
                $('.banner_txt span').css({
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "all 0.5s"
                });
            }, timer + 500);
            setTimeout(function() {
                $('.banner_txt h2').css({
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "all 0.5s"
                });
            }, timer + 600);
    
            curr_idx -= 1;
        });
    
    /********************버튼 비활성화**********************/
        function btn_disable() {
            $('.button_area, .main_banner_indi').css({
                pointerEvents: "none"
            });
            setTimeout(function() {
                $('.button_area, .main_banner_indi').css({
                    pointerEvents: "auto"
                });
            }, timer + 600);
        }
    
    /********************오토 슬라이드**********************/
        let slide_interval;
        function auto_slide() {
            slide_interval = setInterval(function() {
                slide();
            }, timer + ani_delay);
        }
        
        auto_slide();
    
        $(document).on('mouseenter', '.main_banner', function() {
            clearInterval(slide_interval);
        });
        $(document).on('mouseleave', '.main_banner', function() {
            auto_slide();
        });
        
        
    
    /********************메인베너 버튼**********************/
        $(".left_button_area").hover(function() {
            $('.left_button_area').mousemove(function() {
                $('.banner_btn_prev').css({
                    opacity: 1,
                    left: event.offsetX,
                    top: event.offsetY
                });
                $('.scale_border_L').css({
                    transform: "scale(1)"
                });
            });
        }, function() {
            $('.banner_btn_prev').css({
                    opacity: 0
                });
                $('.scale_border_L').css({
                    transform: "scale(0)"
                });
        });
        $(".right_button_area").hover(function() {
            $('.right_button_area').mousemove(function() {
                $('.banner_btn_next').css({
                    opacity: 1,
                    left: event.offsetX,
                    top: event.offsetY
                });
                $('.scale_border_R').css({
                    transform: "scale(1)"
                });
            });
        }, function() {
            $('.banner_btn_next').css({
                    opacity: 0
                });
                $('.scale_border_R').css({
                    transform: "scale(0)"
                });
        });
    
    
    /********************메인베너 인디케이터**********************/
        $(document).on('click', '.main_banner_indi', function() {
            let clicked = $('.clicked_indi').index();
            let click = $(this).index();
    
            btn_disable();
    
            $('.slide_banner').css({
                    zIndex: 0
                });
            $('.banner_bg').css({
                transform: "scale(1.1)"
            });
            $('.banner_txt span').css({
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0s"
            });
            $('.banner_txt h2').css({
                opacity: 0,
                transform: "translateY(20px)",
                transition: "all 0s"
            });
            setTimeout(function() {
                $('.banner_bg').css({
                    transform: "scale(1)"
                })
            }, timer);
            setTimeout(function() {
                $('.banner_txt span').css({
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "all 0.5s"
                });
            }, timer + 500);
            setTimeout(function() {
                $('.banner_txt h2').css({
                    opacity: 1,
                    transform: "translateY(0)",
                    transition: "all 0.5s"
                });
            }, timer + 600);
            if(clicked < click) {
    
                $('.slide_banner').eq(clicked).animate({
                    zIndex: 10
                }, 0).animate({
                    left: "-100%"
                }, timer);
                $('.slide_banner').eq(click).animate({
                    left: "100%",
                    zIndex: 100
                }, 0).animate({
                    left: 0
                }, timer);
    
                $('.main_banner_indi').eq(clicked).removeClass('clicked_indi');
                $('.main_banner_indi').eq(click).addClass('clicked_indi');
    
                curr_idx = click;
            }
            else if(clicked > click) {
    
                $('.slide_banner').eq(clicked).animate({
                    zIndex: 10
                }, 0).animate({
                    left: "100%"
                }, timer);
                $('.slide_banner').eq(click).animate({
                    left: "-100%",
                    zIndex: 100
                }, 0).animate({
                    left: 0
                }, timer);
    
                $('.main_banner_indi').eq(clicked).removeClass('clicked_indi');
                $('.main_banner_indi').eq(click).addClass('clicked_indi');
    
                curr_idx = click ;
            }
        });
    /***********스와이퍼버튼*************/
    $('.swiper-button')
    
    /********************pick*********************/
        $(document).on('click', '.pick_tab_btn', function() {
            $('.pick_tab_btn').removeClass('pick_btn_on');
            $('.pick_article').css({
                display: "none"
            });
            $(this).addClass('pick_btn_on');
            $('.pick_article').eq($(this).index()).fadeIn(300);
    
            $('.pick_artist, .pick_title, .pick_info, .pick_more_btn').removeClass('.pick_ani');
            $('.pick_artist, .pick_title, .pick_info, .pick_more_btn').addClass('.pick_ani');
        });


        $(document).on('click', '.gallery_more_btn', function() {
            event.preventDefault();

            alert("준비중입니다.")
        });
    
    
        
    });