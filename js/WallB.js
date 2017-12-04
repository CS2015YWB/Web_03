//从右向左移动的墙
let divb = $('#wallb');
function WallB(){
    divb.animate({left : divb.width() - $('mycanvas').width()}, 6000, 'swing', function(){
        $(this).css({left : 1050});
        $(this).css({top : parseInt(Math.random()*10)*25});
        if(divb.css('left') == '1050px'){
            WallB();
        }
    });
}