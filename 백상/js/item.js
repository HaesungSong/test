$(document).ready(function() {
    let artist_no = get_url_info("artist_no");
    let item_no = get_url_info("item_no");

    const ARTIST = ITEM_LIST[artist_no][0];
    const ITEM = ITEM_LIST[artist_no][item_no];

    $('.item_img, .item_img_frame').prop('style', `background-image: url(./img/artist/${ITEM.src});`);
    $('.form_title > b, .option_name, .section_title > h2, .item_name').prepend(ITEM.title);
    $('.form_title > P, .item_explain > .section_title > span, .ko_name').prepend(ARTIST.artist_ko_name);
    $('.eng_name').prepend(ARTIST.artist_en_name);
    $('.item_desc_con > p').prepend(ITEM.desc);
    $('.artist_img').prop('style', `background-image: url(./img/artist/${ARTIST.artist_pic});`);
    let list = `<h4>${ARTIST.artist_ko_name}<span>${ARTIST.artist_en_name}</span></h4>
                            <dl class="artist_sum">
                                <dt>국적</dt>
                                <dd>${ARTIST.nationality}</dd>
                            </dl>
                            <dl class="artist_sum">
                                <dt>출생·사망</dt>
                                <dd>${ARTIST.birth_death}</dd>
                            </dl>
                            <dl class="artist_sum">
                                <dt>주요작품</dt>
                                <dd>${ARTIST.major}</dd>
                            </dl>
                            <p class="artist_desc">
                                ${ARTIST.artist_explanation}
                            </p>
                            <div class="more_line_btn">
                                <a href="#">Read More
                                    <div class="more_line_L"></div>
                                    <div class="more_line_R"></div>
                                </a>
                            </div>`;
    $('.artist_info').prepend(list);





    $(document).on('click', '.bg_list_btn', function() {
        $('.bg_list_btn').css({
            opacity: 0.7,
            border: "3px solid rgba(201, 171, 129, 0)"
        });
        $('.main_container').prop('style', `background-image: url(./img/item_bg/item_bg${$(this).index() + 1}.jpg);`);
        $(this).css({
            opacity: 1,
            border: "3px solid rgba(201, 171, 129, 1)"
        });
    });
    $(document).on('click', '.select_size', function() {
        if(!$(this).hasClass('seleted')) {
            $('.grid').css({
                transform: "translateY(-50%) rotate(-180deg)"
            });
            $('.select_size > ul').css({
                opacity: 1,
                pointerEvents: "auto"
            });
        }
        else {
            $('.grid').css({
                transform: "translateY(-50%) rotate(0)"
            });
            $('.select_size > ul').css({
                opacity: 0,
                pointerEvents: "none"
            });
        }
        $('.select_size').toggleClass('seleted');
    });
    $(document).on('click', '.select_size > ul > li', function() {
        let select_size = $(this).text();
        $('.select_size').html(`${select_size}
                                <div class="grid"></div>
                                <ul>
                                    <li>사이즈를 선택하세요.</li>
                                    <li>30.0cm x 30.0cm</li>
                                    <li>35.0cm x 35.0cm</li>
                                </ul>`);
    });
    $(document).on('click', '.option', function() {
        $(this).parents().children('.option').children('.option_img').css({
            border: "2px solid rgba(201, 171, 129, 0)"
        });
        $(this).parents().children('.option').children('.option > p').css({
            color: "#333"
        });
        $(this).children('.option_img').css({
            border: "2px solid rgba(201, 171, 129, 1)"
        });
        $(this).children('.option > p').css({
            color: "#c9ab81"
        });
    });
    $(document).on('click', '.media_option', function() {
        
        if($(this).index() == 0) {
            $('.frame_option1, .frame_option2, .frame_option5').css({
                display: "block"
            });
            $('.frame_option').children('.option_img').css({
                border: "2px solid rgba(201, 171, 129, 0)"
            });
            $('.frame_option').children('.option_img').eq(0).css({
                border: "2px solid rgba(201, 171, 129, 1)"
            });
            $('.frame_option').children('.option > p').css({
                color: "#333"
            });
            $('.frame_option').children('.option > p').eq(0).css({
                color: "#c9ab81"
            });
        }
        else if($(this).index() == 1) {
            $('.frame_option1, .frame_option2, .frame_option5').css({
                display: "none"
            });
            $('.frame_option').children('.option_img').css({
                border: "2px solid rgba(201, 171, 129, 0)"
            });
            $('.frame_option').children('.option_img').eq(2).css({
                border: "2px solid rgba(201, 171, 129, 1)"
            });
            $('.frame_option').children('.option > p').css({
                color: "#333"
            });
            $('.frame_option').children('.option > p').eq(2).css({
                color: "#c9ab81"
            });
        }
        $('.select_white_space > .option').css({
            display: "none"
        });
        $('.select_white_space > .white_space_option1').css({
            display: "block"
        });
        $('.select_white_space').find('.option_img').css({
            border: "2px solid rgba(201, 171, 129, 0)"
        });
        $('.select_white_space').find('.option > p').css({
            color: "#333"
        });
        $('.white_space_option1').children('.option_img').css({
            border: "2px solid rgba(201, 171, 129, 1)"
        });
        $('.white_space_option1').children('.option > p').css({
            color: "#c9ab81"
        });
    });
    $(document).on('click', '.re_option', function() {
        $('.select_circle').css({
            background: "#fff",
            borderColor: "#ddd"
        });
        $('.select_circle').eq($(this).index()).css({
            background: "#c9ab81 url(./img/icon/check_icon.png) no-repeat center",
            borderColor: "#c9ab81"
        });
    });
    $(document).on('click', '.frame_option', function() {
        $('.select_white_space > .option').css({
            display: "none"
        });
        $('.select_white_space').find('.option_img').css({
            border: "2px solid rgba(201, 171, 129, 0)"
        });
        $('.select_white_space').find('.option > p').css({
            color: "#333"
        });
        $('.white_space_option1').children('.option_img').css({
            border: "2px solid rgba(201, 171, 129, 1)"
        });
        $('.white_space_option1').children('.option > p').css({
            color: "#c9ab81"
        });
        if($(this).index() == 5 || $(this).index() == 6) {
            $('.select_white_space > .option').css({
                display: "block"
            });
        }
        else {
            $('.select_white_space > .white_space_option1').css({
                display: "block"
            });
        }
    });

    let o_price = ITEM.price;
    
    let amount = document.getElementById('amount');
    let minus = document.getElementById('minus');
    let plus = document.getElementById('plus');
    get_total_price();
    minus.addEventListener('click', function() {
        if(amount.value > 1) {
            amount.value = +amount.value - 1;
            get_total_price();
        }
        else if(amount.value <= 1) {
            alert("최소 주문 수량은 1개입니다");
        }
    });
    plus.addEventListener('click', function() {
        amount.value = +amount.value + 1;
        get_total_price();
    });
    function get_total_price() {
        let total_price = document.getElementById('total_price');
        total_price.innerText = (amount.value * o_price).toLocaleString("ko");
        console.log(amount.value);
        console.log(o_price);
        console.log(amount.value * o_price);
    }

    $(document).on('click', '.item_header a', function() {
        event.preventDefault();

        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top - 100
        }, 1000);
    });
});
    