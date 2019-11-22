$(document).ready(function(){
	
	var section = $('section');
	var li = $('li');
	
	
	section.height($(window).height());
	
	$(window).resize(function(){
		section.height($(this).height());
	});
	
	section.mousewheel(function(event,delta){
		if(delta > 0){
			var prev = $(this).prev().offset().top;
			$('html, body').stop().animate({scrollTop:prev});
		}else if(delta < 0){
			var next = $(this).next().offset().top;
			$('html, body').stop().animate({scrollTop:next});
		}
			
	});
	
	$(window).scroll(function(){
		var ht = $(this).height();
		var scrollT = $(this).scrollTop();
		
		for(var i = 0; i <5; i++){
			if(scrollT >=ht*i && scrollT < ht*(i+1)){
				li.find('a').blur();
				li.removeClass('on');
				li.eq(i).addClass('on');
			}
		}
		
		
	});
	
	li.click(function(){
		
		var ht = $(window).height();
		var i = $(this).index();
		var nowTop = ht*i;
		$('html,body').stop().animate({scrollTop:nowTop});
		
	});
	
	
	
	
	
	
	
});