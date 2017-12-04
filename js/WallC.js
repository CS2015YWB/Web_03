//从右向左移动的墙
let divc = $('#wallc');
function WallC(){
    divc.animate({left : divc.width() - $('mycanvas').width()}, 7000, 'swing', function(){
        $(this).css({left : 1050});
        $(this).css({top : parseInt(Math.random()*10)*25});
        if(divc.css('left') == '1050px'){
            WallC();
        }
    });
}