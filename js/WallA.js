//从右向左移动的墙
let div = $('#walla');
function WallA(){
    div.animate({left : div.width() - $('mycanvas').width()}, 5000, 'swing', function(){
        $(this).css({left : 1050});
        $(this).css({top : parseInt(Math.random()*10)*25});
        if(div.css('left') == '1050px'){
            WallA();
        }
    });
}