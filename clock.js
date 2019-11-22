$(document).ready(function(){
	
	var wrap = $('#wrap');
	var clock = $('.content').find('span');
	var control = $('footer').find('li');
	var controlA = control.find('a');
	var a = control.eq(0).find('a');
	var b = control.eq(1).find('a');
	var c = control.eq(2).find('a');
	var d = control.eq(3).find('a');
	var e = control.eq(4).find('a');
	var f = control.eq(5).find('a');
	var min = new Date().getMinutes();
	function changeClass(classTarget){
		controlA.removeClass('on');
		classTarget.addClass('on');
	}
	
	function time(){
		today = new Date();
		hr = today.getHours();
		min = today.getMinutes();
		sec = today.getSeconds();
		if(hr < 10){
			hnum = '0'+hr;
		}else{
			hnum = hr;
		}
		if(min < 10){
			mnum = '0'+min;
		}else{
			mnum = min;
		}
		if(sec < 10){
			snum = '0'+sec;
		}else{
			snum = sec;
		}
		clock.eq(0).text(hnum);
		clock.eq(1).text(mnum);
		clock.eq(2).text(snum);		
	}
	setInterval(time,1000);
	
	if(min >= 0 && min < 10){
		wrap.attr('class','a')
		changeClass(a);
	}else if(min >= 10 && min < 20){
		wrap.attr('class','b')
		changeClass(b);
	}else if(min >= 20 && min < 30){
		wrap.attr('class','c')
		changeClass(c);
	}else if(min >= 30 && min < 40){
		wrap.attr('class','d')
		changeClass(d);
	}else if(min >= 40 && min < 50){
		wrap.attr('class','e')
		changeClass(e);
	}else{
		wrap.attr('class','f')
		changeClass(f);
	}
	
	controlA.click(function(a){
		a.preventDefault();
		var bgClass = $(this).text();
		changeClass($(this));
		wrap.attr('class',bgClass);
	});
	
});
