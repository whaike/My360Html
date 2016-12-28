/*邮件栏*/
var mail_show = document.getElementById("mail_single");
var mail_form = document.getElementById("mail_form");

mail_show.addEventListener("click",function(){
	mail_show.style.display="none";
	mail_form.style.display="block";
	mail_form.childNodes[1].childNodes[1].childNodes[0].focus();
});
document.getElementById("submit_logoin").addEventListener("click",function(){
	mail_show.style.display="block";
	mail_form.style.display="none";
});

/*搜索栏*/
document.getElementById("search_input").addEventListener("click",function(){
	if(document.getElementById("search_tuijian").style.display=="block"){
		document.getElementById("search_tuijian").style.display="none";
	}else{
		document.getElementById("search_tuijian").style.display="block";
	}
	if(document.getElementById("search_bo").style.display=="none"){
		document.getElementById("search_bo").style.display="block";
	}else{
		document.getElementById("search_bo").style.display="none";
	}
	
});

/*热词推荐下拉表2*/

var search_i_ximg_i = document.getElementById("search_i_ximg_i");
var search_i_xiala = document.getElementById("search_i_xiala");

search_i_ximg_i.addEventListener("click",function(e){
	var so_hotlist = document.getElementById("so-hotlist");
	var search_i_ximg_i = document.getElementById("search_i_ximg_i");

	if(so_hotlist.className == "somedisabled"){
		so_hotlist.className = "someenabled";
		if(so_hotlist.className == "someenabled"){
			search_i_xiala.addEventListener("mouseover",jianting1);
			search_i_xiala.addEventListener("mouseout",jianting2);
		}
		
		search_i_ximg_i.style.background='url(https://p0.ssl.qhimg.com/d/inn/ec1d3bf8/arrows.png) no-repeat 5px -19px';
	}else{
		so_hotlist.className = "somedisabled";
		
	}

	if(so_hotlist.className == "somedisabled"){
		search_i_ximg_i.removeEventListener("click",jianting1,true);
		search_i_ximg_i.removeEventListener("click",jianting2,true);
		search_i_ximg_i.style.background='url(https://p0.ssl.qhimg.com/d/inn/ec1d3bf8/arrows.png) no-repeat 5px 10px';
	}
});

function jianting1(){
	search_i_xiala.style.backgroundColor = "green";
	search_i_ximg_i.style.background='url(https://p0.ssl.qhimg.com/d/inn/ec1d3bf8/arrows.png) no-repeat 5px -85px';
}
function jianting2(){
	search_i_xiala.style.backgroundColor = "";
	search_i_ximg_i.style.background='url(https://p0.ssl.qhimg.com/d/inn/ec1d3bf8/arrows.png) no-repeat 5px -19px';
}


/*弹钢琴栏*/
var tubiaolist = document.getElementById("tan_list1");
var tanlist_h = document.getElementById("tanlist_h");

tubiaolist.addEventListener("mouseover",function(e){
	tanlist_h.style.display = "block";


	var act = e.toElement.id;
	if(act != "tanlist_h" && act != "tan_list1"){
		tanlist_h.style.display = "none";
	}
});

tubiaolist.addEventListener("mouseout",function(e){
	var act = e.toElement.id;
	if(act != "tanlist_h"){
		tanlist_h.style.display = "none";
	}

});

