// JavaScript Document

export default function rem(){
		setRemSize();
		window.addEventListener("resize",setRemSize,false);
		function setRemSize(){
			var b = 19.2;
		    var _clientWidth = document.documentElement.clientWidth/b+'px'; 
		    document.documentElement.style.fontSize = _clientWidth;
	 	};
};
		 
	//注释:b为屏幕宽度的多少分之一.字体设置所有尺寸都适用，但是屏幕宽度在1200px以上才适用长度设置