function Judge(){
    let box = document.getElementById("box");
    let walla = document.getElementById("walla");
    let wallb = document.getElementById("wallb");
    let wallc = document.getElementById("wallc");
    let b1 = box.style.left;
    let b2 = box.style.top;
    let w11 = walla.style.left;
    let w12 = walla.style.top;
    let w13 = walla.style.height;
    let w21 = wallb.style.left;
    let w22 = wallb.style.top;
    let w23 = walla.style.height;
    let w31 = wallc.style.left;
    let w32 = wallc.style.top;
    let w33 = walla.style.height;
    if((b1 === w11 && b2 >= w12 && b2 <= (w12+w13)) || (b1 === w21 && b2 >= w22 && b2 <= (w22+w23)) || (b1 === w31 && b2 >= w32 && b2 <= (w32+w33)))
    alert("q");    
    return 0;
    }
    setInterval(Judge(),500);
}