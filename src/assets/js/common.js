


//三种弹窗类型 ：success error warning
export function message(title,type) {	
	type = type?type:'success';
	this.$message({
		type: type,
		message: title,
		dangerouslyUseHTMLString: true
	});
};



//正则  value:校验的值  type:检测类型
//type  phone:手机号  account:账号  password:密码
export function regular(value,type) {
	let Reg  = {
		'phone': /^1[3,4,5,7,8,9]\d{9}$/,
		'account':/^[A-Za-z0-9]+$/,
		'password':/(?=.*[A-Za-z])(?=.*[0-9])[a-zA-Z0-9]{2,10}/
	};
	let resute = Reg[type]?Reg[type].test(value):false;
	return resute;
}


// JavaScript Document
//注释:b为屏幕宽度的多少分之一.字体设置所有尺寸都适用
export function rem(){
	setRemSize();
	window.addEventListener("resize",setRemSize,false);
	function setRemSize(){
		var b = 14.4;
	    var _clientWidth = document.documentElement.clientWidth/b+'px'; 
	    document.documentElement.style.fontSize = _clientWidth;
 	};
};


//时间戳转日期 :type  1:年月日  2:年月日 时分秒  3:年月
export function formatDate(value,type=1) {
	var date = new Date(Number(value));
	var y = date.getFullYear(),
		m = date.getMonth() + 1,
		d = date.getDate(),
		h = date.getHours(),
		i = date.getMinutes(),
		s = date.getSeconds();
	if (m < 10) { m = '0' + m; }
	if (d < 10) { d = '0' + d; }
	if (h < 10) { h = '0' + h; }
	if (i < 10) { i = '0' + i; }
	if (s < 10) { s = '0' + s; }
	let resute;
	if(type==1){
		resute = y + '-' + m + '-' + d
	}else if(type==2){
		resute = y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s
	}else if(type==3){
		resute = y + '-' + m;
	}
	return resute;
}


	 
