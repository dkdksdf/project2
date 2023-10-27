const tabBtn = $('.buttons li');
const panels = $('.panel1');
const toppongs = $('.topping>div');
const msg = $('.menu_img>img');

tabBtn.on('click', function (e) {
    e.preventDefault();
    let tg = $(this).index();
    tabBtn.removeClass('on').eq(tg).addClass('on');
    toppongs.hide().eq(tg).show();
    panels.hide().eq(tg).show();
    msg.hide().eq(tg).show();
});

$('a[href="#"]').on('click', function(e) {
    e.preventDefault();
});

