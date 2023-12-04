$('#wave').wavify({
    height: 100,
    bones: 3,
    amplitude: 70,
    color: '#72b8ff',
    speed: .40
  });

  function toggleMenu() {
    var menu = document.querySelector('.nav');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
  }
  
  const fadeoutHeaderTopAnime = () => {
    let headerHeight = $('#header').outerHeight();
    let scroll = $(window).scrollTop();

    if (scroll >= headerHeight + 100) {
        $('.header_top').removeClass('fadein_h');
        $('.header_top').addClass('fadeout_h');
    } else {
        $('.header_top').removeClass('fadeout_h');
        $('.header_top').addClass('fadein_h');
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
    var elementTop = $('#timing1').offset().top;
    if(scroll == flag) {

    }else if (elementTop >scroll || 0 > scroll - flag) {
        $('.header').removeClass('fadeout_h');
        $('.header').addClass('fadein_h');
    } else {
        $('.header').addClass('fadeout_h');
        $('.header').removeClass('fadein_h');
    }
    flag = scroll;
}

$(window).on('lord', () => {
    fadeoutHeaderScrollAnime();
});

$(window).scroll(() => {
    fadeoutHeaderScrollAnime();
});

// 戻るボタン
const fadeinAnimation = () => {
  let headerHeight = $('#header').outerHeight();
  let scroll = $(window).scrollTop();

  if (scroll >= headerHeight - 100) {
      $('.top_btn').removeClass('fadeout_btn');
      $('.top_btn').addClass('fadein_btn');
  } else {
      $('.top_btn').removeClass('fadein_btn');
      $('.top_btn').addClass('fadeout_btn');
  };
}

$(window).scroll(() => {
  fadeinAnimation();
})

$(window).on('lord', () => {
  fadeinAnimation();
})
