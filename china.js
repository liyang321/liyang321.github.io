

function mytime(){
	var time = document.getElementById("time");
	var today = new Date();
	var todayYear = today.getFullYear();
	var todayMonth = today.getMonth();
	var todayDate = today.getDate();
	var todayDay = today.getFullDate();
	var weeks =["星期一","星期二","星期三","星期四","星期五","星期六","星期日"];
	time.innerHTML = todayYear + "年" + todayMonth + "月" + todayDate + "日" + weeks[todayDay];
}
mytime();
