// セクションタイトル下の動物を動かす
$(function () {
    $(window).scroll(function () {
        $(".right").each(function () {
            let scroll = $(window).scrollTop();
            let blockPosition = $(this).offset().top;
            let windowHeihgt = $(window).height();
            if (scroll > blockPosition - windowHeihgt) {
                $(this).addClass("fadein_r");
            }
        });
    });
});
$(function () {
    $(window).scroll(function () {
        $(".left").each(function () {
            let scroll = $(window).scrollTop();
            let blockPosition = $(this).offset().top;
            let windowHeihgt = $(window).height();
            if (scroll > blockPosition - windowHeihgt) {
                $(this).addClass("fadein_l");
            }
        });
    });
});

// 利用案内
const week = ["日", "月", "火", "水", "木", "金", "土"];
const today = new Date();
// 月末だとずれる可能性があるため、1日固定で取得
var showDate = new Date(today.getFullYear(), today.getMonth(), 1);
// 初期表示
window.onload = function () {
    showProcess(today, calendar);
};
// 前の月表示
function prev() {
    showDate.setMonth(showDate.getMonth() - 1);
    showProcess(showDate);
}

// 次の月表示
function next() {
    showDate.setMonth(showDate.getMonth() + 1);
    showProcess(showDate);
}

// カレンダー表示
function showProcess(date) {
    var year = date.getFullYear();
    var month = date.getMonth();
    var month2 = date.getMonth() + 1;
    var m2 = (month2 + 1);
    var MAX = 13;
    if (m2 >= MAX) {
        m2 = 1;
    }

    document.querySelector('#c_header').innerHTML = year + "年 " + (month + 1) + "月";
    document.querySelector('#c_header2').innerHTML = year + "年 " + m2 + "月";

    var calendar = createProcess(year, month);
    document.querySelector('#calendar').innerHTML = calendar;

    var calendar = createProcess(year, month2);
    document.querySelector('#calendar2').innerHTML = calendar;

}

// カレンダー作成
function createProcess(year, month) {
    // 曜日
    var calendar = "<table><tr class='dayOfWeek'>";
    for (var i = 0; i < week.length; i++) {
        calendar += "<th>" + week[i] + "</th>";
    }
    calendar += "</tr>";

    var count = 0;
    var startDayOfWeek = new Date(year, month, 1).getDay();
    var endDate = new Date(year, month + 1, 0).getDate();
    var lastMonthEndDate = new Date(year, month, 0).getDate();
    var row = Math.ceil((startDayOfWeek + endDate) / week.length);

    // 1行ずつ設定
    for (var i = 0; i < row; i++) {
        calendar += "<tr>";
        // 1colum単位で設定
        for (var j = 0; j < week.length; j++) {
            if (i == 0 && j < startDayOfWeek) {
                // 1行目で1日まで先月の日付を設定
                calendar += "<td class='disabled'>" + (lastMonthEndDate - startDayOfWeek + j + 1) + "</td>";
            } else if (count >= endDate) {
                // 最終行で最終日以降、翌月の日付を設定
                count++;
                calendar += "<td class='disabled'>" + (count - endDate) + "</td>";
            } else {
                // 当月の日付を曜日に照らし合わせて設定
                count++;
                if (year == today.getFullYear()
                    && month == (today.getMonth())
                    && count == today.getDate()) {
                    calendar += "<td class='today'>" + count + "</td>";
                } else {
                    calendar += "<td>" + count + "</td>";
                }
            }
        }
        calendar += "</tr>";
    }
    return calendar;
}
// フッター波
$('#wave').wavify({
    height: 60,
    bones: 3,
    amplitude: 40,
    color: '#72b8ff',
    speed: .25
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


//   レスポンシブ
const activebtn = () => {
    document.getElementById('target').classList.toggle("active");
    document.getElementById('nav_target').classList.toggle("nav_active")
}

// ヘッダー出たり消えたり ヘッダーの高さを超えたら
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
    var elementTop = $('#time').offset().top;
    if(scroll == flag) {

    }else if (elementTop >scroll || 0 > scroll - flag) {
        $('.header_top').removeClass('fadeout_h');
        $('.header_top').addClass('fadein_h');
    } else {
        $('.header_top').addClass('fadeout_h');
        $('.header_top').removeClass('fadein_h');
    }
    flag = scroll;
}

$(window).on('lord', () => {
    fadeoutHeaderScrollAnime();
});

$(window).scroll(() => {
    fadeoutHeaderScrollAnime();
});
