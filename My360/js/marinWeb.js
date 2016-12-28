function lunboyixia(klassN,direction){
	var classes = document.getElementsByClassName(klassN)[0].childNodes;
	var lunbozu=[];
	// var tags = ["DIV","A","table"];
	lunbozu = getUseElements(classes,["DIV"]);//取得要轮播的几个div
	// console.log(lunbozu);
	len = lunbozu.length;
	for(i=0;i<len;i++){
		var ifon = lunbozu[i].className.search("lbon");//查询这个class名，如果存在，则取消他
		if(ifon>0){
			lunbozu[i].className = lunbozu[i].className.slice(0,ifon-1);//取消一个class让他消失
			if("left_Up" == direction){
				i = --i<0?len-1:i;
			}else if("right_Nexe" == direction){
				i = ++i>=len?0:i;
			}
			lunbozu[i].className = lunbozu[i].className+" lbon";//为下一个div添加class让他显示
		}
	}
}

//获取某class下的所有指定元素//list是某元素下childNodes，tags是需要提取的标签名(大写)数组.
function getUseElements(list,tags){
	if(list[0] == undefined | list[0] == null){
		return null;
	}
	var uses = [];
	for(var i=0;i<list.length;i++){
		if(list[i].tagName){
			for(var j=0;j<tags.length;j++){
				// console.log(tags[j]);
				if(list[i].tagName == tags[j]){
					uses.push(list[i]);
					break;
				}
			}
			
		}
	}
	return uses;
}

//为DIV添加鼠标移入移除时左右按钮效果
function addLunboEvent(klassW,klassN){
	lunbotoggle = document.getElementsByClassName(klassW);
	for(var j=0;j<lunbotoggle.length;j++){
		lunbotoggle[j].addEventListener("click",function(e){
			var str = e.target.className;
			if(str.search("left_Up")){
				lunboyixia(klassN,"left_Up");
			}else if(str.search("right_Next")){
				lunboyixi(klassN,"right_Next");
			}
		});
		lunbotoggle[j].addEventListener("mouseover",function(e){
			if(e.srcElement.className.search("left_Up") > 0){
				document.getElementsByClassName("left_Up")[0].style.opacity = "0.7";
				document.getElementsByClassName("right_Next")[0].style.opacity = "0.3";
			}else{
				document.getElementsByClassName("left_Up")[0].style.opacity = "0.3";
				document.getElementsByClassName("right_Next")[0].style.opacity = "0.7";
			}
		});
	}
	var slideHtS = document.getElementsByClassName(klassN);
	slideHtS[0].addEventListener("mouseover",function(){
		for(var j=0;j<lunbotoggle.length;j++){
			lunbotoggle[j].style.opacity = "0.3";
		}
	});
	slideHtS[0].addEventListener("mouseout",function(e){
		for(var j=0;j<lunbotoggle.length;j++){
			lunbotoggle[j].style.opacity = "0";
		}
	});
}

//自动轮播
function addInterval(klassN,times){
	setInterval(function(){
		lunboyixia(klassN,"left_Up");
	},times);
}

addLunboEvent("slide","items"); //为左侧轮播组合栏1添加鼠标移入移除时左右按钮效果
addInterval("items",15000);//添加自动轮播15s


// addLunboEvent("slides","zcfy-i-img");

function btnToggle(klass){
	var classes = document.getElementsByClassName(klass)[0];
	// console.log(classes);
	classes.addEventListener("mouseover",function(){
		var btn = getUseElements(classes.childNodes,["A"]);
		for(var i=0;i<btn.length;i++){
			btn[i].style.opacity = "0.3";
		}
	});

	classes.addEventListener("mouseout",function(e){
		var btn = getUseElements(classes.childNodes,["A"]);
		// console.log(btn);
		for(var i=0;i<btn.length;i++){
			btn[i].style.opacity = "0";
		}
		if(e.fromElement.className.search("slides")){
			
			if(e.toElement.className.search("left_Up") > 0){

				//是在找不到方法了只好用JQuery了！！！！0.0
				// btn[0].style.opacity = "0.7"; //这种方式为什么不行?
				$(document).ready(function(){
					$(btn[0]).css("opacity","0.7");
					$(btn[1]).css("opacity","0.3");
					$(btn[0]).click(function(){
						lunbo(klass,"left_Up");
					});
				});

			}else if(e.toElement.className.search("right_Next") > 0){
				$(document).ready(function(){
					$(btn[0]).css("opacity","0.3");
					$(btn[1]).css("opacity","0.7");
					$(btn[1]).click(function(){
						lunbo(klass,"right_Next");
					});
					
				});
			}
		}
	});
	
}

function lunbo(klass,direction){
	var lunboclass = document.getElementsByClassName(klass)[0].childNodes;
	lunboclass = getUseElements(lunboclass,["DIV"])[0].childNodes;
	lunboclass = getUseElements(lunboclass,["DIV"])
	
	var len = lunboclass.length;
	console.log("总长度:"+len);
	for(i=0;i<len;i++){
		var ifon = lunboclass[i].className.search("light");//查询这个class名，如果存在，则取消他
		console.log("正在查询:"+i);
		if(ifon>0){
			lunboclass[i].className = lunboclass[i].className.slice(0,ifon-1);//取消一个class让他消失
			console.log("查询到的:"+i);
			lunboclass[i].style.display = "none";
			if("left_Up" == direction){
				i = --i<0?len-1:i;
			}else if("right_Next" == direction){
				i = ++i>=len?0:i;
			}
			lunboclass[i].className = lunboclass[i].className+" light";//为下一个div添加class让他显示
			lunboclass[i].style.display = "block";
			console.log("之后:"+i);
		}
	}
}

btnToggle("zcfy-i");
function getNextClassName(klass){
	var n = document.getElementsByClassName(klass)[0].childNodes;
	n = getUseElements(n,["DIV"])[0].className;
	// console.log(klass);
	btnToggle(n);
}

function btnClick(){
	var toutiao = document.getElementById("toutiao");
	var bagua = document.getElementById("bagua");
	var kantianxia = document.getElementById("kantianxia");
	var shehui = document.getElementById("shehui");
	console.log(bagua.id);
	bagua.addEventListener("click",function(){
		console.log(bagua.className);
		bagua.className = "zcfy-t-on";
		toutiao.className = "";
		kantianxia.className = "";
		shehui.className = "";
		biaoTiSwitch("zcfy-ti","bagua");
		getNextClassName("bagua");
	});
	kantianxia.addEventListener("click",function(){
		console.log(bagua.className);
		bagua.className = "";
		toutiao.className = "";
		kantianxia.className = "zcfy-t-on";
		shehui.className = "";
		biaoTiSwitch("zcfy-ti","kantianxia");
		getNextClassName("kantianxia");
	});
	shehui.addEventListener("click",function(){
		console.log(bagua.className);
		bagua.className = "";
		toutiao.className = "";
		kantianxia.className = "";
		shehui.className = "zcfy-t-on";
		biaoTiSwitch("zcfy-ti","shehui");
		getNextClassName("shehui");
	});
	toutiao.addEventListener("click",function(){
		console.log(bagua.className);
		bagua.className = "";
		toutiao.className = "zcfy-t-on";
		kantianxia.className = "";
		shehui.className = "";
		biaoTiSwitch("zcfy-ti","toutiao");
		getNextClassName("toutiao");
	});
}

function biaoTiSwitch(klassU,klassN){
	var classesU = document.getElementsByClassName(klassU)[0].childNodes;
	var useTitleU = getUseElements(classesU,["DIV"]);
	useTitleU.shift();
	for(var i=0;i<useTitleU.length;i++){
		var classU = useTitleU[i].className;
		if(/\w \w/i.test(classU)){
			useTitleU[i].className = classU.replace(/(\w) (onlive)/i,'$1');
		}
	}

	var useTitleN = document.getElementsByClassName(klassN)[0];
	useTitleN.className = useTitleN.className + " onlive";
}





/*左右切换图标*/
var slideToggle = document.getElementsByClassName("sliders");
for(var n=0;n<slideToggle.length;n++){
	slideT(slideToggle[n]);
}
function slideT(slideToggle){
	var ssh = slideToggle.className;
	ssh = ssh.replace(/([\w]+) ([\w]+)/i,'$1');
	var addLN = document.getElementsByClassName(ssh)[0];
	var shell;
	if(slideToggle.getAttribute("data-toggle") == "slider"){
		var childs = slideToggle.childNodes;
		childs = getUseElements(childs,["DIV"]);
		for(var i=0;i<childs.length;i++){
			if(childs[i].className == "slider"){
				shell = childs[i];
				break;
			}
		}
	}
	addLN.addEventListener("mouseover",function(){
		shell.style.display = "block";
	});
	addLN.addEventListener("mouseout",function(){
		shell.style.display = "none";
	});
}

/*玩游戏 - 热门推荐部分*/
$(document).ready(function(){
	var $wb42 = $('.wb4-rmtj-sy');
	$wb42.hide();
	$('.title-rmtj-r > a:first').addClass('rmtj-active');



});

$('.title-rmtj-r > a').mouseover(function(){
	var actives = $(this).attr('title');
	if(actives == "yy"){
		$('.title-rmtj-r > a:last').removeClass('rmtj-active');
		$('.title-rmtj-r > a:first').addClass('rmtj-active');
		$('.wb4-rmtj-sy').hide();
		$('.wb4-rmtj-yy').show();
	}
	if(actives == "sy"){
		$('.title-rmtj-r > a:first').removeClass('rmtj-active');
		$('.title-rmtj-r > a:last').addClass('rmtj-active');
		$('.wb4-rmtj-yy').hide();
		$('.wb4-rmtj-sy').show();
	}
});
