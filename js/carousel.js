var index = 1

var pic = new Array(
"恼乱横波秋一寸，斜阳只与黄昏近。"
,"竹枝宛转秋猿苦，桑落潋滟春泉浑。"
,"晓来江气连城白，雨后山光满郭青。"
)

let n = setInterval(turn2,3000)

function turn (){
  var a = document.getElementById("picsa")
  // a.href = adds[index-1]

  var img = document.getElementById("picsi")
  img.src ="./img/首页/" + index + ".png"

  var t = document.getElementById("picst")
  t.innerText = pic[index-1]
}

function turn2 (){
  index ++ ;
  if(index > 3){
    index = 1
  }
  var a = document.getElementById("picsa")
  // a.href = adds[index-1]

  var img = document.getElementById("picsi")
  img.src ="./img/首页/" + index + ".png"

  var t = document.getElementById("picst")
  t.innerText = pic[index-1]

}

function right(){
  clearInterval(n)
	if(index<3){
		index++;
	}
	else{
		index=1;
	}
	turn();
  n = setInterval(turn2,3000)
}

function left(){
  clearInterval(n)
	if(index>1){
		index--;
	}
	else{
		index=3;
	}
	turn();
  n = setInterval(turn2,3000)
}

var xin = document.getElementById("xin")
xin.onmouseover = function(){
  clearInterval(n)
  index = 1
  turn()
  n = setInterval(turn2,3000)
}

var hua = document.getElementById("hua")
hua.onmouseover = function(){
  clearInterval(n)
  index = 2
  turn()
  n = setInterval(turn2,3000)
}

var wang = document.getElementById("wang")
wang.onmouseover = function(){
  clearInterval(n)
  index = 3
  turn()
  n = setInterval(turn2,3000)
}

