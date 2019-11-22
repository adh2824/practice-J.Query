$(document).ready(function(){
	
	$('.slideshow').each(function(){
		var timer;
		var wrapper = $(this);
		function changeImg(){
			var img = wrapper.find('a');
			var first = img.eq(0);
			var second = img.eq(1);
			first.fadeOut().appendTo(wrapper);
			second.fadeIn();
		}
		function startTimer(){
			timer = setInterval(changeImg,3000);
		}
		function stopTimer(){
			clearInterval(timer);
		}
		wrapper.find('a').hover(stopTimer,startTimer);
		startTimer();
	});
	
	//번호 붙히기
	$('section').each(function(){
		var no = $(this).index();
		var h2 =$(this).find('h2');
		var h2text = h2.text();
		h2.text('[0'+no+']'+h2text);
	});
	
	//bxSlider
	 $('.slider').bxSlider({
		 auto:true,
		 autoContrls:true,
		 caption:true,
		 mode:'fade',
		 randomStart:true,
		 pagerCustom:'.mypager'
	 });
	
});