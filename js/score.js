//计分 SCORE  正常
let score = 0;
function Score(){
    document.getElementById("score").innerText = score.toString() + "分";
    score += 1;
    t=setTimeout("Score()",500);
}