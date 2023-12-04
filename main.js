$(function() {
    $('#main-visual').vegas({
        slides: [
            { src: './mainvisual_img/shark.jpg' },
            { src: './mainvisual_img/penguin.jpg' },
            { src: './mainvisual_img/kurage2.jpg' },
            { src: './mainvisual_img/chinanago.jpg' },
            { src: './mainvisual_img/kumanomi.jpg' },
        ],
        overlay: './js/overlays/02.png', //フォルダ『overlays』の中からオーバーレイのパターン画像を選択
        transition: 'fade', //スライドを遷移させる際のアニメーション
        transitionDuration: 3000, //スライドの遷移アニメーションの時間
        delay: 7500, //スライド切り替え時の遅延時間
        animation: 'random', //スライド表示中のアニメーション
        animationDuration: 15000, //スライド表示中のアニメーションの時間
    });
});

window.onload = () =>{
    // const snipper = document.getElementById('loading');
    // snipper.classList.add('loaded');
    setTimeout(classAdd, 1500);           // setTimeout(実行したい関数, ミリ秒)
}                                         //  ➡「ミリ秒」の分だけ「実行したい関数」の処理を遅らせる

const classAdd = () =>{
    const snipper2 = document.getElementById('campaign_boxmini2');
    const snipper1 = document.getElementById('campaign_boxmini');
    const snipper = document.getElementById('campaign_box');
    snipper2.classList.add('loaded');
    snipper1.classList.add('loaded');
    snipper.classList.add('loaded');
}


$(function() {
    $(window).scroll(function() {
        $(".right").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_r");
        }
        });
    });
});
$(function() {
    $(window).scroll(function() {
        $(".left").each(function() {
        let scroll = $(window).scrollTop();
        let blockPosition = $(this).offset().top;
        let windowHeihgt = $(window).height();
        if (scroll > blockPosition - windowHeihgt) {
            $(this).addClass("fadein_l");
        }
        });
    });
});

// ヘッダー出たり消えたり ヘッダーの高さを超えたら
const fadeoutHeaderTopAnime = () => {
    let headerHeight = $('#header').outerHeight();
    let scroll = $(window).scrollTop();

    if (scroll >= headerHeight + 100) {
        $('.nav').removeClass('fadein_h');
        $('.nav').addClass('fadeout_h');
    } else {
        $('.nav').removeClass('fadeout_h');
        $('.nav').addClass('fadein_h');
    };
}

$(window).scroll(() => {
    fadeoutHeaderTopAnime();
});

$(window).on('lord', () => {
    fadeoutHeaderTopAnime();
});

// ヘッダー出たり消えたり セクションID＃timeの高さまで来たら、スクロールで出たり消えたり
var flag = 0;
const fadeoutHeaderScrollAnime = () => {
    var scroll = $(window).scrollTop();
    var elementTop = $('#section_news').offset().top;
    if(scroll == flag) {

    }else if (elementTop >scroll || 0 > scroll - flag) {
        $('.nav').removeClass('fadeout_h');
        $('.nav').addClass('fadein_h');
    } else {
        $('.nav').addClass('fadeout_h');
        $('.nav').removeClass('fadein_h');
    }
    flag = scroll;
}

$(window).on('lord', () => {
    fadeoutHeaderScrollAnime();
});

$(window).scroll(() => {
    fadeoutHeaderScrollAnime();
});
