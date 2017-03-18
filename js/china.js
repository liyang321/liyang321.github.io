
window.onload=function(){
		function mytime(){
		var time = document.getElementById("time");
		var today = new Date();
		var todayYear = today.getFullYear();
		var todayMonth = today.getMonth()+1;
		var todayDate = today.getDate();
		var todayDay = today.getDay();
		var weeks =["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
		time.innerHTML = todayYear + "年" + todayMonth + "月" + todayDate + "日" + weeks[todayDay];
	}
	mytime();


	var left = document.getElementById("left");
var m =1;
setInterval(function(){
	m++;
	if (m>=4) {
		m = 1;
	}
	left.src="../image/con"+m+".jpg";
},4000);
}


