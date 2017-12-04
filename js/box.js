//方位键或者按钮移动红色盒子   正常
function Box(){
    let div=document.getElementById('box');
    let buttonup = document.getElementById("buttonup");
    let buttondown = document.getElementById("buttondown");
    let buttonleft = document.getElementById("buttonleft");
    let buttonright = document.getElementById("buttonright");
    let up=0, left=0, right=0, bottom=0;
    let timer=null, x=0, y=0;
    
    //<1>按钮实现div移动  20px
    buttonup.onclick = function(){
        if(y >= 5){
            y -= 10;
            div.style.top = y + 'px';
        }
    }
    buttondown.onclick = function(){
        if(y <= 555){
            y += 10;
            div.style.top=y+'px';
        }
    }
    buttonleft.onclick = function(){
        if (x >= 5) {
            x -= 10;
            div.style.left=x+'px';
        }
    }
    buttonright.onclick = function(){
        if (x <= 995) {
            x += 10;
            div.style.left=x+'px';
        }
    }
    
    //<2>↑↓←→方位键实现box移动 5px
    timer=setInterval(function(){
            if (x>=5 && left==1) {
                x-=10;
                div.style.left=x+'px';
            }
            if (x<=995 && right==1) {
                x+=10;
                div.style.left=x+'px';
            }
            if (y>=5 && up==1) {
                y-=10;
                div.style.top=y+'px';
            }
            if (y<=555 && bottom==1) {
                y+=10;
                div.style.top=y+'px';
            }
    },20)
    document.onkeydown=function(ev){
        let e=ev||window.event;
        switch(e.keyCode){
            case 37:
                left=1;
                break;
            case 38:
                up=1;
                break;
            case 39:
                right=1;
                break;
            case 40:
                bottom=1;
                break;
            default: 0;
        }
    }
    document.onkeyup=function(ev){
        let e=ev||window.event;
        switch(e.keyCode){
            case 37:
                left=0;
                break;
            case 38:
                up=0;
                break;
            case 39:
                right=0;
                break;
            case 40:
                bottom=0;
                break;
            default: 0;
        }
    }
}
