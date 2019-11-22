$(document).ready(function(){
	
	//padgeX pageY
	$(window).mousemove(function(e){
		var pageX = e.pageX;
		var pageY = e.pageY;
		$('.pageX').text(pageX);
		$('.pageY').text(pageY);
	});
	
	//툴팁 텍스트
	var tooltip = $('<div class="balloon"/>').appendTo('.tt');
	$('.showTooltip').each(function(){
		var li = $(this);
		var text = li.attr('title');
		li.attr('title','');
		li.mouseenter(function(){
			tooltip.text(text);
		});
	});
	
});