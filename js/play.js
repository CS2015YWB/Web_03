
window.onload = function(){
    document.getElementById("play").onclick = function(){
        getResult();
        if(Judge()){
            document.getElementById("endgame").innerText = "恭喜！你的得分为：" + score.toString();
        }
    };
};
//异步调用(ES7的async/await)
async function getResult() {
	let res;
	try {
		res = await Box();   //可移动盒子
        res = await Score(); //得分
        res = await Bgm();   //开始游戏背景音乐
        res = await WallA();  //障碍物A
        res = await WallB();  //障碍物B
        res = await WallC();  //障碍物C
        res = await Judge();  //规则判断
		return res;
	} catch (err) {
		return handleError(err);
	}
}
