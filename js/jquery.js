const tabBtn = $('.buttons li');
const panels = $('.panel1');
const toppongs = $('.topping>div');
const msg = $('.menu_img>img');

tabBtn.on('click', function (e) {
    e.preventDefault();
    let tg = $(this).index();
    tabBtn.removeClass('on');
    tabBtn.eq(tg).addClass('on');

    toppongs.hide();
    toppongs.eq(tg).show();

    panels.hide();
    panels.eq(tg).show();

    msg.hide();
    msg.eq(tg).show();

});
